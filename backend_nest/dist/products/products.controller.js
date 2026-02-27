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
exports.ProductsController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const swagger_1 = require("@nestjs/swagger");
const products_service_1 = require("./products.service");
const create_product_dto_1 = require("./dto/create-product.dto");
const update_product_dto_1 = require("./dto/update-product.dto");
let ProductsController = class ProductsController {
    productsService;
    constructor(productsService) {
        this.productsService = productsService;
    }
    parseInStock(value) {
        if (value === undefined)
            return undefined;
        return value.toLowerCase() === "true" || value === "1";
    }
    async findAll(page = 1, limit = 20, search, categoryId, minPrice, maxPrice, inStock) {
        return this.productsService.findAll({
            page,
            limit,
            search,
            categoryId,
            minPrice,
            maxPrice,
            inStock: this.parseInStock(inStock),
        });
    }
    async findAllForAdmin() {
        return this.productsService.findAllForAdmin();
    }
    async findOne(id) {
        return this.productsService.findOne(id);
    }
    async findOneBySlug(slug) {
        return this.productsService.findOneBySlug(slug);
    }
    async findByCategory(categoryId) {
        return this.productsService.findByCategory(categoryId);
    }
    async create(image, dto) {
        const parsedDto = {
            ...dto,
            price: Number(dto.price),
            categoryId: Number(dto.categoryId),
            stock: dto.stock ? Number(dto.stock) : undefined,
        };
        return this.productsService.create(parsedDto, image);
    }
    async update(id, image, dto) {
        const parsedDto = {
            ...dto,
            price: dto.price ? Number(dto.price) : undefined,
            categoryId: dto.categoryId ? Number(dto.categoryId) : undefined,
        };
        return this.productsService.update(id, parsedDto, image);
    }
    async remove(id) {
        return this.productsService.remove(id);
    }
    async updateStock(id, quantity) {
        return this.productsService.updateStock(id, quantity);
    }
};
exports.ProductsController = ProductsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)("page", common_1.ParseIntPipe)),
    __param(1, (0, common_1.Query)("limit", common_1.ParseIntPipe)),
    __param(2, (0, common_1.Query)("search")),
    __param(3, (0, common_1.Query)("categoryId", common_1.ParseIntPipe)),
    __param(4, (0, common_1.Query)("minPrice", common_1.ParseIntPipe)),
    __param(5, (0, common_1.Query)("maxPrice", common_1.ParseIntPipe)),
    __param(6, (0, common_1.Query)("inStock")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, String, Number, Number, Number, String]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)("all"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "findAllForAdmin", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)("slug/:slug"),
    __param(0, (0, common_1.Param)("slug")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "findOneBySlug", null);
__decorate([
    (0, common_1.Get)("category/:categoryId"),
    __param(0, (0, common_1.Param)("categoryId", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "findByCategory", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiConsumes)("multipart/form-data"),
    (0, swagger_1.ApiBody)({
        schema: {
            type: "object",
            properties: {
                title: { type: "string", example: "Игровой ноутбук" },
                price: { type: "number", example: 89990 },
                categoryId: { type: "number", example: 1 },
                image: {
                    type: "string",
                    format: "binary",
                    description: "Изображение товара (JPEG, PNG, WebP)",
                },
            },
        },
    }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)("image")),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true, whitelist: true })),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_product_dto_1.CreateProductDto]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(":id"),
    (0, swagger_1.ApiConsumes)("multipart/form-data"),
    (0, swagger_1.ApiBody)({
        schema: {
            type: "object",
            properties: {
                title: { type: "string", example: "Обновлённый ноутбук" },
                price: { type: "number", example: 79990 },
                image: {
                    type: "string",
                    format: "binary",
                    description: "Новое изображение товара",
                },
            },
        },
    }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)("image")),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true, whitelist: true })),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __param(1, (0, common_1.UploadedFile)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object, update_product_dto_1.UpdateProductDto]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "remove", null);
__decorate([
    (0, common_1.Patch)(":id/stock"),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)("quantity", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "updateStock", null);
exports.ProductsController = ProductsController = __decorate([
    (0, swagger_1.ApiTags)("Products"),
    (0, common_1.Controller)("products"),
    __metadata("design:paramtypes", [products_service_1.ProductsService])
], ProductsController);
//# sourceMappingURL=products.controller.js.map