// src/products/dto/create-product.dto.ts
import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsNumber,
  Min,
  IsBoolean,
  IsUrl,
  MinLength,
  MaxLength,
  IsInt,
} from "class-validator";
import { Type } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(255)
  @ApiProperty({ example: "Кроссовки Nike Air" })
  title: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  @ApiProperty({ example: "nike-air", required: false })
  slug?: string; // Если не передан — сгенерируется автоматически

  @IsNumber({}, { message: "Цена должна быть числом" })
  @Min(0)
  @Type(() => Number)
  @ApiProperty({ example: 199.99 })
  price: number;

  @IsOptional()
  @IsNumber({}, { message: "Цена со скидкой должна быть числом" })
  @Min(0)
  @Type(() => Number)
  @ApiProperty({ example: 149.99, required: false })
  discontPrice?: number;

  @IsOptional()
  @IsString()
  @ApiProperty({ example: "Удобные кроссовки для пробежек", required: false })
  description?: string;

  @IsOptional()
  @IsInt()
  @Min(0)
  @Type(() => Number)
  @ApiProperty({ example: 100, required: false })
  stock?: number;

  @IsOptional()
  @IsBoolean()
  @ApiProperty({ example: true, required: false })
  isActive?: boolean;

  @IsOptional()
  @IsString()
  @IsUrl({}, { message: "Изображение должно быть валидным URL" })
  @ApiProperty({ example: "https://example.com/image.jpg", required: false })
  image?: string;

  @IsNumber({}, { message: "ID категории должен быть числом" })
  @Min(1)
  @Type(() => Number)
  @ApiProperty({ example: 1 })
  categoryId: number;
}
