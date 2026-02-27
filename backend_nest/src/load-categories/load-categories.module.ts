import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { LoadCategoriesController } from "./load-categories.controller";
import { LoadCategoriesService } from "./load-categories.service";
import { LoadCategory } from "./entities/load-category.entity";
import { Category } from "../categories/entities/category.entity";

@Module({
  imports: [TypeOrmModule.forFeature([LoadCategory, Category])],
  controllers: [LoadCategoriesController],
  providers: [LoadCategoriesService],
})
export class LoadCategoriesModule {}
