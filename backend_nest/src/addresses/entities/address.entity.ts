// src/addresses/entities/address.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  JoinColumn,
  CreateDateColumn,
} from "typeorm";
import { User } from "../../users/users.entity"; // ✅ Исправлен путь
import { Order } from "../../orders/entities/order.entity";

export enum AddressType {
  SHIPPING = "shipping",
  BILLING = "billing",
  HOME = "HOME",
}

@Entity("addresses")
export class Address {
  @PrimaryGeneratedColumn({ type: "int" })
  id: number;

  @Column({ name: "user_id", type: "int" })
  userId: number;

  @Column({
    type: "enum",
    enum: AddressType,
    default: AddressType.SHIPPING,
  })
  type: AddressType;

  @Column({ type: "varchar", length: 100 })
  city: string;

  @Column({ type: "varchar", length: 255 })
  street: string;

  @Column({ name: "building", type: "varchar", length: 20, nullable: true })
  building: string | null;

  @Column({ name: "apartment", type: "varchar", length: 20, nullable: true })
  apartment: string | null;

  @Column({ name: "postal_code", type: "varchar", length: 20, nullable: true })
  postalCode: string | null;

  @Column({ type: "varchar", length: 20, nullable: true })
  phone: string | null;

  @Column({ name: "is_default", type: "boolean", default: false })
  isDefault: boolean;

  @CreateDateColumn({ type: "timestamp", name: "created_at" })
  createdAt: Date;

  // 🔗 Связь с пользователем
  @ManyToOne(() => User, (user) => user.addresses, { onDelete: "CASCADE" })
  @JoinColumn({ name: "user_id" })
  user: User;

  // 🔗 Связь с заказами (используем string для избежания циклической зависимости)
  @OneToMany(() => Order, (order) => order.address)
  orders: Order[];

  // ✅ Полное название адреса (для отображения)
  get fullAddress(): string {
    const parts = [
      this.city,
      this.street,
      this.building && `д. ${this.building}`,
      this.apartment && `кв. ${this.apartment}`,
    ].filter(Boolean);
    return parts.join(", ");
  }

  // ⚠️ Логика ensureSingleDefault реализуется в сервисе, не в entity
}
