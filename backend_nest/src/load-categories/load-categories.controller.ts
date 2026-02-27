import { Body, Controller, Get, Post } from "@nestjs/common";
import { LoadCategoriesService } from "./load-categories.service";
import { ImportLoadCategoriesDto } from "./dto/import-load-categories.dto";
import { ApiTags, ApiOperation } from "@nestjs/swagger";

@ApiTags("Load Categories")
@Controller("load-categories")
export class LoadCategoriesController {
  constructor(private readonly loadCategoriesService: LoadCategoriesService) {}

  @Get("all")
  getAll() {
    return this.loadCategoriesService.getAll();
  }

  @Post("import")
  @ApiOperation({ summary: "Import categories from file/data" })
  importToCategories(@Body() dto: ImportLoadCategoriesDto) {
    return this.loadCategoriesService.importToCategories(dto);
  }
}
