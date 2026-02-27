import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinTable,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToMany,
} from "typeorm";
import { Role } from "../roles/role.entity";
import { Cart } from "../cart/entities/cart.entity";
import { Address } from "../addresses/entities/address.entity";
import { Order } from "../orders/entities/order.entity";
import { Review } from "../reviews/entities/review.entity";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  name: string;

  @Column()
  password: string;

  @Column({ nullable: true, unique: true })
  phone: string;

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date; // 🔹 Дата регистрации

  @UpdateDateColumn()
  updatedAt: Date; // 🔹 Дата последнего обновления

  @OneToMany(() => Cart, (cart) => cart.user)
  cartItems: Cart[];
  // ✅ Добавьте поле:

  // 🔗 Связь с адресами
  @OneToMany(() => Address, (address) => address.user)
  addresses: Address[];

  @OneToMany(() => Order, (order) => order.user)
  orders: Order[];

  @OneToMany(() => Review, (review) => review.user)
  reviews: Review[];

  @ManyToMany(() => Role, (role) => role.users, { eager: true })
  @JoinTable({
    name: "user_roles",
    joinColumn: { name: "user_id", referencedColumnName: "id" },
    inverseJoinColumn: { name: "role_id", referencedColumnName: "id" },
  })
  roles: Role[];
}
