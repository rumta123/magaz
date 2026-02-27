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
exports.CategoriesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const category_entity_1 = require("./entities/category.entity");
const product_entity_1 = require("../products/entities/product.entity");
const file_upload_service_1 = require("../common/file-upload/file-upload.service");
const common_2 = require("@nestjs/common");
let CategoriesService = class CategoriesService {
    categoryRepo;
    productRepo;
    fileUploadService;
    constructor(categoryRepo, productRepo, fileUploadService) {
        this.categoryRepo = categoryRepo;
        this.productRepo = productRepo;
        this.fileUploadService = fileUploadService;
    }
    async getAllCategories() {
        return this.categoryRepo.find({
            order: { createdAt: "DESC" },
            select: ["id", "title", "slug", "image", "createdAt"],
        });
    }
    async getCategoryWithProducts(categoryId) {
        const category = await this.categoryRepo.findOne({
            where: { id: categoryId },
            relations: ["products"],
            select: ["id", "title", "slug", "image", "createdAt"],
        });
        if (!category) {
            throw new common_1.NotFoundException(`Категория с ID ${categoryId} не найдена`);
        }
        const activeProducts = category.products?.filter((p) => p.isActive !== false) || [];
        return {
            category: {
                id: category.id,
                title: category.title,
                slug: category.slug,
                image: category.image,
            },
            products: activeProducts.map((p) => ({
                id: p.id,
                title: p.title,
                price: p.price,
                discontPrice: p.discontPrice,
                image: p.image,
                slug: p.slug,
            })),
            total: activeProducts.length,
        };
    }
    async getCategoryWithProductsBySlug(slug) {
        const category = await this.categoryRepo.findOne({
            where: { slug },
            relations: ["products"],
            select: ["id", "title", "slug", "image", "createdAt"],
        });
        if (!category) {
            throw new common_1.NotFoundException(`Категория \"${slug}\" не найдена`);
        }
        const activeProducts = category.products?.filter((p) => p.isActive !== false) || [];
        return {
            category: {
                id: category.id,
                title: category.title,
                slug: category.slug,
                image: category.image,
            },
            products: activeProducts.map((p) => ({
                id: p.id,
                title: p.title,
                price: p.price,
                discontPrice: p.discontPrice,
                image: p.image,
                slug: p.slug,
            })),
            total: activeProducts.length,
        };
    }
    async createCategory(dto) {
        const category = this.categoryRepo.create({
            ...dto,
            slug: dto.slug ||
                dto.title
                    .toLowerCase()
                    .replace(/[^a-z0-9а-яё\s-]/g, "")
                    .replace(/[\s-]+/g, "-"),
        });
        return this.categoryRepo.save(category);
    }
    async updateCategory(id, dto) {
        await this.categoryRepo.update(id, dto);
        const updated = await this.categoryRepo.findOneBy({ id });
        if (!updated)
            throw new common_1.NotFoundException("Категория не найдена");
        return updated;
    }
    async deleteCategory(id) {
        const result = await this.categoryRepo.delete(id);
        if (result.affected === 0)
            throw new common_1.NotFoundException("Категория не найдена");
        return { message: "Категория удалена" };
    }
    async uploadCategoryImage(id, file) {
        const category = await this.categoryRepo.findOneBy({ id });
        if (!category)
            throw new common_1.NotFoundException("Категория не найдена");
        if (!file)
            throw new common_2.BadRequestException("Файл не найден");
        const url = await this.fileUploadService.uploadFile(file, "categories");
        await this.categoryRepo.update(id, { image: url });
        return { url };
    }
};
exports.CategoriesService = CategoriesService;
exports.CategoriesService = CategoriesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(category_entity_1.Category)),
    __param(1, (0, typeorm_1.InjectRepository)(product_entity_1.Product)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        file_upload_service_1.FileUploadService])
], CategoriesService);
//# sourceMappingURL=categories.service.js.map