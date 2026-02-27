import { DataSource, Repository } from "typeorm";
import { Order, OrderStatus, PaymentMethod } from "./entities/order.entity";
import { OrderItem } from "../order-items/entities/order-item.entity";
import { Product } from "../products/entities/product.entity";
import { User } from "../users/users.entity";
import { Address } from "../addresses/entities/address.entity";
import { Cart } from "../cart/entities/cart.entity";
import { CheckoutOrderDto } from "./dto/checkout-order.dto";
export declare class OrdersService {
    private readonly dataSource;
    private readonly orderRepo;
    private readonly orderItemRepo;
    private readonly productRepo;
    private readonly userRepo;
    private readonly addressRepo;
    private readonly cartRepo;
    constructor(dataSource: DataSource, orderRepo: Repository<Order>, orderItemRepo: Repository<OrderItem>, productRepo: Repository<Product>, userRepo: Repository<User>, addressRepo: Repository<Address>, cartRepo: Repository<Cart>);
    private toAdminOrder;
    findByUser(userId: number): Promise<Order[]>;
    findAllForAdmin(): Promise<{
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
    findOne(id: number): Promise<Order>;
    findOneForAdmin(id: number): Promise<{
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
    checkout(dto: CheckoutOrderDto): Promise<Order>;
    updateStatusByAdmin(id: number, status: OrderStatus): Promise<{
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
