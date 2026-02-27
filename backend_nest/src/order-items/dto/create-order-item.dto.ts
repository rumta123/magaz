// src/order-items/dto/create-order-item.dto.ts
import {
  IsInt,
  IsNotEmpty,
  Min,
  IsString,
  IsNumber,
  MaxLength,
  IsOptional,
} from "class-validator";
import { Type } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";

export class CreateOrderItemDto {
  @IsInt()
  @Min(1)
  @IsNotEmpty()
  @Type(() => Number)
  @ApiProperty({ example: 1 })
  orderId: number;

  @IsInt()
  @Min(1)
  @IsNotEmpty()
  @Type(() => Number)
  @ApiProperty({ example: 2 })
  productId: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  @ApiProperty({ example: "Кроссовки Nike Air" })
  productName: string;

  @IsInt()
  @Min(1)
  @IsNotEmpty()
  @Type(() => Number)
  @ApiProperty({ example: 2 })
  quantity: number;

  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  @IsNotEmpty()
  @Type(() => Number)
  @ApiProperty({ example: 199.99 })
  price: number;

  // ⚠️ total можно не передавать — рассчитается автоматически
  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  @IsOptional()
  @Type(() => Number)
  @ApiProperty({ example: 399.98, required: false })
  total?: number;
}
