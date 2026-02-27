// src/product-images/entities/product-image.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
} from "typeorm";
import { Product } from "../../products/entities/product.entity";

@Entity("product_images")
export class ProductImage {
  @PrimaryGeneratedColumn({ type: "int" })
  id: number;

  @Column({ name: "product_id", type: "int" })
  productId: number;

  @Column({ name: "image_url", type: "varchar", length: 500 })
  imageUrl: string;

  @Column({ name: "alt_text", type: "varchar", length: 255, nullable: true })
  altText: string | null;

  @Column({ name: "is_primary", type: "boolean", default: false })
  isPrimary: boolean;

  @Column({ name: "sort_order", type: "int", default: 0 })
  sortOrder: number;

  @CreateDateColumn({ type: "timestamp", name: "created_at" })
  createdAt: Date;

  // 🔗 Связь с товаром
  @ManyToOne(() => Product, (product) => product.images, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "product_id" })
  product: Product;
}
