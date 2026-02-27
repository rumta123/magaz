// src/cart/dto/create-cart.dto.ts
import { IsInt, IsNotEmpty, Min, Max, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";

export class CreateCartDto {
  @IsInt()
  @Min(1)
  @IsNotEmpty()
  @Type(() => Number)
  @ApiProperty({ example: 1 })
  userId: number;

  @IsInt()
  @Min(1)
  @IsNotEmpty()
  @Type(() => Number)
  @ApiProperty({ example: 2 })
  productId: number;

  @IsInt()
  @Min(1)
  @Max(999)
  @IsOptional()
  @Type(() => Number)
  @ApiProperty({ example: 2, required: false })
  quantity?: number;
}
