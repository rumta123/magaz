"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderItemsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const order_item_entity_1 = require("./entities/order-item.entity");
const order_entity_1 = require("../orders/entities/order.entity");
const product_entity_1 = require("../products/entities/product.entity");
let OrderItemsService = class OrderItemsService {
    orderItemRepo;
    orderRepo;
    productRepo;
    constructor(orderItemRepo, orderRepo, productRepo) {
        this.orderItemRepo = orderItemRepo;
        this.orderRepo = orderRepo;
        this.productRepo = productRepo;
    }
    async create(dto) {
        const order = await this.orderRepo.findOneBy({ id: dto.orderId });
        if (!order) {
            throw new common_1.NotFoundException(`Заказ с ID ${dto.orderId} не найден`);
        }
        if (order.status === order_entity_1.OrderStatus.CANCELLED ||
            order.status === order_entity_1.OrderStatus.DELIVERED) {
            throw new common_1.BadRequestException("Нельзя изменить отменённый или доставленный заказ");
        }
        const product = await this.productRepo.findOneBy({ id: dto.productId });
        if (!product) {
            throw new common_1.NotFoundException(`Товар с ID ${dto.productId} не найден`);
        }
        const orderItem = this.orderItemRepo.create({
            orderId: dto.orderId,
            productId: dto.productId,
            productName: dto.productName,
            quantity: dto.quantity,
            price: dto.price,
            total: dto.total || dto.price * dto.quantity,
        });
        return this.orderItemRepo.save(orderItem);
    }
    async findByOrder(orderId) {
        return this.orderItemRepo.find({
            where: { orderId },
            relations: ["product"],
            order: { createdAt: "ASC" },
        });
    }
    async findOne(id) {
        const orderItem = await this.orderItemRepo.findOne({
            where: { id },
            relations: ["order", "product"],
        });
        if (!orderItem) {
            throw new common_1.NotFoundException(`Позиция заказа с ID ${id} не найдена`);
        }
        return orderItem;
    }
    async update(id, dto) {
        const orderItem = await this.findOne(id);
        const order = await this.orderRepo.findOneBy({ id: orderItem.orderId });
        if (!order) {
            throw new common_1.NotFoundException("Заказ не найден");
        }
        if (order.status === order_entity_1.OrderStatus.CANCELLED ||
            order.status === order_entity_1.OrderStatus.DELIVERED) {
            throw new common_1.BadRequestException("Нельзя изменить отменённый или доставленный заказ");
        }
        if (dto.productId) {
            const product = await this.productRepo.findOneBy({ id: dto.productId });
            if (!product) {
                throw new common_1.NotFoundException(`Товар с ID ${dto.productId} не найден`);
            }
            orderItem.productId = dto.productId;
        }
        if (dto.productName)
            orderItem.productName = dto.productName;
        if (dto.quantity)
            orderItem.quantity = dto.quantity;
        if (dto.price)
            orderItem.price = dto.price;
        orderItem.total = orderItem.price * orderItem.quantity;
        if (dto.total)
            orderItem.total = dto.total;
        return this.orderItemRepo.save(orderItem);
    }
    async remove(id) {
        const orderItem = await this.findOne(id);
        const order = await this.orderRepo.findOneBy({ id: orderItem.orderId });
        if (order &&
            (order.status === order_entity_1.OrderStatus.CANCELLED ||
                order.status === order_entity_1.OrderStatus.DELIVERED)) {
            throw new common_1.BadRequestException("Нельзя изменить отменённый или доставленный заказ");
        }
        await this.orderItemRepo.remove(orderItem);
        return { message: "Позиция заказа успешно удалена" };
    }
    async updateQuantity(id, quantity) {
        const orderItem = await this.findOne(id);
        if (quantity < 1) {
            throw new common_1.BadRequestException("Количество должно быть больше 0");
        }
        orderItem.quantity = quantity;
        orderItem.total = orderItem.price * quantity;
        return this.orderItemRepo.save(orderItem);
    }
    async incrementQuantity(id) {
        const orderItem = await this.findOne(id);
        orderItem.quantity += 1;
        orderItem.total = orderItem.price * orderItem.quantity;
        return this.orderItemRepo.save(orderItem);
    }
    async decrementQuantity(id) {
        const orderItem = await this.findOne(id);
        if (orderItem.quantity <= 1) {
            throw new common_1.BadRequestException("Нельзя уменьшить количество меньше 1. Удалите позицию.");
        }
        orderItem.quantity -= 1;
        orderItem.total = orderItem.price * orderItem.quantity;
        return this.orderItemRepo.save(orderItem);
    }
};
exports.OrderItemsService = OrderItemsService;
exports.OrderItemsService = OrderItemsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(order_item_entity_1.OrderItem)),
    __param(1, (0, typeorm_1.InjectRepository)(order_entity_1.Order)),
    __param(2, (0, typeorm_1.InjectRepository)(product_entity_1.Product)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], OrderItemsService);
//# sourceMappingURL=order-items.service.js.map