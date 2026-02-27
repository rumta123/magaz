// src/reviews/dto/review-response.dto.ts
import { Expose } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";

export class ReviewResponseDto {
  @Expose()
  @ApiProperty({ example: 1 })
  id: number;

  @Expose()
  @ApiProperty({ example: 2 })
  productId: number;

  @Expose()
  @ApiProperty({ example: 5 })
  userId: number;

  @Expose()
  @ApiProperty({ example: 5 })
  rating: number;

  @Expose()
  @ApiProperty({ example: "Отлично", nullable: true })
  comment: string | null;

  @Expose()
  @ApiProperty({ example: true })
  isApproved: boolean;

  @Expose()
  @ApiProperty({ type: String })
  createdAt: Date;

  @Expose()
  @ApiProperty({ required: false, type: Object })
  user?: {
    id: number;
    name: string;
  };

  @Expose()
  @ApiProperty({ required: false, type: Object })
  product?: {
    id: number;
    title: string;
  };
}
