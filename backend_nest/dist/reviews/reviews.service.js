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
exports.ReviewsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const review_entity_1 = require("./entities/review.entity");
const product_entity_1 = require("../products/entities/product.entity");
const users_entity_1 = require("../users/users.entity");
const order_item_entity_1 = require("../order-items/entities/order-item.entity");
const order_entity_1 = require("../orders/entities/order.entity");
let ReviewsService = class ReviewsService {
    reviewRepo;
    productRepo;
    userRepo;
    orderItemRepo;
    orderRepo;
    constructor(reviewRepo, productRepo, userRepo, orderItemRepo, orderRepo) {
        this.reviewRepo = reviewRepo;
        this.productRepo = productRepo;
        this.userRepo = userRepo;
        this.orderItemRepo = orderItemRepo;
        this.orderRepo = orderRepo;
    }
    async canUserReviewProduct(userId, productId) {
        const purchase = await this.orderItemRepo
            .createQueryBuilder("oi")
            .innerJoin(order_entity_1.Order, "o", "o.id = oi.orderId")
            .where("oi.productId = :productId", { productId })
            .andWhere("o.userId = :userId", { userId })
            .getOne();
        if (!purchase) {
            return false;
        }
        const existingReview = await this.reviewRepo.findOne({
            where: { userId, productId },
            select: ["id"],
        });
        return !existingReview;
    }
    async create(dto) {
        if (!dto.userId) {
            throw new common_1.BadRequestException("userId is required");
        }
        const product = await this.productRepo.findOne({
            where: { id: dto.productId, isActive: true },
        });
        if (!product) {
            throw new common_1.NotFoundException(`Товар с ID ${dto.productId} не найден`);
        }
        const user = await this.userRepo.findOneBy({ id: dto.userId });
        if (!user) {
            throw new common_1.NotFoundException(`Пользователь с ID ${dto.userId} не найден`);
        }
        const hasPurchased = await this.canUserReviewProduct(dto.userId, dto.productId);
        if (!hasPurchased) {
            throw new common_1.ForbiddenException("Оставить отзыв можно только после покупки этого товара");
        }
        const existing = await this.reviewRepo.findOne({
            where: { productId: dto.productId, userId: dto.userId },
        });
        if (existing) {
            throw new common_1.BadRequestException("Вы уже оставляли отзыв на этот товар");
        }
        const review = this.reviewRepo.create({
            ...dto,
            isApproved: true,
        });
        return this.reviewRepo.save(review);
    }
    async findByProduct(productId, onlyApproved = true) {
        const where = { productId };
        if (onlyApproved) {
            where.isApproved = true;
        }
        return this.reviewRepo.find({
            where,
            relations: ["user"],
            select: {
                id: true,
                rating: true,
                comment: true,
                createdAt: true,
                isApproved: true,
                user: { id: true, name: true },
            },
            order: { createdAt: "DESC" },
        });
    }
    async findOne(id) {
        const review = await this.reviewRepo.findOne({
            where: { id },
            relations: ["user", "product"],
        });
        if (!review) {
            throw new common_1.NotFoundException(`Отзыв с ID ${id} не найден`);
        }
        return review;
    }
    async findByUser(userId) {
        return this.reviewRepo.find({
            where: { userId },
            relations: ["product"],
            order: { createdAt: "DESC" },
        });
    }
    async update(id, dto, userId) {
        const review = await this.findOne(id);
        if (userId && review.userId !== userId) {
            throw new common_1.ForbiddenException("Вы можете редактировать только свои отзывы");
        }
        await this.reviewRepo.update(id, dto);
        return this.findOne(id);
    }
    async approve(id) {
        await this.reviewRepo.update(id, { isApproved: true });
        return this.findOne(id);
    }
    async reject(id) {
        await this.reviewRepo.update(id, { isApproved: false });
        return this.findOne(id);
    }
    async remove(id, userId) {
        const review = await this.findOne(id);
        if (userId && review.userId !== userId) {
            throw new common_1.ForbiddenException("Вы можете удалять только свои отзывы");
        }
        await this.reviewRepo.remove(review);
        return { message: "Отзыв успешно удален" };
    }
    async getProductRating(productId) {
        const reviews = await this.reviewRepo.find({
            where: { productId, isApproved: true },
            select: ["rating"],
        });
        if (reviews.length === 0) {
            return { average: 0, count: 0, distribution: {} };
        }
        const distribution = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
        let sum = 0;
        for (const review of reviews) {
            sum += review.rating;
            distribution[review.rating] = (distribution[review.rating] || 0) + 1;
        }
        return {
            average: Math.round((sum / reviews.length) * 10) / 10,
            count: reviews.length,
            distribution,
        };
    }
    async getPendingReviews() {
        return this.reviewRepo.find({
            where: { isApproved: false },
            relations: ["user", "product"],
            order: { createdAt: "ASC" },
        });
    }
};
exports.ReviewsService = ReviewsService;
exports.ReviewsService = ReviewsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(review_entity_1.Review)),
    __param(1, (0, typeorm_1.InjectRepository)(product_entity_1.Product)),
    __param(2, (0, typeorm_1.InjectRepository)(users_entity_1.User)),
    __param(3, (0, typeorm_1.InjectRepository)(order_item_entity_1.OrderItem)),
    __param(4, (0, typeorm_1.InjectRepository)(order_entity_1.Order)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], ReviewsService);
//# sourceMappingURL=reviews.service.js.map