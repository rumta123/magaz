// src/cart/cart.service.ts
import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Cart } from "./entities/cart.entity";
import { Product } from "../products/entities/product.entity";

import { CreateCartDto } from "./dto/create-cart.dto";
import { UpdateCartDto } from "./dto/update-cart.dto";
import { User } from "src/users/users.entity";
import { MergeCartDto } from "./dto/merge-cart.dto";

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(Cart)
    private readonly cartRepo: Repository<Cart>,
    @InjectRepository(Product)
    private readonly productRepo: Repository<Product>,
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
  ) {}

  // 🔹 Добавить товар в корзину
  async addToCart(dto: CreateCartDto): Promise<Cart> {
    // Проверка существования пользователя
    const user = await this.userRepo.findOneBy({ id: dto.userId });
    if (!user) {
      throw new NotFoundException(`Пользователь с ID ${dto.userId} не найден`);
    }

    // Проверка существования товара
    const product = await this.productRepo.findOne({
      where: { id: dto.productId, isActive: true },
    });
    if (!product) {
      throw new NotFoundException(
        `Товар с ID ${dto.productId} не найден или не активен`,
      );
    }

    // Проверка наличия товара на складе
    if (product.stock < (dto.quantity || 1)) {
      throw new BadRequestException(
        `Недостаточно товара на складе. Доступно: ${product.stock}`,
      );
    }

    // Проверяем, есть ли уже этот товар в корзине пользователя
    const existingCart = await this.cartRepo.findOne({
      where: { userId: dto.userId, productId: dto.productId },
    });

    if (existingCart) {
      // ✅ Если есть — увеличиваем количество
      const newQuantity = existingCart.quantity + (dto.quantity || 1);

      // Проверка на максимальное количество
      if (newQuantity > product.stock) {
        throw new BadRequestException(
          `Превышено максимальное количество. Доступно: ${product.stock}`,
        );
      }

      existingCart.quantity = newQuantity;
      return this.cartRepo.save(existingCart);
    } else {
      // ✅ Если нет — создаём новую запись
      const cart = this.cartRepo.create({
        userId: dto.userId,
        productId: dto.productId,
        quantity: dto.quantity || 1,
      });
      return this.cartRepo.save(cart);
    }
  }

  // 🔹 Получить всю корзину пользователя
  async getUserCart(userId: number): Promise<{
    items: Cart[];
    totalItems: number;
    totalPrice: number;
  }> {
    const items = await this.cartRepo.find({
      where: { userId },
      relations: ["product"],
      order: { createdAt: "DESC" },
    });

    // ✅ Расчёт итогов
    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = items.reduce((sum, item) => {
      const price = item.product?.discontPrice || item.product?.price || 0;
      return sum + price * item.quantity;
    }, 0);

    return {
      items,
      totalItems,
      totalPrice,
    };
  }

  // 🔹 Получить элемент корзины по ID
  async findOne(id: number): Promise<Cart> {
    const cart = await this.cartRepo.findOne({
      where: { id },
      relations: ["product"],
    });
    if (!cart) {
      throw new NotFoundException(`Элемент корзины с ID ${id} не найден`);
    }
    return cart;
  }

  // 🔹 Обновить количество товара в корзине
  async updateQuantity(id: number, dto: UpdateCartDto): Promise<Cart> {
    const cart = await this.findOne(id);

    // Проверка наличия товара
    if (dto.quantity) {
      const product = await this.productRepo.findOneBy({ id: cart.productId });
      if (!product) {
        throw new NotFoundException("Товар больше не доступен");
      }
      if (product.stock < dto.quantity) {
        throw new BadRequestException(
          `Недостаточно товара на складе. Доступно: ${product.stock}`,
        );
      }
      cart.quantity = dto.quantity;
    }

    return this.cartRepo.save(cart);
  }

  // 🔹 Удалить товар из корзины
  async removeFromCart(id: number): Promise<{ message: string }> {
    const cart = await this.findOne(id);
    await this.cartRepo.remove(cart);
    return { message: "Товар удалён из корзины" };
  }

  // 🔹 Очистить всю корзину пользователя
  async clearCart(userId: number): Promise<{ message: string }> {
    await this.cartRepo.delete({ userId });
    return { message: "Корзина очищена" };
  }

  // 🔹 Увеличить количество на 1
  async incrementQuantity(id: number): Promise<Cart> {
    const cart = await this.findOne(id);
    const product = await this.productRepo.findOneBy({ id: cart.productId });

    if (!product) {
      throw new NotFoundException("Товар больше не доступен");
    }
    if (cart.quantity >= product.stock) {
      throw new BadRequestException(
        `Достигнуто максимальное количество. Доступно: ${product.stock}`,
      );
    }

    cart.quantity += 1;
    return this.cartRepo.save(cart);
  }

  // 🔹 Синхронизация (Merge) при логине или авто-сохранении
  // 🔹 Синхронизация (Merge) при логине или авто-сохранении
  async mergeCart(
    userId: number,
    mergeDto: MergeCartDto,
  ): Promise<{
    items: Cart[];
    totalItems: number;
    totalPrice: number;
  }> {
    const user = await this.userRepo.findOneBy({ id: userId });
    if (!user) {
      throw new NotFoundException(`������������ � ID ${userId} �� ������`);
    }

    // Replace mode: DB cart must match client snapshot exactly.
    await this.cartRepo.delete({ userId });

    const incoming = Array.isArray(mergeDto.items) ? mergeDto.items : [];
    for (const item of incoming) {
      if (!item?.productId || !item?.quantity) continue;
      if (item.userId && item.userId !== userId) continue;

      try {
        await this.addToCart({
          userId,
          productId: item.productId,
          quantity: item.quantity,
        });
      } catch (e: any) {
        console.warn(`Sync failed for product ${item.productId}:`, e?.message || e);
      }
    }

    return this.getUserCart(userId);
  }

  // keep public API for +/- controls
  async decrementQuantity(id: number): Promise<Cart> {
    const cart = await this.findOne(id);

    if (cart.quantity <= 1) {
      // Если количество 1 — удаляем из корзины
      await this.removeFromCart(id);
      return cart;
    }

    cart.quantity -= 1;
    return this.cartRepo.save(cart);
  }
}
