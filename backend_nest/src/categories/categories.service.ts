import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Category } from "./entities/category.entity";
import { Product } from "../products/entities/product.entity";
import { FileUploadService } from "../common/file-upload/file-upload.service";
import { BadRequestException } from "@nestjs/common";
import { CreateCategoryDto } from "./dto/create-category.dto";
import { UpdateCategoryDto } from "./dto/update-category.dto";

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepo: Repository<Category>,
    @InjectRepository(Product)
    private readonly productRepo: Repository<Product>,
    private readonly fileUploadService: FileUploadService,
  ) {}

  async getAllCategories() {
    return this.categoryRepo.find({
      order: { createdAt: "DESC" },
      select: ["id", "title", "slug", "image", "createdAt"],
    });
  }

  async getCategoryWithProducts(categoryId: number) {
    const category = await this.categoryRepo.findOne({
      where: { id: categoryId },
      relations: ["products"],
      select: ["id", "title", "slug", "image", "createdAt"],
    });

    if (!category) {
      throw new NotFoundException(`Категория с ID ${categoryId} не найдена`);
    }

    const activeProducts =
      category.products?.filter((p) => p.isActive !== false) || [];

    return {
      category: {
        id: category.id,
        title: category.title,
        slug: category.slug,
        image: category.image,
      },
      products: activeProducts.map((p) => ({
        id: p.id,
        title: p.title,
        price: p.price,
        discontPrice: p.discontPrice,
        image: p.image,
        slug: p.slug,
      })),
      total: activeProducts.length,
    };
  }

  async getCategoryWithProductsBySlug(slug: string) {
    const category = await this.categoryRepo.findOne({
      where: { slug },
      relations: ["products"],
      select: ["id", "title", "slug", "image", "createdAt"],
    });

    if (!category) {
      throw new NotFoundException(`Категория \"${slug}\" не найдена`);
    }

    const activeProducts =
      category.products?.filter((p) => p.isActive !== false) || [];

    return {
      category: {
        id: category.id,
        title: category.title,
        slug: category.slug,
        image: category.image,
      },
      products: activeProducts.map((p) => ({
        id: p.id,
        title: p.title,
        price: p.price,
        discontPrice: p.discontPrice,
        image: p.image,
        slug: p.slug,
      })),
      total: activeProducts.length,
    };
  }

  async createCategory(dto: CreateCategoryDto) {
    const category = this.categoryRepo.create({
      ...dto,
      slug:
        dto.slug ||
        dto.title
          .toLowerCase()
          .replace(/[^a-z0-9а-яё\s-]/g, "")
          .replace(/[\s-]+/g, "-"),
    });
    return this.categoryRepo.save(category);
  }

  async updateCategory(id: number, dto: UpdateCategoryDto) {
    await this.categoryRepo.update(id, dto);
    const updated = await this.categoryRepo.findOneBy({ id });
    if (!updated) throw new NotFoundException("Категория не найдена");
    return updated;
  }

  async deleteCategory(id: number) {
    const result = await this.categoryRepo.delete(id);
    if (result.affected === 0)
      throw new NotFoundException("Категория не найдена");
    return { message: "Категория удалена" };
  }

  async uploadCategoryImage(id: number, file: Express.Multer.File) {
    const category = await this.categoryRepo.findOneBy({ id });
    if (!category) throw new NotFoundException("Категория не найдена");
    if (!file) throw new BadRequestException("Файл не найден");

    const url = await this.fileUploadService.uploadFile(file, "categories");
    await this.categoryRepo.update(id, { image: url });
    return { url };
  }
}
