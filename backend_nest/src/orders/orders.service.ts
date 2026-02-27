import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DataSource, Repository } from "typeorm";
import { Order, OrderStatus, PaymentMethod } from "./entities/order.entity";
import { OrderItem } from "../order-items/entities/order-item.entity";
import { Product } from "../products/entities/product.entity";
import { User } from "../users/users.entity";
import { Address, AddressType } from "../addresses/entities/address.entity";
import { Cart } from "../cart/entities/cart.entity";
import { CheckoutOrderDto } from "./dto/checkout-order.dto";

@Injectable()
export class OrdersService {
  constructor(
    private readonly dataSource: DataSource,
    @InjectRepository(Order)
    private readonly orderRepo: Repository<Order>,
    @InjectRepository(OrderItem)
    private readonly orderItemRepo: Repository<OrderItem>,
    @InjectRepository(Product)
    private readonly productRepo: Repository<Product>,
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
    @InjectRepository(Address)
    private readonly addressRepo: Repository<Address>,
    @InjectRepository(Cart)
    private readonly cartRepo: Repository<Cart>,
  ) {}

  private toAdminOrder(order: Order) {
    return {
      id: order.id,
      orderNumber: order.orderNumber,
      userId: order.userId,
      addressId: order.addressId,
      totalAmount: order.totalAmount,
      status: order.status,
      paymentMethod: order.paymentMethod,
      notes: order.notes,
      createdAt: order.createdAt,
      updatedAt: order.updatedAt,
      user: order.user
        ? {
            id: order.user.id,
            email: order.user.email,
            name: order.user.name,
            phone: order.user.phone,
            isActive: order.user.isActive,
          }
        : null,
      address: order.address
        ? {
            id: order.address.id,
            city: order.address.city,
            street: order.address.street,
            building: order.address.building,
            apartment: order.address.apartment,
            postalCode: order.address.postalCode,
            phone: order.address.phone,
          }
        : null,
      orderItems: (order.orderItems ?? []).map((item) => ({
        id: item.id,
        productId: item.productId,
        productName: item.productName,
        quantity: item.quantity,
        price: item.price,
        total: item.total,
      })),
    };
  }

  async findByUser(userId: number): Promise<Order[]> {
    return this.orderRepo.find({
      where: { userId },
      relations: ["orderItems", "address"],
      order: { createdAt: "DESC" },
    });
  }

  async findAllForAdmin() {
    const orders = await this.orderRepo.find({
      relations: ["orderItems", "address", "user"],
      order: { createdAt: "DESC" },
    });
    return orders.map((order) => this.toAdminOrder(order));
  }

  async findOne(id: number): Promise<Order> {
    const order = await this.orderRepo.findOne({
      where: { id },
      relations: ["orderItems", "address", "user"],
    });
    if (!order) {
      throw new NotFoundException(`Заказ с ID ${id} не найден`);
    }
    return order;
  }

  async findOneForAdmin(id: number) {
    const order = await this.orderRepo.findOne({
      where: { id },
      relations: ["orderItems", "address", "user"],
    });
    if (!order) {
      throw new NotFoundException(`Order with ID ${id} not found`);
    }
    return this.toAdminOrder(order);
  }

