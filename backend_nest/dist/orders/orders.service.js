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
exports.OrdersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const order_entity_1 = require("./entities/order.entity");
const order_item_entity_1 = require("../order-items/entities/order-item.entity");
const product_entity_1 = require("../products/entities/product.entity");
const users_entity_1 = require("../users/users.entity");
const address_entity_1 = require("../addresses/entities/address.entity");
const cart_entity_1 = require("../cart/entities/cart.entity");
let OrdersService = class OrdersService {
    dataSource;
    orderRepo;
    orderItemRepo;
    productRepo;
    userRepo;
    addressRepo;
    cartRepo;
    constructor(dataSource, orderRepo, orderItemRepo, productRepo, userRepo, addressRepo, cartRepo) {
        this.dataSource = dataSource;
        this.orderRepo = orderRepo;
        this.orderItemRepo = orderItemRepo;
        this.productRepo = productRepo;
        this.userRepo = userRepo;
        this.addressRepo = addressRepo;
        this.cartRepo = cartRepo;
    }
    toAdminOrder(order) {
        return {
            id: order.id,
            orderNumber: order.orderNumber,
            userId: order.userId,
            addressId: order.addressId,
            totalAmount: order.totalAmount,
            status: order.status,
            paymentMethod: order.paymentMethod,
            notes: order.notes,
            createdAt: order.createdAt,
            updatedAt: order.updatedAt,
            user: order.user
                ? {
                    id: order.user.id,
                    email: order.user.email,
                    name: order.user.name,
                    phone: order.user.phone,
                    isActive: order.user.isActive,
                }
                : null,
            address: order.address
                ? {
                    id: order.address.id,
                    city: order.address.city,
                    street: order.address.street,
                    building: order.address.building,
                    apartment: order.address.apartment,
                    postalCode: order.address.postalCode,
                    phone: order.address.phone,
                }
                : null,
            orderItems: (order.orderItems ?? []).map((item) => ({
                id: item.id,
                productId: item.productId,
                productName: item.productName,
                quantity: item.quantity,
                price: item.price,
                total: item.total,
            })),
        };
    }
    async findByUser(userId) {
        return this.orderRepo.find({
            where: { userId },
            relations: ["orderItems", "address"],
            order: { createdAt: "DESC" },
        });
    }
    async findAllForAdmin() {
        const orders = await this.orderRepo.find({
            relations: ["orderItems", "address", "user"],
            order: { createdAt: "DESC" },
        });
        return orders.map((order) => this.toAdminOrder(order));
    }
    async findOne(id) {
        const order = await this.orderRepo.findOne({
            where: { id },
            relations: ["orderItems", "address", "user"],
        });
        if (!order) {
            throw new common_1.NotFoundException(`Заказ с ID ${id} не найден`);
        }
        return order;
    }
    async findOneForAdmin(id) {
        const order = await this.orderRepo.findOne({
            where: { id },
            relations: ["orderItems", "address", "user"],
        });
        if (!order) {
            throw new common_1.NotFoundException(`Order with ID ${id} not found`);
        }
        return this.toAdminOrder(order);
    }
    async checkout(dto) {
        if (!dto.items?.length) {
            throw new common_1.BadRequestException("Корзина пуста");
        }
        const user = await this.userRepo.findOneBy({ id: dto.userId });
        if (!user) {
            throw new common_1.NotFoundException(`Пользователь с ID ${dto.userId} не найден`);
        }
        return this.dataSource.transaction(async (manager) => {
            const norm = (v) => (v || "").trim().toLowerCase();
            let address = null;
            if (dto.addressId) {
                address = await manager.findOne(address_entity_1.Address, {
                    where: { id: dto.addressId, userId: dto.userId },
                });
                if (!address) {
                    throw new common_1.BadRequestException("Указанный адрес не найден у пользователя");
                }
            }
            else if (dto.address) {
                const wantedType = dto.address.type || address_entity_1.AddressType.SHIPPING;
                const existing = (await manager.find(address_entity_1.Address, { where: { userId: dto.userId } })).find((a) => (a.type || address_entity_1.AddressType.SHIPPING) === wantedType &&
                    norm(a.city) === norm(dto.address?.city) &&
                    norm(a.street) === norm(dto.address?.street) &&
                    norm(a.building) === norm(dto.address?.building) &&
                    norm(a.apartment) === norm(dto.address?.apartment) &&
                    norm(a.postalCode) === norm(dto.address?.postalCode) &&
                    norm(a.phone) === norm(dto.address?.phone));
                if (existing) {
                    if (dto.address.isDefault && !existing.isDefault) {
                        await manager.update(address_entity_1.Address, { userId: dto.userId, isDefault: true }, { isDefault: false });
                        await manager.update(address_entity_1.Address, existing.id, { isDefault: true });
                        address = await manager.findOneOrFail(address_entity_1.Address, { where: { id: existing.id } });
                    }
                    else {
                        address = existing;
                    }
                }
                else {
                    const payload = manager.create(address_entity_1.Address, {
                        userId: dto.userId,
                        type: wantedType,
                        city: dto.address.city,
                        street: dto.address.street,
                        building: dto.address.building || null,
                        apartment: dto.address.apartment || null,
                        postalCode: dto.address.postalCode || null,
                        phone: dto.address.phone || null,
                        isDefault: !!dto.address.isDefault,
                    });
                    if (payload.isDefault) {
                        await manager.update(address_entity_1.Address, { userId: dto.userId, isDefault: true }, { isDefault: false });
                    }
                    address = await manager.save(address_entity_1.Address, payload);
                }
            }
            else {
                address = await manager.findOne(address_entity_1.Address, {
                    where: { userId: dto.userId, isDefault: true },
                });
            }
            if (!address) {
                throw new common_1.BadRequestException("Укажите адрес доставки или создайте новый адрес");
            }
            let totalAmount = 0;
            const orderItems = [];
            for (const raw of dto.items) {
                const product = await manager.findOne(product_entity_1.Product, {
                    where: { id: raw.productId, isActive: true },
                });
                if (!product) {
                    throw new common_1.NotFoundException(`Товар с ID ${raw.productId} не найден`);
                }
                if ((product.stock || 0) < raw.quantity) {
                    throw new common_1.BadRequestException(`Недостаточно товара "${product.title}" на складе`);
                }
                const unitPrice = Number(product.discontPrice || product.price || 0);
                const lineTotal = Number((unitPrice * raw.quantity).toFixed(2));
                totalAmount += lineTotal;
                const item = manager.create(order_item_entity_1.OrderItem, {
                    productId: product.id,
                    productName: product.title,
                    quantity: raw.quantity,
                    price: unitPrice,
                    total: lineTotal,
                });
                orderItems.push(item);
                product.stock = Number(product.stock || 0) - raw.quantity;
                await manager.save(product_entity_1.Product, product);
            }
            const order = manager.create(order_entity_1.Order, {
                userId: dto.userId,
                addressId: address.id,
                totalAmount: Number(totalAmount.toFixed(2)),
                status: order_entity_1.OrderStatus.PENDING,
                paymentMethod: dto.paymentMethod || order_entity_1.PaymentMethod.CASH,
                notes: dto.notes || null,
            });
            const savedOrder = await manager.save(order_entity_1.Order, order);
            for (const item of orderItems) {
                item.orderId = savedOrder.id;
            }
            await manager.save(order_item_entity_1.OrderItem, orderItems);
            await manager.delete(cart_entity_1.Cart, { userId: dto.userId });
            return manager.findOneOrFail(order_entity_1.Order, {
                where: { id: savedOrder.id },
                relations: ["orderItems", "address", "user"],
            });
        });
    }
    async updateStatusByAdmin(id, status) {
        return this.dataSource.transaction(async (manager) => {
            const order = await manager.findOne(order_entity_1.Order, {
                where: { id },
                relations: ["orderItems", "address", "user"],
            });
            if (!order) {
                throw new common_1.NotFoundException(`Order with ID ${id} not found`);
            }
            const previousStatus = order.status;
            if (previousStatus === status) {
                return this.toAdminOrder(order);
            }
            if (status === order_entity_1.OrderStatus.CANCELLED && previousStatus !== order_entity_1.OrderStatus.CANCELLED) {
                for (const item of order.orderItems ?? []) {
                    const product = await manager.findOne(product_entity_1.Product, { where: { id: item.productId } });
                    if (!product)
                        continue;
                    product.stock = Number(product.stock || 0) + Number(item.quantity || 0);
                    await manager.save(product_entity_1.Product, product);
                }
            }
            order.status = status;
            await manager.save(order_entity_1.Order, order);
            const saved = await manager.findOneOrFail(order_entity_1.Order, {
                where: { id: order.id },
                relations: ["orderItems", "address", "user"],
            });
            return this.toAdminOrder(saved);
        });
    }
};
exports.OrdersService = OrdersService;
exports.OrdersService = OrdersService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, typeorm_1.InjectRepository)(order_entity_1.Order)),
    __param(2, (0, typeorm_1.InjectRepository)(order_item_entity_1.OrderItem)),
    __param(3, (0, typeorm_1.InjectRepository)(product_entity_1.Product)),
    __param(4, (0, typeorm_1.InjectRepository)(users_entity_1.User)),
    __param(5, (0, typeorm_1.InjectRepository)(address_entity_1.Address)),
    __param(6, (0, typeorm_1.InjectRepository)(cart_entity_1.Cart)),
    __metadata("design:paramtypes", [typeorm_2.DataSource,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], OrdersService);
//# sourceMappingURL=orders.service.js.map