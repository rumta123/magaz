import {
  IsArray,
  ValidateNested,
  IsInt,
  IsNotEmpty,
  Min,
  IsOptional,
} from "class-validator";
import { Type } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";

export class MergeCartItemDto {
  @IsOptional()
  @IsInt()
  @Min(1)
  @ApiProperty({ example: 1, description: "User id", required: false })
  userId?: number;

  @IsInt()
  @Min(1)
  @IsNotEmpty()
  @ApiProperty({ example: 42, description: "Product id" })
  productId: number;

  @IsInt()
  @Min(1)
  @IsNotEmpty()
  @ApiProperty({ example: 2, description: "Quantity" })
  quantity: number;
}

export class MergeCartDto {
  @ApiProperty({ example: 1, description: "User id" })
  @IsInt()
  @Min(1)
  @IsNotEmpty()
  userId: number;

  @ApiProperty({
    type: [MergeCartItemDto],
    description: "Current full cart snapshot from client",
    required: false,
    default: [],
  })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MergeCartItemDto)
  items?: MergeCartItemDto[];
}
