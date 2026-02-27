// Добавьте для создания/обновления:
import { IsOptional, IsString, IsUrl, MinLength } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateCategoryDto {
  @IsString()
  @MinLength(2)
  @ApiProperty({ example: "Одежда" })
  title: string;

  @IsOptional()
  @IsString()
  @IsUrl() // ✅ Проверка что image — это валидный URL
  @ApiProperty({ example: "https://example.com/cat.jpg", required: false })
  image?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ example: "odezhda", required: false })
  slug?: string; // ✅ Для SEO
}
