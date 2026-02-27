import { User } from "../../users/users.entity";
import { Order } from "../../orders/entities/order.entity";
export declare enum AddressType {
    SHIPPING = "shipping",
    BILLING = "billing",
    HOME = "HOME"
}
export declare class Address {
    id: number;
    userId: number;
    type: AddressType;
    city: string;
    street: string;
    building: string | null;
    apartment: string | null;
    postalCode: string | null;
    phone: string | null;
    isDefault: boolean;
    createdAt: Date;
    user: User;
    orders: Order[];
    get fullAddress(): string;
}
