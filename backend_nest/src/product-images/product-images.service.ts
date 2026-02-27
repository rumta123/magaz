// src/product-images/product-images.service.ts
import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository, Not } from "typeorm"; // ✅ Добавлен Not
import { ProductImage } from "./entities/product-image.entity";
import { Product } from "../products/entities/product.entity";
import { CreateProductImageDto } from "./dto/create-product-image.dto";
import { UpdateProductImageDto } from "./dto/update-product-image.dto";

@Injectable()
export class ProductImagesService {
  constructor(
    @InjectRepository(ProductImage)
    private readonly imageRepo: Repository<ProductImage>,
    @InjectRepository(Product)
    private readonly productRepo: Repository<Product>,
  ) {}

  // 🔹 Добавить изображение к товару
  async create(dto: CreateProductImageDto): Promise<ProductImage> {
    const product = await this.productRepo.findOneBy({ id: dto.productId });
    if (!product) {
      throw new NotFoundException(`Товар с ID ${dto.productId} не найден`);
    }

    // Если isPrimary = true — сбросить primary у других изображений
    if (dto.isPrimary) {
      await this.imageRepo.update(
        { productId: dto.productId, isPrimary: true },
        { isPrimary: false },
      );
    }

    const image = this.imageRepo.create({
      ...dto,
      isPrimary: dto.isPrimary ?? false,
      sortOrder: dto.sortOrder ?? 0,
    });

    return this.imageRepo.save(image);
  }

  // 🔹 Получить все изображения товара
  async findByProduct(productId: number): Promise<ProductImage[]> {
    return this.imageRepo.find({
      where: { productId },
      order: { sortOrder: "ASC", createdAt: "ASC" },
    });
  }

  // 🔹 Получить изображение по ID
  async findOne(id: number): Promise<ProductImage> {
    const image = await this.imageRepo.findOneBy({ id });
    if (!image) {
      throw new NotFoundException(`Изображение с ID ${id} не найдено`);
    }
    return image;
  }

  // 🔹 Получить главное изображение товара
  async findPrimary(productId: number): Promise<ProductImage | null> {
    return this.imageRepo.findOne({
      where: { productId, isPrimary: true },
    });
  }

  // 🔹 Обновить изображение
  async update(id: number, dto: UpdateProductImageDto): Promise<ProductImage> {
    const image = await this.findOne(id);

    // ✅ ИСПРАВЛЕНО: используем Not() вместо $ne
    if (dto.isPrimary === true) {
      await this.imageRepo.update(
        {
          productId: image.productId,
          isPrimary: true,
          id: Not(id), // ✅ Все изображения этого товара, кроме текущего
        },
        { isPrimary: false },
      );
    }

    await this.imageRepo.update(id, dto);
    return this.findOne(id);
  }

  // 🔹 Удалить изображение
  async remove(id: number): Promise<{ message: string }> {
    const image = await this.findOne(id);

    // Если удаляем primary — назначить новое главное
    if (image.isPrimary) {
      const other = await this.imageRepo.findOne({
        where: {
          productId: image.productId,
          id: Not(id), // ✅ ИСПРАВЛЕНО: Not() вместо $ne
        },
        order: { sortOrder: "ASC", createdAt: "ASC" },
      });
      if (other) {
        await this.imageRepo.update(other.id, { isPrimary: true });
      }
    }

    await this.imageRepo.delete(id);
    return { message: "Изображение успешно удалено" };
  }

  // 🔹 Установить изображение как главное
  async setAsPrimary(id: number): Promise<ProductImage> {
    const image = await this.findOne(id);

    // Сбросить primary у всех изображений этого товара
    await this.imageRepo.update(
      { productId: image.productId, isPrimary: true },
      { isPrimary: false },
    );

    // Установить current как primary
    await this.imageRepo.update(id, { isPrimary: true });

    return this.findOne(id);
  }

  // 🔹 Обновить порядок сортировки
  async updateSortOrder(
    productId: number,
    imageIds: number[],
  ): Promise<{ message: string }> {
    for (let i = 0; i < imageIds.length; i++) {
      await this.imageRepo.update(imageIds[i], { sortOrder: i });
    }
    return { message: "Порядок изображений обновлен" };
  }
}
