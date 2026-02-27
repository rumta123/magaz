// src/product-images/product-images.controller.ts
import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
  ParseIntPipe,
  UsePipes,
  ValidationPipe,
  BadRequestException,
} from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { ProductImagesService } from "./product-images.service";
import { CreateProductImageDto } from "./dto/create-product-image.dto";
import { UpdateProductImageDto } from "./dto/update-product-image.dto";

@ApiTags("Product Images")
@Controller("product-images")
export class ProductImagesController {
  constructor(private readonly imagesService: ProductImagesService) {}

  // 🔹 PUBLIC: Получить все изображения товара
  @Get("product/:productId")
  async findByProduct(@Param("productId", ParseIntPipe) productId: number) {
    return this.imagesService.findByProduct(productId);
  }

  // 🔹 PUBLIC: Получить главное изображение товара
  @Get("product/:productId/primary")
  async findPrimary(@Param("productId", ParseIntPipe) productId: number) {
    return this.imagesService.findPrimary(productId);
  }

  // 🔹 PUBLIC: Получить изображение по ID
  @Get(":id")
  async findOne(@Param("id", ParseIntPipe) id: number) {
    return this.imagesService.findOne(id);
  }

  // 🔹 ADMIN: Добавить изображение к товару
  @Post()
  @UsePipes(new ValidationPipe({ transform: true, whitelist: true }))
  async create(@Body() dto: CreateProductImageDto) {
    return this.imagesService.create(dto);
  }

  // 🔹 ADMIN: Обновить изображение
  @Patch(":id")
  @UsePipes(new ValidationPipe({ transform: true, whitelist: true }))
  async update(
    @Param("id", ParseIntPipe) id: number,
    @Body() dto: UpdateProductImageDto,
  ) {
    return this.imagesService.update(id, dto);
  }

  // 🔹 ADMIN: Удалить изображение
  @Delete(":id")
  async remove(@Param("id", ParseIntPipe) id: number) {
    return this.imagesService.remove(id);
  }

  // 🔹 ADMIN: Установить изображение как главное
  @Patch(":id/set-primary")
  async setAsPrimary(@Param("id", ParseIntPipe) id: number) {
    return this.imagesService.setAsPrimary(id);
  }

  // 🔹 ADMIN: Обновить порядок сортировки изображений
  @Patch("product/:productId/sort")
  async updateSortOrder(
    @Param("productId", ParseIntPipe) productId: number,
    @Body("imageIds") imageIds: number[],
  ) {
    if (!Array.isArray(imageIds)) {
      throw new BadRequestException("imageIds должен быть массивом чисел");
    }
    return this.imagesService.updateSortOrder(productId, imageIds);
  }
}
