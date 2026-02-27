// src/common/file-upload/file-upload.service.ts
import { Injectable, BadRequestException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import * as fs from "fs";
import * as path from "path";
import * as crypto from "crypto";

@Injectable()
export class FileUploadService {
  private uploadDir: string;
  private baseUrl: string;

  constructor(private configService: ConfigService) {
    this.uploadDir = path.join(process.cwd(), "uploads");
    this.baseUrl = this.configService.get(
      "UPLOAD_URL",
      "http://localhost:3333/uploads",
    );

    // Создаем папку uploads если нет
    if (!fs.existsSync(this.uploadDir)) {
      fs.mkdirSync(this.uploadDir, { recursive: true });
    }
  }

  // Генерация уникального имени файла
  generateFilename(originalname: string): string {
    const uniqueSuffix = crypto.randomBytes(16).toString("hex");
    const ext = path.extname(originalname);
    return `${uniqueSuffix}${ext}`;
  }

  // Проверка типа файла
  validateFile(file: Express.Multer.File): void {
    const allowedMimeTypes = [
      "image/jpeg",
      "image/png",
      "image/webp",
      "image/gif",
    ];

    if (!allowedMimeTypes.includes(file.mimetype)) {
      throw new BadRequestException(
        "Разрешены только изображения (JPEG, PNG, WebP, GIF)",
      );
    }

    // Проверка размера (макс 5MB)
    const maxSize = 5 * 1024 * 1024;
    if (file.size > maxSize) {
      throw new BadRequestException("Размер файла не должен превышать 5MB");
    }
  }

  // Загрузка файла
  async uploadFile(
    file: Express.Multer.File,
    subfolder: string = "",
  ): Promise<string> {
    this.validateFile(file);

    const folderPath = subfolder
      ? path.join(this.uploadDir, subfolder)
      : this.uploadDir;

    // Создаем подпапку если нужно
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true });
    }

    const filename = this.generateFilename(file.originalname ?? "file");
    const filePath = path.join(folderPath, filename);

    // Сохраняем файл
    await fs.promises.writeFile(filePath, file.buffer);

    // Возвращаем URL
    const urlPath = subfolder ? `${subfolder}/${filename}` : filename;
    return `${this.baseUrl}/${urlPath}`;
  }

  // Удаление файла
  async deleteFile(url: string): Promise<void> {
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

  // Загрузка нескольких файлов
  async uploadMultipleFiles(
    files: Express.Multer.File[],
    subfolder: string = "",
  ): Promise<string[]> {
    const urls = await Promise.all(
      files.map((file) => this.uploadFile(file, subfolder)),
    );
    return urls;
  }
}
