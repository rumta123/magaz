import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Product } from "../../products/entities/product.entity";

@Entity("categories")
export class Category {
  @PrimaryGeneratedColumn({ type: "bigint" })
  id: number;

  @Column({ length: 255 })
  title: string;

  @Column({ nullable: true, length: 500 })
  image: string;

  // ✅ Правильное использование TypeORM дат:
  @CreateDateColumn({ type: "timestamp" })
  createdAt: Date;

  @UpdateDateColumn({ type: "timestamp" })
  updatedAt: Date;

  // ✅ Для иерархии категорий (опционально):
  @Column({ nullable: true })
  parentId: number;

  @ManyToOne(() => Category, (category) => category.children, {
    nullable: true,
    onDelete: "SET NULL",
  })
  @JoinColumn({ name: "parentId" })
  parent: Category;

  @OneToMany(() => Category, (category) => category.parent)
  children: Category[];

  @Column({ default: 0 })
  sortOrder: number;

  @OneToMany(() => Product, (product) => product.category)
  products: Product[];
  // В Category добавьте:
  @Column({ unique: true, length: 255 })
  slug: string;

  // Метод для генерации slug (можно вынести в service):
  generateSlug(): string {
    return this.title
      .toLowerCase()
      .replace(/[^a-z0-9а-яё\s-]/g, "")
      .replace(/[\s-]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }
}
