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
exports.CartService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const cart_entity_1 = require("./entities/cart.entity");
const product_entity_1 = require("../products/entities/product.entity");
const users_entity_1 = require("../users/users.entity");
let CartService = class CartService {
    cartRepo;
    productRepo;
    userRepo;
    constructor(cartRepo, productRepo, userRepo) {
        this.cartRepo = cartRepo;
        this.productRepo = productRepo;
        this.userRepo = userRepo;
    }
    async addToCart(dto) {
        const user = await this.userRepo.findOneBy({ id: dto.userId });
        if (!user) {
            throw new common_1.NotFoundException(`Пользователь с ID ${dto.userId} не найден`);
        }
        const product = await this.productRepo.findOne({
            where: { id: dto.productId, isActive: true },
        });
        if (!product) {
            throw new common_1.NotFoundException(`Товар с ID ${dto.productId} не найден или не активен`);
        }
        if (product.stock < (dto.quantity || 1)) {
            throw new common_1.BadRequestException(`Недостаточно товара на складе. Доступно: ${product.stock}`);
        }
        const existingCart = await this.cartRepo.findOne({
            where: { userId: dto.userId, productId: dto.productId },
        });
        if (existingCart) {
            const newQuantity = existingCart.quantity + (dto.quantity || 1);
            if (newQuantity > product.stock) {
                throw new common_1.BadRequestException(`Превышено максимальное количество. Доступно: ${product.stock}`);
            }
            existingCart.quantity = newQuantity;
            return this.cartRepo.save(existingCart);
        }
        else {
            const cart = this.cartRepo.create({
                userId: dto.userId,
                productId: dto.productId,
                quantity: dto.quantity || 1,
            });
            return this.cartRepo.save(cart);
        }
    }
    async getUserCart(userId) {
        const items = await this.cartRepo.find({
            where: { userId },
            relations: ["product"],
            order: { createdAt: "DESC" },
        });
        const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
        const totalPrice = items.reduce((sum, item) => {
            const price = item.product?.discontPrice || item.product?.price || 0;
            return sum + price * item.quantity;
        }, 0);
        return {
            items,
            totalItems,
            totalPrice,
        };
    }
    async findOne(id) {
        const cart = await this.cartRepo.findOne({
            where: { id },
            relations: ["product"],
        });
        if (!cart) {
            throw new common_1.NotFoundException(`Элемент корзины с ID ${id} не найден`);
        }
        return cart;
    }
    async updateQuantity(id, dto) {
        const cart = await this.findOne(id);
        if (dto.quantity) {
            const product = await this.productRepo.findOneBy({ id: cart.productId });
            if (!product) {
                throw new common_1.NotFoundException("Товар больше не доступен");
            }
            if (product.stock < dto.quantity) {
                throw new common_1.BadRequestException(`Недостаточно товара на складе. Доступно: ${product.stock}`);
            }
            cart.quantity = dto.quantity;
        }
        return this.cartRepo.save(cart);
    }
    async removeFromCart(id) {
        const cart = await this.findOne(id);
        await this.cartRepo.remove(cart);
        return { message: "Товар удалён из корзины" };
    }
    async clearCart(userId) {
        await this.cartRepo.delete({ userId });
        return { message: "Корзина очищена" };
    }
    async incrementQuantity(id) {
        const cart = await this.findOne(id);
        const product = await this.productRepo.findOneBy({ id: cart.productId });
        if (!product) {
            throw new common_1.NotFoundException("Товар больше не доступен");
        }
        if (cart.quantity >= product.stock) {
            throw new common_1.BadRequestException(`Достигнуто максимальное количество. Доступно: ${product.stock}`);
        }
        cart.quantity += 1;
        return this.cartRepo.save(cart);
    }
    async mergeCart(userId, mergeDto) {
        const user = await this.userRepo.findOneBy({ id: userId });
        if (!user) {
            throw new common_1.NotFoundException(`������������ � ID ${userId} �� ������`);
        }
        await this.cartRepo.delete({ userId });
        const incoming = Array.isArray(mergeDto.items) ? mergeDto.items : [];
        for (const item of incoming) {
            if (!item?.productId || !item?.quantity)
                continue;
            if (item.userId && item.userId !== userId)
                continue;
            try {
                await this.addToCart({
                    userId,
                    productId: item.productId,
                    quantity: item.quantity,
                });
            }
            catch (e) {
                console.warn(`Sync failed for product ${item.productId}:`, e?.message || e);
            }
        }
        return this.getUserCart(userId);
    }
    async decrementQuantity(id) {
        const cart = await this.findOne(id);
        if (cart.quantity <= 1) {
            await this.removeFromCart(id);
            return cart;
        }
        cart.quantity -= 1;
        return this.cartRepo.save(cart);
    }
};
exports.CartService = CartService;
exports.CartService = CartService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(cart_entity_1.Cart)),
    __param(1, (0, typeorm_1.InjectRepository)(product_entity_1.Product)),
    __param(2, (0, typeorm_1.InjectRepository)(users_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], CartService);
//# sourceMappingURL=cart.service.js.map