// src/orders/entities/order.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
} from "typeorm";
import { User } from "../../users/users.entity"; // ✅ Исправлен путь

import { OrderItem } from "../../order-items/entities/order-item.entity";
import { Address } from "../../addresses/entities/address.entity";

export enum OrderStatus {
  PENDING = "pending",
  PROCESSING = "processing",
  SHIPPED = "shipped",
  DELIVERED = "delivered",
  CANCELLED = "cancelled",
}

export enum PaymentMethod {
  CASH = "cash",
  CARD = "card",
  ONLINE = "online",
}

@Entity("orders")
export class Order {
  @PrimaryGeneratedColumn({ type: "int" })
  id: number;

  @Column({ name: "order_number", type: "varchar", length: 50, unique: true })
  orderNumber: string;

  @Column({ name: "user_id", type: "int", nullable: true })
  userId: number | null;

  @Column({ name: "address_id", type: "int", nullable: true })
  addressId: number | null;

  @Column({ name: "total_amount", type: "decimal", precision: 10, scale: 2 })
  totalAmount: number;

  @Column({
    type: "enum",
    enum: OrderStatus,
    default: OrderStatus.PENDING,
  })
  status: OrderStatus;

  @Column({
    name: "payment_method",
    type: "enum",
    enum: PaymentMethod,
    default: PaymentMethod.CASH,
  })
  paymentMethod: PaymentMethod;

  @Column({ type: "text", nullable: true })
  notes: string | null;

  @CreateDateColumn({ type: "timestamp", name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ type: "timestamp", name: "updated_at" })
  updatedAt: Date;

  // 🔗 Связь с пользователем
  @ManyToOne(() => User, (user) => user.orders, {
    nullable: true,
    onDelete: "SET NULL",
  })
  @JoinColumn({ name: "user_id" })
  user: User;

  // 🔗 Связь с адресом
  // 🔗 Связь с адресом — ИСПОЛЬЗУЕМ СТРОКУ!
  @ManyToOne("Address", { nullable: true, onDelete: "SET NULL" }) // ✅ Строка вместо () => Address
  @JoinColumn({ name: "address_id" })
  address: Address; // ← TypeORM сам поймёт тип

  // 🔗 Связь с позициями заказа
  @OneToMany(() => OrderItem, (orderItem) => orderItem.order, { cascade: true })
  orderItems: OrderItem[];

  // ✅ Генерация уникального номера заказа
  @BeforeInsert()
  generateOrderNumber() {
    if (!this.orderNumber) {
      const timestamp = Date.now().toString(36).toUpperCase();
      const random = Math.random().toString(36).substring(2, 6).toUpperCase();
      this.orderNumber = `ORD-${timestamp}-${random}`;
    }
  }
}