  async checkout(dto: CheckoutOrderDto): Promise<Order> {
    if (!dto.items?.length) {
      throw new BadRequestException("Корзина пуста");
    }

    const user = await this.userRepo.findOneBy({ id: dto.userId });
    if (!user) {
      throw new NotFoundException(`Пользователь с ID ${dto.userId} не найден`);
    }

    return this.dataSource.transaction(async (manager) => {
      const norm = (v?: string | null) => (v || "").trim().toLowerCase();
      let address: Address | null = null;

      if (dto.addressId) {
        address = await manager.findOne(Address, {
          where: { id: dto.addressId, userId: dto.userId },
        });
        if (!address) {
          throw new BadRequestException("Указанный адрес не найден у пользователя");
        }
      } else if (dto.address) {
        const wantedType = dto.address.type || AddressType.SHIPPING;
        const existing = (await manager.find(Address, { where: { userId: dto.userId } })).find(
          (a) =>
            (a.type || AddressType.SHIPPING) === wantedType &&
            norm(a.city) === norm(dto.address?.city) &&
            norm(a.street) === norm(dto.address?.street) &&
            norm(a.building) === norm(dto.address?.building) &&
            norm(a.apartment) === norm(dto.address?.apartment) &&
            norm(a.postalCode) === norm(dto.address?.postalCode) &&
            norm(a.phone) === norm(dto.address?.phone),
        );

        if (existing) {
          if (dto.address.isDefault && !existing.isDefault) {
            await manager.update(
              Address,
              { userId: dto.userId, isDefault: true },
              { isDefault: false },
            );
            await manager.update(Address, existing.id, { isDefault: true });
            address = await manager.findOneOrFail(Address, { where: { id: existing.id } });
          } else {
            address = existing;
          }
        } else {
          const payload = manager.create(Address, {
            userId: dto.userId,
            type: wantedType,
            city: dto.address.city,
            street: dto.address.street,
            building: dto.address.building || null,
            apartment: dto.address.apartment || null,
            postalCode: dto.address.postalCode || null,
            phone: dto.address.phone || null,
            isDefault: !!dto.address.isDefault,
          });

          if (payload.isDefault) {
            await manager.update(
              Address,
              { userId: dto.userId, isDefault: true },
              { isDefault: false },
            );
          }

          address = await manager.save(Address, payload);
        }
      } else {
        address = await manager.findOne(Address, {
          where: { userId: dto.userId, isDefault: true },
        });
      }

      if (!address) {
        throw new BadRequestException(
          "Укажите адрес доставки или создайте новый адрес",
        );
      }

      let totalAmount = 0;
      const orderItems: OrderItem[] = [];

      for (const raw of dto.items) {
        const product = await manager.findOne(Product, {
          where: { id: raw.productId, isActive: true },
        });

        if (!product) {
          throw new NotFoundException(`Товар с ID ${raw.productId} не найден`);
        }

        if ((product.stock || 0) < raw.quantity) {
          throw new BadRequestException(
            `Недостаточно товара "${product.title}" на складе`,
          );
        }

        const unitPrice = Number(product.discontPrice || product.price || 0);
        const lineTotal = Number((unitPrice * raw.quantity).toFixed(2));
        totalAmount += lineTotal;

        const item = manager.create(OrderItem, {
          productId: product.id,
          productName: product.title,
          quantity: raw.quantity,
          price: unitPrice,
          total: lineTotal,
        });
        orderItems.push(item);

        product.stock = Number(product.stock || 0) - raw.quantity;
        await manager.save(Product, product);
      }

      const order = manager.create(Order, {
        userId: dto.userId,
        addressId: address.id,
        totalAmount: Number(totalAmount.toFixed(2)),
        status: OrderStatus.PENDING,
        paymentMethod: dto.paymentMethod || PaymentMethod.CASH,
        notes: dto.notes || null,
      });
      const savedOrder = await manager.save(Order, order);

      for (const item of orderItems) {
        item.orderId = savedOrder.id;
      }
      await manager.save(OrderItem, orderItems);

      await manager.delete(Cart, { userId: dto.userId });

      return manager.findOneOrFail(Order, {
        where: { id: savedOrder.id },
        relations: ["orderItems", "address", "user"],
      });
    });
  }

  async updateStatusByAdmin(id: number, status: OrderStatus) {
    return this.dataSource.transaction(async (manager) => {
      const order = await manager.findOne(Order, {
        where: { id },
        relations: ["orderItems", "address", "user"],
      });

      if (!order) {
        throw new NotFoundException(`Order with ID ${id} not found`);
      }

      const previousStatus = order.status;
      if (previousStatus === status) {
        return this.toAdminOrder(order);
      }

      // If admin cancels an order, return reserved stock back to products.
      if (status === OrderStatus.CANCELLED && previousStatus !== OrderStatus.CANCELLED) {
        for (const item of order.orderItems ?? []) {
          const product = await manager.findOne(Product, { where: { id: item.productId } });
          if (!product) continue;
          product.stock = Number(product.stock || 0) + Number(item.quantity || 0);
          await manager.save(Product, product);
        }
      }

      order.status = status;
      await manager.save(Order, order);

      const saved = await manager.findOneOrFail(Order, {
        where: { id: order.id },
        relations: ["orderItems", "address", "user"],
      });
      return this.toAdminOrder(saved);
    });
  }
}
