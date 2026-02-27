// src/common/file-upload/file-upload.controller.ts
import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  UploadedFiles,
  Body,
  BadRequestException,
} from "@nestjs/common";
import { FileInterceptor, FilesInterceptor } from "@nestjs/platform-express";
import { FileUploadService } from "./file-upload.service";

@Controller("upload")
export class FileUploadController {
  constructor(private readonly fileUploadService: FileUploadService) {}

  // Загрузка одного изображения
  @Post("single")
  @UseInterceptors(FileInterceptor("image"))
  async uploadSingle(@UploadedFile() file: Express.Multer.File) {
    if (!file) {
      throw new BadRequestException("Файл не найден");
    }

    const url = await this.fileUploadService.uploadFile(file, "products");
    return { url, filename: file.originalname };
  }

  // Загрузка нескольких изображений
  @Post("multiple")
  @UseInterceptors(FilesInterceptor("images", 10)) // макс 10 файлов
  async uploadMultiple(@UploadedFiles() files: Express.Multer.File[]) {
    if (!files || files.length === 0) {
      throw new BadRequestException("Файлы не найдены");
    }

    const urls = await this.fileUploadService.uploadMultipleFiles(
      files,
      "products",
    );
    return { urls, count: urls.length };
  }

  // Загрузка аватара (сжатие)
  @Post("avatar")
  @UseInterceptors(FileInterceptor("avatar"))
  async uploadAvatar(@UploadedFile() file: Express.Multer.File) {
    if (!file) {
      throw new BadRequestException("Файл не найден");
    }

    const url = await this.fileUploadService.uploadFile(file, "avatars");
    return { url };
  }

  // Загрузка изображения категории
  @Post("category")
  @UseInterceptors(FileInterceptor("image"))
  async uploadCategoryImage(@UploadedFile() file: Express.Multer.File) {
    if (!file) {
      throw new BadRequestException("Файл не найден");
    }

    const url = await this.fileUploadService.uploadFile(file, "categories");
    return { url };
  }
}
