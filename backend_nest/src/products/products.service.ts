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
    this.uploadDir = path.join(process.cwd(), "uploads", "products");

    if (!fs.existsSync(this.uploadDir)) {
      fs.mkdirSync(this.uploadDir, { recursive: true });
    }
  }

  // ============================
  // SLUG
  // ============================
  private generateSlug(input: string): string {
    return input
      .toLowerCase()
      .trim()
      .replace(/[‐-‒–—−]/g, "-") // все варианты тире/минуса -> обычный "-"
      .replace(/[^a-z0-9а-яё\s-]/g, "") // убираем лишнее
      .replace(/[\s-]+/g, "-") // пробелы/дефисы -> один дефис
      .replace(/^-+|-+$/g, ""); // убрать дефисы по краям
  }

  private pickAndNormalizeSlug(
    dtoSlug: string | undefined,
    title: string,
  ): string {
    const raw = dtoSlug && dtoSlug.trim().length > 0 ? dtoSlug : title;
    return this.generateSlug(raw);
  }

  /**
   * Делает slug уникальным:
   * super -> super-2 -> super-3 ...
   */
  private async makeUniqueSlug(
    baseSlug: string,
    excludeId?: number,
  ): Promise<string> {
    // если после нормализации пусто — даём дефолт
    const base = baseSlug && baseSlug.length > 0 ? baseSlug : "product";

    let slug = base;
    let i = 2;

    // проверка существования
    const exists = async (s: string) => {
      const found = await this.productRepo.findOne({
        where: { slug: s },
        select: { id: true },
      });

      if (!found) return false;
      if (excludeId !== undefined && Number(found.id) === Number(excludeId))
        return false;
      return true;
    };

    while (await exists(slug)) {
      slug = `${base}-${i}`;
      i += 1;
      if (i > 500) {
        throw new BadRequestException("Не удалось подобрать уникальный slug");
      }
    }

    return slug;
  }

  // ============================
  // FILES
  // ============================
  private generateFilename(originalname: string): string {
    const uniqueSuffix = crypto.randomBytes(16).toString("hex");
    const ext = path.extname(originalname);
    return `${uniqueSuffix}${ext}`;
  }

  private async saveFile(file: Express.Multer.File): Promise<string> {
    const allowedTypes = ["image/jpeg", "image/png", "image/webp", "image/gif"];
    if (!allowedTypes.includes(file.mimetype)) {
      throw new BadRequestException(
        "Разрешены только изображения (JPEG, PNG, WebP, GIF)",
      );
    }

    if (file.size > 5 * 1024 * 1024) {
      throw new BadRequestException("Размер файла не должен превышать 5MB");
    }

    const filename = this.generateFilename(file.originalname ?? "file");
    const filePath = path.join(this.uploadDir, filename);

    await fs.promises.writeFile(filePath, file.buffer);
    return filename;
  }

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

  // ============================
  // ADMIN LIST
  // ============================
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

  // ============================
  // CREATE
  // ============================
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

    // 1) нормализуем (из slug или title)
    const baseSlug = this.pickAndNormalizeSlug(dto.slug, dto.title);

    // 2) делаем уникальным (super -> super-2 ...)
    const slug = await this.makeUniqueSlug(baseSlug);

    // загрузка картинки
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

  // ============================
  // LIST (PUBLIC)
  // ============================
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

    if (search) where.title = Like(`%${search}%`);
    if (categoryId) where.categoryId = categoryId;

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

  // ============================
  // GET ONE
  // ============================
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

  async findOneBySlug(slug: string): Promise<Product> {
    const normalized = this.generateSlug(slug);

    const product = await this.productRepo.findOne({
      where: { slug: normalized, isActive: true },
      relations: ["category", "images"],
    });

    if (!product) {
      throw new NotFoundException(`Товар "${normalized}" не найден`);
    }

    return product;
  }

  // ============================
  // UPDATE
  // ============================
  async update(
    id: number,
    dto: UpdateProductDto,
    image?: Express.Multer.File,
  ): Promise<Product> {
    // если меняют slug — нормализуем и делаем уникальным (но НЕ на чужом id)
    if (dto.slug && dto.slug.trim().length > 0) {
      const baseSlug = this.generateSlug(dto.slug);
      dto.slug = await this.makeUniqueSlug(baseSlug, Number(id));
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

    if (image) {
      const product = await this.findOne(Number(id));
      if (product.image) {
        await this.deleteFile(product.image);
      }
      dto.image = await this.saveFile(image);
    }

    await this.productRepo.update(Number(id), dto);
    return this.findOne(Number(id));
  }

  // ============================
  // REMOVE (SOFT)
  // ============================
  async remove(id: number): Promise<{ message: string }> {
    const product = await this.productRepo.findOneBy({ id });
    if (!product) {
      throw new NotFoundException(`Товар с ID ${id} не найден`);
    }

    product.isActive = false;
    await this.productRepo.save(product);

    return { message: "Товар успешно удален" };
  }

  async restore(id: number): Promise<Product> {
    const product = await this.productRepo.findOne({
      where: { id },
      relations: ["category", "images"],
    });
    if (!product) {
      throw new NotFoundException(`РўРѕРІР°СЂ СЃ ID ${id} РЅРµ РЅР°Р№РґРµРЅ`);
    }

    product.isActive = true;
    await this.productRepo.save(product);

    return product;
  }

  async findByCategory(categoryId: number) {
    return this.productRepo.find({
      where: { categoryId, isActive: true },
      relations: ["category"],
      order: { createdAt: "DESC" },
    });
  }

  async updateStock(productId: number, quantity: number): Promise<Product> {
    const product = await this.productRepo.findOneBy({ id: productId });
    if (!product) {
      throw new NotFoundException(`Товар с ID ${productId} не найден`);
    }

    product.stock = Math.max(0, product.stock + quantity);
    return this.productRepo.save(product);
  }
}
