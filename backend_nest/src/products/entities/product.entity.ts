import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import { Category } from "../../categories/entities/category.entity";
import { ProductImage } from "../../product-images/entities/product-image.entity";
import { Cart } from "../../cart/entities/cart.entity";
import { Review } from "../../reviews/entities/review.entity";
@Entity("products")
export class Product {
  @PrimaryGeneratedColumn({ type: "bigint" })
  id: number;

  @Column({ length: 255 })
  title: string;

  @Column({ length: 255, unique: true })
  slug: string; // ✅ Для SEO URL

  @Column({ type: "decimal", precision: 10, scale: 2 })
  price: number;

  @Column({
    name: "discont_price",
    type: "decimal",
    precision: 10,
    scale: 2,
    nullable: true,
  })
  discontPrice: number;

  @Column({ type: "text", nullable: true })
  description: string;

  @Column({ default: 0 })
  stock: number; // ✅ Количество на складе

  @Column({ default: true })
  isActive: boolean; // ✅ Статус товара

  @Column({ type: "text", nullable: true })
  image: string;

  // ✅ Правильное имя колонки: category_id (не categoryId!)
  @Column({ name: "category_id", type: "bigint" })
  categoryId: number;

  @CreateDateColumn({ type: "timestamp", name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ type: "timestamp", name: "updated_at" })
  updatedAt: Date;

  @ManyToOne(() => Category, (category) => category.products, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "category_id" })
  category: Category;
  @OneToMany(() => Cart, (cart) => cart.product)
  cartItems: Cart[];

  // ✅ Добавьте поле в класс Product:
  @OneToMany(() => Review, (review) => review.product)
  reviews: Review[];

  // ✅ Опционально: метод для получения среднего рейтинга
  get averageRating(): number | null {
    if (!this.reviews || this.reviews.length === 0) return null;
    const approved = this.reviews.filter((r) => r.isApproved);
    if (approved.length === 0) return null;
    const sum = approved.reduce((acc, r) => acc + r.rating, 0);
    return Math.round((sum / approved.length) * 10) / 10;
  }
  @OneToMany(() => ProductImage, (image) => image.product)
  images: ProductImage[];
  // ✅ Метод для генерации slug
  generateSlug(): string {
    return this.title
      .toLowerCase()
      .replace(/[^a-z0-9а-яё\s-]/g, "")
      .replace(/[\s-]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }
}
