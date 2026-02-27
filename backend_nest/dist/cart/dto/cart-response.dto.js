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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartResponseDto = exports.ProductPreviewDto = void 0;
const class_transformer_1 = require("class-transformer");
const swagger_1 = require("@nestjs/swagger");
class ProductPreviewDto {
    id;
    title;
    price;
    discontPrice;
    image;
    stock;
}
exports.ProductPreviewDto = ProductPreviewDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 42 }),
    __metadata("design:type", Number)
], ProductPreviewDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "Товар" }),
    __metadata("design:type", String)
], ProductPreviewDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 199.99 }),
    __metadata("design:type", Number)
], ProductPreviewDto.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 149.99, nullable: true }),
    __metadata("design:type", Object)
], ProductPreviewDto.prototype, "discontPrice", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "https://example.com/image.jpg", nullable: true }),
    __metadata("design:type", Object)
], ProductPreviewDto.prototype, "image", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 10 }),
    __metadata("design:type", Number)
], ProductPreviewDto.prototype, "stock", void 0);
class CartResponseDto {
    id;
    userId;
    productId;
    quantity;
    createdAt;
    updatedAt;
    product;
    totalPrice;
}
exports.CartResponseDto = CartResponseDto;
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ example: 1, description: "ID записи корзины" }),
    __metadata("design:type", Number)
], CartResponseDto.prototype, "id", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ example: 5, description: "ID пользователя" }),
    __metadata("design:type", Number)
], CartResponseDto.prototype, "userId", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ example: 2, description: "ID товара" }),
    __metadata("design:type", Number)
], CartResponseDto.prototype, "productId", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ example: 3, description: "Количество товара" }),
    __metadata("design:type", Number)
], CartResponseDto.prototype, "quantity", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ type: String, description: "Дата создания" }),
    __metadata("design:type", Date)
], CartResponseDto.prototype, "createdAt", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ type: String, description: "Дата обновления" }),
    __metadata("design:type", Date)
], CartResponseDto.prototype, "updatedAt", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({
        required: false,
        description: "Данные товара",
        type: () => ProductPreviewDto,
        nullable: true,
    }),
    __metadata("design:type", ProductPreviewDto)
], CartResponseDto.prototype, "product", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_transformer_1.Transform)(({ obj }) => {
        const price = obj.product?.discontPrice || obj.product?.price || 0;
        return price * obj.quantity;
    }),
    (0, swagger_1.ApiProperty)({ example: 599.97, description: "Общая стоимость позиции" }),
    __metadata("design:type", Number)
], CartResponseDto.prototype, "totalPrice", void 0);
//# sourceMappingURL=cart-response.dto.js.map