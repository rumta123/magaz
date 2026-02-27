import { Product } from "../../products/entities/product.entity";
import { User } from "src/users/users.entity";
export declare class Cart {
    id: number;
    userId: number;
    productId: number;
    quantity: number;
    createdAt: Date;
    updatedAt: Date;
    user: User;
    product: Product;
}
