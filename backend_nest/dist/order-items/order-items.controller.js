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
exports.OrderItemsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const order_items_service_1 = require("./order-items.service");
const create_order_item_dto_1 = require("./dto/create-order-item.dto");
const update_order_item_dto_1 = require("./dto/update-order-item.dto");
let OrderItemsController = class OrderItemsController {
    orderItemsService;
    constructor(orderItemsService) {
        this.orderItemsService = orderItemsService;
    }
    async findByOrder(orderId) {
        return this.orderItemsService.findByOrder(orderId);
    }
    async findOne(id) {
        return this.orderItemsService.findOne(id);
    }
    async create(dto) {
        return this.orderItemsService.create(dto);
    }
    async update(id, dto) {
        return this.orderItemsService.update(id, dto);
    }
    async remove(id) {
        return this.orderItemsService.remove(id);
    }
    async updateQuantity(id, quantity) {
        return this.orderItemsService.updateQuantity(id, quantity);
    }
    async incrementQuantity(id) {
        return this.orderItemsService.incrementQuantity(id);
    }
    async decrementQuantity(id) {
        return this.orderItemsService.decrementQuantity(id);
    }
};
exports.OrderItemsController = OrderItemsController;
__decorate([
    (0, common_1.Get)("order/:orderId"),
    __param(0, (0, common_1.Param)("orderId", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], OrderItemsController.prototype, "findByOrder", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], OrderItemsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true, whitelist: true })),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_order_item_dto_1.CreateOrderItemDto]),
    __metadata("design:returntype", Promise)
], OrderItemsController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(":id"),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true, whitelist: true })),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_order_item_dto_1.UpdateOrderItemDto]),
    __metadata("design:returntype", Promise)
], OrderItemsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], OrderItemsController.prototype, "remove", null);
__decorate([
    (0, common_1.Patch)(":id/quantity"),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)("quantity", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], OrderItemsController.prototype, "updateQuantity", null);
__decorate([
    (0, common_1.Patch)(":id/increment"),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], OrderItemsController.prototype, "incrementQuantity", null);
__decorate([
    (0, common_1.Patch)(":id/decrement"),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], OrderItemsController.prototype, "decrementQuantity", null);
exports.OrderItemsController = OrderItemsController = __decorate([
    (0, swagger_1.ApiTags)("Order Items"),
    (0, common_1.Controller)("order-items"),
    __metadata("design:paramtypes", [order_items_service_1.OrderItemsService])
], OrderItemsController);
//# sourceMappingURL=order-items.controller.js.map