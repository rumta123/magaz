import { Order } from "../../orders/entities/order.entity";
import { Product } from "../../products/entities/product.entity";
export declare class OrderItem {
    id: number;
    orderId: number;
    productId: number;
    productName: string;
    quantity: number;
    price: number;
    total: number;
    createdAt: Date;
    order: Order;
    product: Product;
    calculateTotal(): void;
}
