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
exports.ProductImagesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const product_image_entity_1 = require("./entities/product-image.entity");
const product_entity_1 = require("../products/entities/product.entity");
let ProductImagesService = class ProductImagesService {
    imageRepo;
    productRepo;
    constructor(imageRepo, productRepo) {
        this.imageRepo = imageRepo;
        this.productRepo = productRepo;
    }
    async create(dto) {
        const product = await this.productRepo.findOneBy({ id: dto.productId });
        if (!product) {
            throw new common_1.NotFoundException(`Товар с ID ${dto.productId} не найден`);
        }
        if (dto.isPrimary) {
            await this.imageRepo.update({ productId: dto.productId, isPrimary: true }, { isPrimary: false });
        }
        const image = this.imageRepo.create({
            ...dto,
            isPrimary: dto.isPrimary ?? false,
            sortOrder: dto.sortOrder ?? 0,
        });
        return this.imageRepo.save(image);
    }
    async findByProduct(productId) {
        return this.imageRepo.find({
            where: { productId },
            order: { sortOrder: "ASC", createdAt: "ASC" },
        });
    }
    async findOne(id) {
        const image = await this.imageRepo.findOneBy({ id });
        if (!image) {
            throw new common_1.NotFoundException(`Изображение с ID ${id} не найдено`);
        }
        return image;
    }
    async findPrimary(productId) {
        return this.imageRepo.findOne({
            where: { productId, isPrimary: true },
        });
    }
    async update(id, dto) {
        const image = await this.findOne(id);
        if (dto.isPrimary === true) {
            await this.imageRepo.update({
                productId: image.productId,
                isPrimary: true,
                id: (0, typeorm_2.Not)(id),
            }, { isPrimary: false });
        }
        await this.imageRepo.update(id, dto);
        return this.findOne(id);
    }
    async remove(id) {
        const image = await this.findOne(id);
        if (image.isPrimary) {
            const other = await this.imageRepo.findOne({
                where: {
                    productId: image.productId,
                    id: (0, typeorm_2.Not)(id),
                },
                order: { sortOrder: "ASC", createdAt: "ASC" },
            });
            if (other) {
                await this.imageRepo.update(other.id, { isPrimary: true });
            }
        }
        await this.imageRepo.delete(id);
        return { message: "Изображение успешно удалено" };
    }
    async setAsPrimary(id) {
        const image = await this.findOne(id);
        await this.imageRepo.update({ productId: image.productId, isPrimary: true }, { isPrimary: false });
        await this.imageRepo.update(id, { isPrimary: true });
        return this.findOne(id);
    }
    async updateSortOrder(productId, imageIds) {
        for (let i = 0; i < imageIds.length; i++) {
            await this.imageRepo.update(imageIds[i], { sortOrder: i });
        }
        return { message: "Порядок изображений обновлен" };
    }
};
exports.ProductImagesService = ProductImagesService;
exports.ProductImagesService = ProductImagesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(product_image_entity_1.ProductImage)),
    __param(1, (0, typeorm_1.InjectRepository)(product_entity_1.Product)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], ProductImagesService);
//# sourceMappingURL=product-images.service.js.map