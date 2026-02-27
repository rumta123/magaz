import { User } from "../../users/users.entity";
import { OrderItem } from "../../order-items/entities/order-item.entity";
import { Address } from "../../addresses/entities/address.entity";
export declare enum OrderStatus {
    PENDING = "pending",
    PROCESSING = "processing",
    SHIPPED = "shipped",
    DELIVERED = "delivered",
    CANCELLED = "cancelled"
}
export declare enum PaymentMethod {
    CASH = "cash",
    CARD = "card",
    ONLINE = "online"
}
export declare class Order {
    id: number;
    orderNumber: string;
    userId: number | null;
    addressId: number | null;
    totalAmount: number;
    status: OrderStatus;
    paymentMethod: PaymentMethod;
    notes: string | null;
    createdAt: Date;
    updatedAt: Date;
    user: User;
    address: Address;
    orderItems: OrderItem[];
    generateOrderNumber(): void;
}
