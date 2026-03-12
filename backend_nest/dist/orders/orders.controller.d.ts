import { OrdersService } from "./orders.service";
import { CheckoutOrderDto } from "./dto/checkout-order.dto";
import { OrderStatus } from "./entities/order.entity";
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    findAllForAdmin(): Promise<{
        id: number;
        orderNumber: string;
        userId: number | null;
        addressId: number | null;
        totalAmount: number;
        status: OrderStatus;
        paymentMethod: import("./entities/order.entity").PaymentMethod;
        notes: string | null;
        createdAt: Date;
        updatedAt: Date;
        user: {
            id: number;
            email: string;
            name: string;
            phone: string;
            isActive: boolean;
        } | null;
        address: {
            id: number;
            city: string;
            street: string;
            building: string | null;
            apartment: string | null;
            postalCode: string | null;
            phone: string | null;
        } | null;
        orderItems: {
            id: number;
            productId: number;
            productName: string;
            quantity: number;
            price: number;
            total: number;
        }[];
    }[]>;
    findByUser(userId: number): Promise<import("./entities/order.entity").Order[]>;
    findOne(id: number): Promise<{
        id: number;
        orderNumber: string;
        userId: number | null;
        addressId: number | null;
        totalAmount: number;
        status: OrderStatus;
        paymentMethod: import("./entities/order.entity").PaymentMethod;
        notes: string | null;
        createdAt: Date;
        updatedAt: Date;
        user: {
            id: number;
            email: string;
            name: string;
            phone: string;
            isActive: boolean;
        } | null;
        address: {
            id: number;
            city: string;
            street: string;
            building: string | null;
            apartment: string | null;
            postalCode: string | null;
            phone: string | null;
        } | null;
        orderItems: {
            id: number;
            productId: number;
            productName: string;
            quantity: number;
            price: number;
            total: number;
        }[];
    }>;
    checkout(dto: CheckoutOrderDto): Promise<import("./entities/order.entity").Order>;
    confirm(id: number): Promise<{
        id: number;
        orderNumber: string;
        userId: number | null;
        addressId: number | null;
        totalAmount: number;
        status: OrderStatus;
        paymentMethod: import("./entities/order.entity").PaymentMethod;
        notes: string | null;
        createdAt: Date;
        updatedAt: Date;
        user: {
            id: number;
            email: string;
            name: string;
            phone: string;
            isActive: boolean;
        } | null;
        address: {
            id: number;
            city: string;
            street: string;
            building: string | null;
            apartment: string | null;
            postalCode: string | null;
            phone: string | null;
        } | null;
        orderItems: {
            id: number;
            productId: number;
            productName: string;
            quantity: number;
            price: number;
            total: number;
        }[];
    }>;
    ship(id: number): Promise<{
        id: number;
        orderNumber: string;
        userId: number | null;
        addressId: number | null;
        totalAmount: number;
        status: OrderStatus;
        paymentMethod: import("./entities/order.entity").PaymentMethod;
        notes: string | null;
        createdAt: Date;
        updatedAt: Date;
        user: {
            id: number;
            email: string;
            name: string;
            phone: string;
            isActive: boolean;
        } | null;
        address: {
            id: number;
            city: string;
            street: string;
            building: string | null;
            apartment: string | null;
            postalCode: string | null;
            phone: string | null;
        } | null;
        orderItems: {
            id: number;
            productId: number;
            productName: string;
            quantity: number;
            price: number;
            total: number;
        }[];
    }>;
    deliver(id: number): Promise<{
        id: number;
        orderNumber: string;
        userId: number | null;
        addressId: number | null;
        totalAmount: number;
        status: OrderStatus;
        paymentMethod: import("./entities/order.entity").PaymentMethod;
        notes: string | null;
        createdAt: Date;
        updatedAt: Date;
        user: {
            id: number;
            email: string;
            name: string;
            phone: string;
            isActive: boolean;
        } | null;
        address: {
            id: number;
            city: string;
            street: string;
            building: string | null;
            apartment: string | null;
            postalCode: string | null;
            phone: string | null;
        } | null;
        orderItems: {
            id: number;
            productId: number;
            productName: string;
            quantity: number;
            price: number;
            total: number;
        }[];
    }>;
    cancel(id: number): Promise<{
        id: number;
        orderNumber: string;
        userId: number | null;
        addressId: number | null;
        totalAmount: number;
        status: OrderStatus;
        paymentMethod: import("./entities/order.entity").PaymentMethod;
        notes: string | null;
        createdAt: Date;
        updatedAt: Date;
        user: {
            id: number;
            email: string;
            name: string;
            phone: string;
            isActive: boolean;
        } | null;
        address: {
            id: number;
            city: string;
            street: string;
            building: string | null;
            apartment: string | null;
            postalCode: string | null;
            phone: string | null;
        } | null;
        orderItems: {
            id: number;
            productId: number;
            productName: string;
            quantity: number;
            price: number;
            total: number;
        }[];
    }>;
}
