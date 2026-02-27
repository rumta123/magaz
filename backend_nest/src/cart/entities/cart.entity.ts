// src/cart/entities/cart.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Unique,
} from "typeorm";

import { Product } from "../../products/entities/product.entity";
import { User } from "src/users/users.entity";

@Entity("cart")
@Unique(["userId", "productId"]) // ✅ Один товар в корзине у пользователя может быть только один раз
export class Cart {
  @PrimaryGeneratedColumn({ type: "int" })
  id: number;

  @Column({ name: "user_id", type: "int" })
  userId: number;

  @Column({ name: "product_id", type: "int" })
  productId: number;

  @Column({ type: "int", default: 1 })
  quantity: number;

  @CreateDateColumn({ type: "timestamp", name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ type: "timestamp", name: "updated_at" })
  updatedAt: Date;

  // 🔗 Связь с пользователем
  @ManyToOne(() => User, (user) => user.cartItems, { onDelete: "CASCADE" })
  @JoinColumn({ name: "user_id" })
  user: User;

  // 🔗 Связь с товаром
  @ManyToOne(() => Product, (product) => product.cartItems, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "product_id" })
  product: Product;
}
