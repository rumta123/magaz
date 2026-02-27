import { OrderItemsService } from "./order-items.service";
import { CreateOrderItemDto } from "./dto/create-order-item.dto";
import { UpdateOrderItemDto } from "./dto/update-order-item.dto";
export declare class OrderItemsController {
    private readonly orderItemsService;
    constructor(orderItemsService: OrderItemsService);
    findByOrder(orderId: number): Promise<import("./entities/order-item.entity").OrderItem[]>;
    findOne(id: number): Promise<import("./entities/order-item.entity").OrderItem>;
    create(dto: CreateOrderItemDto): Promise<import("./entities/order-item.entity").OrderItem>;
    update(id: number, dto: UpdateOrderItemDto): Promise<import("./entities/order-item.entity").OrderItem>;
    remove(id: number): Promise<{
        message: string;
    }>;
    updateQuantity(id: number, quantity: number): Promise<import("./entities/order-item.entity").OrderItem>;
    incrementQuantity(id: number): Promise<import("./entities/order-item.entity").OrderItem>;
    decrementQuantity(id: number): Promise<import("./entities/order-item.entity").OrderItem>;
}
