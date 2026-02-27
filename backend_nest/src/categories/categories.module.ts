import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CategoriesController } from "./categories.controller";
import { CategoriesService } from "./categories.service";
import { Category } from "./entities/category.entity";
import { Product } from "../products/entities/product.entity";
import { FileUploadModule } from "../common/file-upload/file-upload.module";

@Module({
  imports: [TypeOrmModule.forFeature([Category, Product]), FileUploadModule],
  controllers: [CategoriesController],
  providers: [CategoriesService],
})
export class CategoriesModule {}
