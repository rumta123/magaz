// src/product-images/product-images.module.ts
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductImagesController } from "./product-images.controller";
import { ProductImagesService } from "./product-images.service";
import { ProductImage } from "./entities/product-image.entity";
import { Product } from "../products/entities/product.entity";

@Module({
  imports: [TypeOrmModule.forFeature([ProductImage, Product])],
  controllers: [ProductImagesController],
  providers: [ProductImagesService],
  exports: [ProductImagesService],
})
export class ProductImagesModule {}
