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
  UseGuards,
  UseInterceptors,
  UploadedFile,
} from "@nestjs/common";
import {
  ApiTags,
  ApiBearerAuth,
  ApiOperation,
  ApiOkResponse,
} from "@nestjs/swagger";
import { CategoriesService } from "./categories.service";
import { CreateCategoryDto } from "./dto/create-category.dto";
import { UpdateCategoryDto } from "./dto/update-category.dto";
import { JwtAuthGuard } from "src/auth/jwt.guard";
import { RolesGuard } from "src/auth/roles.guard";
import { Roles } from "src/auth/roles.decorator";
import { FileInterceptor } from "@nestjs/platform-express";

@ApiTags("Categories")
@ApiBearerAuth("JWT-auth")
@Controller("categories")
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get("all")
  async getAll() {
    return this.categoriesService.getAllCategories();
  }

  @Get("slug/:slug")
  async getCategoryProductsBySlug(@Param("slug") slug: string) {
    return this.categoriesService.getCategoryWithProductsBySlug(slug);
  }

  @Get(":id")
  async getCategoryProducts(@Param("id", ParseIntPipe) id: number) {
    return this.categoriesService.getCategoryWithProducts(id);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles("admin")
  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  @ApiOperation({ summary: "Create a new category (admin only)" })
  @ApiOkResponse({ description: "Category created" })
  async create(@Body() dto: CreateCategoryDto) {
    return this.categoriesService.createCategory(dto);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles("admin")
  @Patch(":id")
  @UsePipes(new ValidationPipe({ transform: true }))
  async update(
    @Param("id", ParseIntPipe) id: number,
    @Body() dto: UpdateCategoryDto,
  ) {
    return this.categoriesService.updateCategory(id, dto);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles("admin")
  @Patch(":id/image")
  @UseInterceptors(FileInterceptor("image"))
  async uploadImage(
    @Param("id", ParseIntPipe) id: number,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.categoriesService.uploadCategoryImage(id, file);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles("admin")
  @Delete(":id")
  async delete(@Param("id", ParseIntPipe) id: number) {
    return this.categoriesService.deleteCategory(id);
  }
}
