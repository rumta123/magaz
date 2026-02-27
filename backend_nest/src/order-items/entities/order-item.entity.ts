// src/order-items/entities/order-item.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  BeforeInsert,
} from "typeorm";
import { Order } from "../../orders/entities/order.entity";
import { Product } from "../../products/entities/product.entity";

@Entity("order_items")
export class OrderItem {
  @PrimaryGeneratedColumn({ type: "int" })
  id: number;

  @Column({ name: "order_id", type: "int" })
  orderId: number;

  @Column({ name: "product_id", type: "int" })
  productId: number;

  @Column({ name: "product_name", type: "varchar", length: 255 })
  productName: string;

  @Column({ type: "int" })
  quantity: number;

  @Column({ type: "decimal", precision: 10, scale: 2 })
  price: number;

  @Column({ type: "decimal", precision: 10, scale: 2 })
  total: number;

  @CreateDateColumn({ type: "timestamp", name: "created_at" })
  createdAt: Date;

  // 🔗 Связь с заказом
  @ManyToOne(() => Order, (order) => order.orderItems, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "order_id" })
  order: Order;

  // 🔗 Связь с товаром
  @ManyToOne(() => Product, { onDelete: "SET NULL" })
  @JoinColumn({ name: "product_id" })
  product: Product;

  // ✅ Автоматический расчёт total перед сохранением
  @BeforeInsert()
  calculateTotal() {
    if (this.price && this.quantity) {
      this.total = this.price * this.quantity;
    }
  }
}
