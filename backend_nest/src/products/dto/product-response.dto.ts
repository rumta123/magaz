// src/products/dto/product-response.dto.ts
import { Expose } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";

export class ProductResponseDto {
  @Expose()
  @ApiProperty({ example: 1 })
  id: number;

  @Expose()
  @ApiProperty({ example: "Кроссовки Nike Air" })
  title: string;

  @Expose()
  @ApiProperty({ example: "nike-air" })
  slug: string;

  @Expose()
  @ApiProperty({ example: 199.99 })
  price: number;

  @Expose()
  @ApiProperty({ example: 149.99, nullable: true })
  discontPrice: number | null;

  @Expose()
  @ApiProperty({ example: "Удобные кроссовки для пробежек", nullable: true })
  description: string | null;

  @Expose()
  @ApiProperty({ example: 100 })
  stock: number;

  @Expose()
  @ApiProperty({ example: true })
  isActive: boolean;

  @Expose()
  @ApiProperty({ example: "https://example.com/image.jpg", nullable: true })
  image: string | null;

  @Expose()
  @ApiProperty({ example: 1 })
  categoryId: number;

  @Expose()
  @ApiProperty({ type: String })
  createdAt: Date;

  @Expose()
  @ApiProperty({ type: String })
  updatedAt: Date;

  @Expose()
  @ApiProperty({ required: false, type: Object })
  category?: {
    id: number;
    title: string;
    image: string | null;
  };
}
