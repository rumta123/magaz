// src/cart/dto/update-cart.dto.ts
import { IsInt, Min, Max, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";

export class UpdateCartDto {
  @IsInt()
  @Min(1)
  @Max(999)
  @IsOptional()
  @Type(() => Number)
  @ApiProperty({ example: 2, required: false })
  quantity?: number;
}
