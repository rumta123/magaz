import { Category } from "../../categories/entities/category.entity";
import { ProductImage } from "../../product-images/entities/product-image.entity";
import { Cart } from "../../cart/entities/cart.entity";
import { Review } from "../../reviews/entities/review.entity";
export declare class Product {
    id: number;
    title: string;
    slug: string;
    price: number;
    discontPrice: number;
    description: string;
    stock: number;
    isActive: boolean;
    image: string;
    categoryId: number;
    createdAt: Date;
    updatedAt: Date;
    category: Category;
    cartItems: Cart[];
    reviews: Review[];
    get averageRating(): number | null;
    images: ProductImage[];
    generateSlug(): string;
}
