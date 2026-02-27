// src/order-items/dto/update-order-item.dto.ts
import {
  IsInt,
  IsOptional,
  Min,
  IsString,
  IsNumber,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";

export class UpdateOrderItemDto {
  @IsInt()
  @Min(1)
  @IsOptional()
  @Type(() => Number)
  @ApiProperty({ example: 2, required: false })
  productId?: number;

  @IsString()
  @MaxLength(255)
  @IsOptional()
  @ApiProperty({ example: "Кроссовки Nike Air", required: false })
  productName?: string;

  @IsInt()
  @Min(1)
  @IsOptional()
  @Type(() => Number)
  @ApiProperty({ example: 2, required: false })
  quantity?: number;

  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  @IsOptional()
  @Type(() => Number)
  @ApiProperty({ example: 199.99, required: false })
  price?: number;

  // ⚠️ total рассчитается автоматически при изменении price/quantity
  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  @IsOptional()
  @Type(() => Number)
  @ApiProperty({ example: 399.98, required: false })
  total?: number;
}
