// src/product-images/dto/update-product-image.dto.ts
import { PartialType } from "@nestjs/mapped-types";
import { CreateProductImageDto } from "./create-product-image.dto";
import {
  IsOptional,
  IsBoolean,
  IsInt,
  Min,
  IsUrl,
  MaxLength,
} from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class UpdateProductImageDto extends PartialType(CreateProductImageDto) {
  @IsOptional()
  @IsUrl({}, { message: "image_url должен быть валидным URL" })
  @MaxLength(500)
  @ApiProperty({ example: "https://example.com/product.jpg", required: false })
  imageUrl?: string;

  @IsOptional()
  @IsBoolean()
  @ApiProperty({ example: false, required: false })
  isPrimary?: boolean;

  @IsOptional()
  @IsInt()
  @Min(0)
  @ApiProperty({ example: 0, required: false })
  sortOrder?: number;
}
