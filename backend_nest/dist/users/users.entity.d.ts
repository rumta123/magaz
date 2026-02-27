import { Role } from "../roles/role.entity";
import { Cart } from "../cart/entities/cart.entity";
import { Address } from "../addresses/entities/address.entity";
import { Order } from "../orders/entities/order.entity";
import { Review } from "../reviews/entities/review.entity";
export declare class User {
    id: number;
    email: string;
    name: string;
    password: string;
    phone: string;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    cartItems: Cart[];
    addresses: Address[];
    orders: Order[];
    reviews: Review[];
    roles: Role[];
}
