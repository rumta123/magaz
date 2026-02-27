import { Product } from "../../products/entities/product.entity";
import { User } from "../../users/users.entity";
export declare class Review {
    id: number;
    productId: number;
    userId: number;
    rating: number;
    comment: string | null;
    isApproved: boolean;
    createdAt: Date;
    product: Product;
    user: User;
}
