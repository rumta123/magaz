// src/products/products.service.ts
import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import {
  Repository,
  Like,
  FindOptionsWhere,
  MoreThanOrEqual,
  LessThanOrEqual,
  MoreThan,
  Between,
} from "typeorm";
import * as fs from "fs";
import * as path from "path";
import * as crypto from "crypto";
import { Product } from "./entities/product.entity";
import { Category } from "../categories/entities/category.entity";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";

@Injectable()
export class ProductsService {
  private uploadDir: string;

  constructor(
    @InjectRepository(Product)
    private readonly productRepo: Repository<Product>,
    @InjectRepository(Category)
    private readonly categoryRepo: Repository<Category>,
  ) {
    // Настройка путей для загрузки
    this.uploadDir = path.join(process.cwd(), "uploads", "products");

    // Создаём папку если нет
    if (!fs.existsSync(this.uploadDir)) {
      fs.mkdirSync(this.uploadDir, { recursive: true });
    }
  }

  // 🔹 Генерация уникального имени файла
  private generateFilename(originalname: string): string {
    const uniqueSuffix = crypto.randomBytes(16).toString("hex");
    const ext = path.extname(originalname);
    return `${uniqueSuffix}${ext}`;
  }

  // 🔹 Загрузка файла на диск
  private async saveFile(file: Express.Multer.File): Promise<string> {
    // Валидация типа
    const allowedTypes = ["image/jpeg", "image/png", "image/webp", "image/gif"];
    if (!allowedTypes.includes(file.mimetype)) {
      throw new BadRequestException(
        "Разрешены только изображения (JPEG, PNG, WebP, GIF)",
      );
    }

    // Валидация размера (макс 5MB)
    if (file.size > 5 * 1024 * 1024) {
      throw new BadRequestException("Размер файла не должен превышать 5MB");
    }

    const filename = this.generateFilename(file.originalname ?? "file");
    const filePath = path.join(this.uploadDir, filename);

    await fs.promises.writeFile(filePath, file.buffer);
    return filename;
  }

  // 🔹 Удаление файла
  private async deleteFile(url: string): Promise<void> {
    try {
      const filename = url.split("/").pop();
      if (!filename) return;
      const filePath = path.join(this.uploadDir, filename);
      if (fs.existsSync(filePath)) {
        await fs.promises.unlink(filePath);
      }
    } catch (error) {
      console.error("Ошибка при удалении файла:", error);
    }
  }

  // 🔹 Создать товар (только админ)
  async findAllForAdmin(): Promise<Product[]> {
    return this.productRepo.find({
      relations: ["category"],
      select: {
        id: true,
        title: true,
        slug: true,
        price: true,
        discontPrice: true,
        description: true,
        stock: true,
        image: true,
        isActive: true,
        createdAt: true,
        category: { id: true, title: true, image: true },
      },
      order: { createdAt: "DESC" },
    });
  }
  async create(
    dto: CreateProductDto,
    image?: Express.Multer.File,
  ): Promise<Product> {
    const category = await this.categoryRepo.findOneBy({ id: dto.categoryId });
    if (!category) {
      throw new NotFoundException(
        `Категория с ID ${dto.categoryId} не найдена`,
      );
    }

    const slug = dto.slug || this.generateSlug(dto.title);

    const existing = await this.productRepo.findOneBy({ slug });
    if (existing) {
      throw new BadRequestException("Товар с таким slug уже существует");
    }

    // Загрузка изображения если есть
    let imageUrl: string | null = null;
    if (image) {
      imageUrl = await this.saveFile(image);
    }

    const product = this.productRepo.create({
      ...dto,
      slug,
      stock: dto.stock ?? 0,
      isActive: dto.isActive ?? true,
      image: imageUrl ?? "",
    });

    return this.productRepo.save(product);
  }

