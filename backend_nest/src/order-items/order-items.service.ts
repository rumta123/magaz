// src/order-items/order-items.service.ts
import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { OrderItem } from "./entities/order-item.entity";
import { Order, OrderStatus } from "../orders/entities/order.entity"; // ✅ Импортируем OrderStatus!
import { Product } from "../products/entities/product.entity";
import { CreateOrderItemDto } from "./dto/create-order-item.dto";
import { UpdateOrderItemDto } from "./dto/update-order-item.dto";

@Injectable()
export class OrderItemsService {
  constructor(
    @InjectRepository(OrderItem)
    private readonly orderItemRepo: Repository<OrderItem>,
    @InjectRepository(Order)
    private readonly orderRepo: Repository<Order>,
    @InjectRepository(Product)
    private readonly productRepo: Repository<Product>,
  ) {}

  // 🔹 Создать позицию заказа
  async create(dto: CreateOrderItemDto): Promise<OrderItem> {
    const order = await this.orderRepo.findOneBy({ id: dto.orderId });
    if (!order) {
      throw new NotFoundException(`Заказ с ID ${dto.orderId} не найден`);
    }

    // ✅ ИСПРАВЛЕНО: используем enum вместо строк
    if (
      order.status === OrderStatus.CANCELLED ||
      order.status === OrderStatus.DELIVERED
    ) {
      throw new BadRequestException(
        "Нельзя изменить отменённый или доставленный заказ",
      );
    }

    const product = await this.productRepo.findOneBy({ id: dto.productId });
    if (!product) {
      throw new NotFoundException(`Товар с ID ${dto.productId} не найден`);
    }

    const orderItem = this.orderItemRepo.create({
      orderId: dto.orderId,
      productId: dto.productId,
      productName: dto.productName,
      quantity: dto.quantity,
      price: dto.price,
      total: dto.total || dto.price * dto.quantity,
    });

    return this.orderItemRepo.save(orderItem);
  }

  // 🔹 Получить все позиции заказа
  async findByOrder(orderId: number): Promise<OrderItem[]> {
    return this.orderItemRepo.find({
      where: { orderId },
      relations: ["product"],
      order: { createdAt: "ASC" },
    });
  }

  // 🔹 Получить позицию по ID
  async findOne(id: number): Promise<OrderItem> {
    const orderItem = await this.orderItemRepo.findOne({
      where: { id },
      relations: ["order", "product"],
    });

    if (!orderItem) {
      throw new NotFoundException(`Позиция заказа с ID ${id} не найдена`);
    }

    return orderItem;
  }

  // 🔹 Обновить позицию заказа
  async update(id: number, dto: UpdateOrderItemDto): Promise<OrderItem> {
    const orderItem = await this.findOne(id);

    const order = await this.orderRepo.findOneBy({ id: orderItem.orderId });
    if (!order) {
      throw new NotFoundException("Заказ не найден");
    }

    // ✅ ИСПРАВЛЕНО: используем enum вместо строк
    if (
      order.status === OrderStatus.CANCELLED ||
      order.status === OrderStatus.DELIVERED
    ) {
      throw new BadRequestException(
        "Нельзя изменить отменённый или доставленный заказ",
      );
    }

    if (dto.productId) {
      const product = await this.productRepo.findOneBy({ id: dto.productId });
      if (!product) {
        throw new NotFoundException(`Товар с ID ${dto.productId} не найден`);
      }
      orderItem.productId = dto.productId;
    }

    if (dto.productName) orderItem.productName = dto.productName;
    if (dto.quantity) orderItem.quantity = dto.quantity;
    if (dto.price) orderItem.price = dto.price;

    orderItem.total = orderItem.price * orderItem.quantity;

    if (dto.total) orderItem.total = dto.total;

    return this.orderItemRepo.save(orderItem);
  }

  // 🔹 Удалить позицию заказа
  async remove(id: number): Promise<{ message: string }> {
    const orderItem = await this.findOne(id);

    const order = await this.orderRepo.findOneBy({ id: orderItem.orderId });

    // ✅ ИСПРАВЛЕНО: используем enum вместо строк
    if (
      order &&
      (order.status === OrderStatus.CANCELLED ||
        order.status === OrderStatus.DELIVERED)
    ) {
      throw new BadRequestException(
        "Нельзя изменить отменённый или доставленный заказ",
      );
    }

    await this.orderItemRepo.remove(orderItem);
    return { message: "Позиция заказа успешно удалена" };
  }

  // 🔹 Обновить количество
  async updateQuantity(id: number, quantity: number): Promise<OrderItem> {
    const orderItem = await this.findOne(id);

    if (quantity < 1) {
      throw new BadRequestException("Количество должно быть больше 0");
    }

    orderItem.quantity = quantity;
    orderItem.total = orderItem.price * quantity;

    return this.orderItemRepo.save(orderItem);
  }

  // 🔹 Увеличить количество на 1
  async incrementQuantity(id: number): Promise<OrderItem> {
    const orderItem = await this.findOne(id);
    orderItem.quantity += 1;
    orderItem.total = orderItem.price * orderItem.quantity;
    return this.orderItemRepo.save(orderItem);
  }

  // 🔹 Уменьшить количество на 1
  async decrementQuantity(id: number): Promise<OrderItem> {
    const orderItem = await this.findOne(id);

    if (orderItem.quantity <= 1) {
      throw new BadRequestException(
        "Нельзя уменьшить количество меньше 1. Удалите позицию.",
      );
    }

    orderItem.quantity -= 1;
    orderItem.total = orderItem.price * orderItem.quantity;

    return this.orderItemRepo.save(orderItem);
  }
}
