// src/reviews/dto/create-review.dto.ts
import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Min,
  Max,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";

export class CreateReviewDto {
  @IsInt()
  @Min(1)
  @IsNotEmpty()
  @Type(() => Number)
  @ApiProperty({ example: 1 })
  productId: number;

  @IsInt()
  @Min(1)
  @IsOptional()
  @Type(() => Number)
  @ApiProperty({ example: 5, required: false })
  userId?: number;

  @IsInt()
  @Min(1)
  @Max(5)
  @IsNotEmpty()
  @Type(() => Number)
  @ApiProperty({ example: 5 })
  rating: number;

  @IsString()
  @IsOptional()
  @MaxLength(1000)
  @ApiProperty({ example: "Отличный товар", required: false })
  comment?: string;
}
