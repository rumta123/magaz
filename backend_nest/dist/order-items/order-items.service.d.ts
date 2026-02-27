import { Repository } from "typeorm";
import { OrderItem } from "./entities/order-item.entity";
import { Order } from "../orders/entities/order.entity";
import { Product } from "../products/entities/product.entity";
import { CreateOrderItemDto } from "./dto/create-order-item.dto";
import { UpdateOrderItemDto } from "./dto/update-order-item.dto";
export declare class OrderItemsService {
    private readonly orderItemRepo;
    private readonly orderRepo;
    private readonly productRepo;
    constructor(orderItemRepo: Repository<OrderItem>, orderRepo: Repository<Order>, productRepo: Repository<Product>);
    create(dto: CreateOrderItemDto): Promise<OrderItem>;
    findByOrder(orderId: number): Promise<OrderItem[]>;
    findOne(id: number): Promise<OrderItem>;
    update(id: number, dto: UpdateOrderItemDto): Promise<OrderItem>;
    remove(id: number): Promise<{
        message: string;
    }>;
    updateQuantity(id: number, quantity: number): Promise<OrderItem>;
    incrementQuantity(id: number): Promise<OrderItem>;
    decrementQuantity(id: number): Promise<OrderItem>;
}
