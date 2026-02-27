// src/reviews/dto/update-review.dto.ts
import {
  IsInt,
  IsOptional,
  IsString,
  IsBoolean,
  Min,
  Max,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";

export class UpdateReviewDto {
  @IsInt()
  @Min(1)
  @Max(5)
  @IsOptional()
  @Type(() => Number)
  @ApiProperty({ example: 4, required: false })
  rating?: number;

  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @ApiProperty({ example: "Хорошее качество", required: false })
  comment?: string;

  @IsBoolean()
  @IsOptional()
  @ApiProperty({ example: false, required: false })
  isApproved?: boolean;
}
