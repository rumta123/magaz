// src/product-images/dto/create-product-image.dto.ts
import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsBoolean,
  IsInt,
  Min,
  IsUrl,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";

export class CreateProductImageDto {
  @IsInt()
  @Min(1)
  @Type(() => Number)
  @ApiProperty({ example: 1 })
  productId: number;

  @IsString()
  @IsNotEmpty()
  @IsUrl({}, { message: "image_url должен быть валидным URL" })
  @MaxLength(500)
  @ApiProperty({ example: "https://example.com/product.jpg" })
  imageUrl: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  @ApiProperty({ example: "Главное изображение", required: false })
  altText?: string;

  @IsOptional()
  @IsBoolean()
  @ApiProperty({ example: false, required: false })
  isPrimary?: boolean;

  @IsOptional()
  @IsInt()
  @Min(0)
  @Type(() => Number)
  @ApiProperty({ example: 0, required: false })
  sortOrder?: number;
}