  // 🔹 Получить все товары с фильтрацией и пагинацией
  async findAll(query?: {
    page?: number;
    limit?: number;
    search?: string;
    categoryId?: number;
    minPrice?: number;
    maxPrice?: number;
    inStock?: boolean;
  }) {
    const {
      page = 1,
      limit = 20,
      search,
      categoryId,
      minPrice,
      maxPrice,
      inStock,
    } = query || {};

    const where: FindOptionsWhere<Product> = { isActive: true };

    if (search) {
      where.title = Like(`%${search}%`);
    }
    if (categoryId) {
      where.categoryId = categoryId;
    }
    if (minPrice !== undefined && maxPrice !== undefined) {
      where.price = Between(minPrice, maxPrice);
    } else if (minPrice !== undefined) {
      where.price = MoreThanOrEqual(minPrice);
    } else if (maxPrice !== undefined) {
      where.price = LessThanOrEqual(maxPrice);
    }
    if (inStock !== undefined) {
      where.stock = inStock ? MoreThan(0) : 0;
    }

    const [products, total] = await this.productRepo.findAndCount({
      where,
      relations: ["category"],
      select: {
        id: true,
        title: true,
        slug: true,
        price: true,
        discontPrice: true,
        description: true,
        stock: true,
        image: true,
        createdAt: true,
        category: { id: true, title: true, image: true },
      },
      order: { createdAt: "DESC" },
      skip: (page - 1) * limit,
      take: limit,
    });

    return {
      products,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  // 🔹 Получить товар по ID
  async findOne(id: number): Promise<Product> {
    const product = await this.productRepo.findOne({
      where: { id, isActive: true },
      relations: ["category", "images"],
    });

    if (!product) {
      throw new NotFoundException(`Товар с ID ${id} не найден`);
    }

    if (Array.isArray(product.images)) {
      product.images = [...product.images].sort((a: any, b: any) => {
        const as = Number(a?.sortOrder ?? 0);
        const bs = Number(b?.sortOrder ?? 0);
        if (as !== bs) return as - bs;
        return Number(b?.isPrimary ? 1 : 0) - Number(a?.isPrimary ? 1 : 0);
      });
    }

    return product;
  }

  // 🔹 Получить товар по slug (для SEO)
  async findOneBySlug(slug: string): Promise<Product> {
    const product = await this.productRepo.findOne({
      where: { slug, isActive: true },
      relations: ["category", "images"],
    });

    if (!product) {
      throw new NotFoundException(`Товар "${slug}" не найден`);
    }

    return product;
  }

  // 🔹 Обновить товар (только админ)
  async update(
    id: number,
    dto: UpdateProductDto,
    image?: Express.Multer.File,
  ): Promise<Product> {
    if (dto.slug) {
      const existing = await this.productRepo.findOne({
        where: { slug: dto.slug },
      });
      if (existing && existing.id !== id) {
        throw new BadRequestException("Товар с таким slug уже существует");
      }
    }

    if (dto.categoryId) {
      const category = await this.categoryRepo.findOneBy({
        id: dto.categoryId,
      });
      if (!category) {
        throw new NotFoundException(
          `Категория с ID ${dto.categoryId} не найдена`,
        );
      }
    }

    // Если загружено новое изображение — обновляем его
    if (image) {
      const product = await this.findOne(id);
      // Удаляем старое изображение
      if (product.image) {
        await this.deleteFile(product.image);
      }
      // Загружаем новое
      dto.image = await this.saveFile(image);
    }

    await this.productRepo.update(id, dto);
    return this.findOne(id);
  }

  // 🔹 Удалить товар (мягкое удаление через isActive)
  async remove(id: number): Promise<{ message: string }> {
    const product = await this.productRepo.findOneBy({ id });
    if (!product) {
      throw new NotFoundException(`Товар с ID ${id} не найден`);
    }

    // Удаляем изображение товара при удалении
    if (product.image) {
      await this.deleteFile(product.image);
    }

    product.isActive = false;
    await this.productRepo.save(product);

    return { message: "Товар успешно удален" };
  }

  // 🔹 Получить товары по категории
  async findByCategory(categoryId: number) {
    return this.productRepo.find({
      where: { categoryId, isActive: true },
      relations: ["category"],
      order: { createdAt: "DESC" },
    });
  }

  // 🔹 Утилита для генерации slug
  private generateSlug(title: string): string {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9а-яё\s-]/g, "")
      .replace(/[\s-]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }

  // 🔹 Обновить остатки товара
  async updateStock(productId: number, quantity: number): Promise<Product> {
    const product = await this.productRepo.findOneBy({ id: productId });
    if (!product) {
      throw new NotFoundException(`Товар с ID ${productId} не найден`);
    }

    product.stock = Math.max(0, product.stock + quantity);
    return this.productRepo.save(product);
  }
}


