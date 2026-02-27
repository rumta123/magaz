// src/products/products.controller.ts
import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
  Query,
  ParseIntPipe,
  UsePipes,
  ValidationPipe,
  UseInterceptors,
  UploadedFile,
} from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { ApiTags, ApiConsumes, ApiBody } from "@nestjs/swagger";
import { ProductsService } from "./products.service";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";

@ApiTags("Products")
@Controller("products")
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  private parseInStock(value?: string): boolean | undefined {
    if (value === undefined) return undefined;
    return value.toLowerCase() === "true" || value === "1";
  }

  // 🔹 PUBLIC: Получить все товары с фильтрацией
  @Get()
  async findAll(
    @Query("page", ParseIntPipe) page = 1,
    @Query("limit", ParseIntPipe) limit = 20,
    @Query("search") search?: string,
    @Query("categoryId", ParseIntPipe) categoryId?: number,
    @Query("minPrice", ParseIntPipe) minPrice?: number,
    @Query("maxPrice", ParseIntPipe) maxPrice?: number,
    @Query("inStock") inStock?: string,
  ) {
    return this.productsService.findAll({
      page,
      limit,
      search,
      categoryId,
      minPrice,
      maxPrice,
      inStock: this.parseInStock(inStock),
    });
  }

  // ADMIN: get all products for admin panel
  @Get("all")
  async findAllForAdmin() {
    return this.productsService.findAllForAdmin();
  }

  // PUBLIC: get product by ID
  @Get(":id")
  async findOne(@Param("id", ParseIntPipe) id: number) {
    return this.productsService.findOne(id);
  }

  // 🔹 PUBLIC: Получить товар по slug (SEO-friendly)
  @Get("slug/:slug")
  async findOneBySlug(@Param("slug") slug: string) {
    return this.productsService.findOneBySlug(slug);
  }

  // 🔹 PUBLIC: Товары по категории
  @Get("category/:categoryId")
  async findByCategory(@Param("categoryId", ParseIntPipe) categoryId: number) {
    return this.productsService.findByCategory(categoryId);
  }

  // 🔹 ADMIN: Создать товар С ИЗОБРАЖЕНИЕМ
  @Post()
  @ApiConsumes("multipart/form-data")
  @ApiBody({
    schema: {
      type: "object",
      properties: {
        title: { type: "string", example: "Игровой ноутбук" },
        price: { type: "number", example: 89990 },
        categoryId: { type: "number", example: 1 },
        image: {
          type: "string",
          format: "binary",
          description: "Изображение товара (JPEG, PNG, WebP)",
        },
      },
    },
  })
  @UseInterceptors(FileInterceptor("image"))
  @UsePipes(new ValidationPipe({ transform: true, whitelist: true }))
  async create(
    @UploadedFile() image: Express.Multer.File,
    @Body() dto: CreateProductDto,
  ) {
    // Парсим строковые поля из FormData
    const parsedDto: CreateProductDto = {
      ...dto,
      price: Number(dto.price),
      categoryId: Number(dto.categoryId),
      stock: dto.stock ? Number(dto.stock) : undefined,
    };

    return this.productsService.create(parsedDto, image);
  }

  // 🔹 ADMIN: Обновить товар С ИЗОБРАЖЕНИЕМ
  @Patch(":id")
  @ApiConsumes("multipart/form-data")
  @ApiBody({
    schema: {
      type: "object",
      properties: {
        title: { type: "string", example: "Обновлённый ноутбук" },
        price: { type: "number", example: 79990 },
        image: {
          type: "string",
          format: "binary",
          description: "Новое изображение товара",
        },
      },
    },
  })
  @UseInterceptors(FileInterceptor("image"))
  @UsePipes(new ValidationPipe({ transform: true, whitelist: true }))
  async update(
    @Param("id", ParseIntPipe) id: number,
    @UploadedFile() image: Express.Multer.File,
    @Body() dto: UpdateProductDto,
  ) {
    // Парсим строковые поля из FormData
    const parsedDto: UpdateProductDto = {
      ...dto,
      price: dto.price ? Number(dto.price) : undefined,
      categoryId: dto.categoryId ? Number(dto.categoryId) : undefined,
    };

    return this.productsService.update(id, parsedDto, image);
  }

  // 🔹 ADMIN: Удалить товар (мягкое удаление)
  @Delete(":id")
  async remove(@Param("id", ParseIntPipe) id: number) {
    return this.productsService.remove(id);
  }

  // 🔹 ADMIN: Обновить остатки
  @Patch(":id/stock")
  async updateStock(
    @Param("id", ParseIntPipe) id: number,
    @Body("quantity", ParseIntPipe) quantity: number,
  ) {
    return this.productsService.updateStock(id, quantity);
  }
}


