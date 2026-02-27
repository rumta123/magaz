// src/cart/dto/cart-response.dto.ts
import { Expose, Transform } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";

// 🔹 Опционально: создайте отдельный DTO для вложенного продукта
export class ProductPreviewDto {
  @ApiProperty({ example: 42 })
  id: number;

  @ApiProperty({ example: "Товар" })
  title: string;

  @ApiProperty({ example: 199.99 })
  price: number;

  @ApiProperty({ example: 149.99, nullable: true })
  discontPrice: number | null;

  @ApiProperty({ example: "https://example.com/image.jpg", nullable: true })
  image: string | null;

  @ApiProperty({ example: 10 })
  stock: number;
}

export class CartResponseDto {
  @Expose()
  @ApiProperty({ example: 1, description: "ID записи корзины" })
  id: number;

  @Expose()
  @ApiProperty({ example: 5, description: "ID пользователя" })
  userId: number;

  @Expose()
  @ApiProperty({ example: 2, description: "ID товара" })
  productId: number;

  @Expose()
  @ApiProperty({ example: 3, description: "Количество товара" })
  quantity: number;

  @Expose()
  @ApiProperty({ type: String, description: "Дата создания" })
  createdAt: Date;

  @Expose()
  @ApiProperty({ type: String, description: "Дата обновления" })
  updatedAt: Date;

  @Expose()
  @ApiProperty({
    required: false,
    description: "Данные товара",
    type: () => ProductPreviewDto, // ✅ Исправлено: используем класс DTO
    nullable: true,
  })
  product?: ProductPreviewDto;

  @Expose()
  @Transform(({ obj }) => {
    // ✅ Автоматический расчёт стоимости позиции
    const price = obj.product?.discontPrice || obj.product?.price || 0;
    return price * obj.quantity;
  })
  @ApiProperty({ example: 599.97, description: "Общая стоимость позиции" })
  totalPrice: number;
}
