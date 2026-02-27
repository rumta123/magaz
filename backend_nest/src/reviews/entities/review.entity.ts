// src/reviews/entities/review.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  Check,
} from "typeorm";
import { Product } from "../../products/entities/product.entity";
import { User } from "../../users/users.entity";

@Entity("reviews")
@Check(`"rating" >= 1 AND "rating" <= 5`) // ✅ Проверка рейтинга на уровне БД
export class Review {
  @PrimaryGeneratedColumn({ type: "int" })
  id: number;

  @Column({ name: "product_id", type: "int" })
  productId: number;

  @Column({ name: "user_id", type: "int" })
  userId: number;

  // ✅ ИСПРАВЛЕНО: smallint вместо tinyint для PostgreSQL
  @Column({ type: "smallint" }) // ← Было: type: 'tinyint' ❌
  rating: number; // 1-5

  @Column({ type: "text", nullable: true })
  comment: string | null;

  @Column({ name: "is_approved", type: "boolean", default: false })
  isApproved: boolean;

  @CreateDateColumn({ type: "timestamp", name: "created_at" })
  createdAt: Date;

  // 🔗 Связь с товаром
  @ManyToOne(() => Product, (product) => product.reviews, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "product_id" })
  product: Product;

  // 🔗 Связь с пользователем
  @ManyToOne(() => User, { onDelete: "CASCADE" })
  @JoinColumn({ name: "user_id" })
  user: User;
}
