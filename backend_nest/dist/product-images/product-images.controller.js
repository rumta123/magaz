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
exports.ProductImagesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const product_images_service_1 = require("./product-images.service");
const create_product_image_dto_1 = require("./dto/create-product-image.dto");
const update_product_image_dto_1 = require("./dto/update-product-image.dto");
let ProductImagesController = class ProductImagesController {
    imagesService;
    constructor(imagesService) {
        this.imagesService = imagesService;
    }
    async findByProduct(productId) {
        return this.imagesService.findByProduct(productId);
    }
    async findPrimary(productId) {
        return this.imagesService.findPrimary(productId);
    }
    async findOne(id) {
        return this.imagesService.findOne(id);
    }
    async create(dto) {
        return this.imagesService.create(dto);
    }
    async update(id, dto) {
        return this.imagesService.update(id, dto);
    }
    async remove(id) {
        return this.imagesService.remove(id);
    }
    async setAsPrimary(id) {
        return this.imagesService.setAsPrimary(id);
    }
    async updateSortOrder(productId, imageIds) {
        if (!Array.isArray(imageIds)) {
            throw new common_1.BadRequestException("imageIds должен быть массивом чисел");
        }
        return this.imagesService.updateSortOrder(productId, imageIds);
    }
};
exports.ProductImagesController = ProductImagesController;
__decorate([
    (0, common_1.Get)("product/:productId"),
    __param(0, (0, common_1.Param)("productId", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProductImagesController.prototype, "findByProduct", null);
__decorate([
    (0, common_1.Get)("product/:productId/primary"),
    __param(0, (0, common_1.Param)("productId", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProductImagesController.prototype, "findPrimary", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProductImagesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true, whitelist: true })),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_product_image_dto_1.CreateProductImageDto]),
    __metadata("design:returntype", Promise)
], ProductImagesController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(":id"),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true, whitelist: true })),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_product_image_dto_1.UpdateProductImageDto]),
    __metadata("design:returntype", Promise)
], ProductImagesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProductImagesController.prototype, "remove", null);
__decorate([
    (0, common_1.Patch)(":id/set-primary"),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProductImagesController.prototype, "setAsPrimary", null);
__decorate([
    (0, common_1.Patch)("product/:productId/sort"),
    __param(0, (0, common_1.Param)("productId", common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)("imageIds")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Array]),
    __metadata("design:returntype", Promise)
], ProductImagesController.prototype, "updateSortOrder", null);
exports.ProductImagesController = ProductImagesController = __decorate([
    (0, swagger_1.ApiTags)("Product Images"),
    (0, common_1.Controller)("product-images"),
    __metadata("design:paramtypes", [product_images_service_1.ProductImagesService])
], ProductImagesController);
//# sourceMappingURL=product-images.controller.js.map