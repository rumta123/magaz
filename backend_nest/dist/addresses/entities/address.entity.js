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
exports.Address = exports.AddressType = void 0;
const typeorm_1 = require("typeorm");
const users_entity_1 = require("../../users/users.entity");
const order_entity_1 = require("../../orders/entities/order.entity");
var AddressType;
(function (AddressType) {
    AddressType["SHIPPING"] = "shipping";
    AddressType["BILLING"] = "billing";
    AddressType["HOME"] = "HOME";
})(AddressType || (exports.AddressType = AddressType = {}));
let Address = class Address {
    id;
    userId;
    type;
    city;
    street;
    building;
    apartment;
    postalCode;
    phone;
    isDefault;
    createdAt;
    user;
    orders;
    get fullAddress() {
        const parts = [
            this.city,
            this.street,
            this.building && `д. ${this.building}`,
            this.apartment && `кв. ${this.apartment}`,
        ].filter(Boolean);
        return parts.join(", ");
    }
};
exports.Address = Address;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int" }),
    __metadata("design:type", Number)
], Address.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "user_id", type: "int" }),
    __metadata("design:type", Number)
], Address.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: AddressType,
        default: AddressType.SHIPPING,
    }),
    __metadata("design:type", String)
], Address.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 100 }),
    __metadata("design:type", String)
], Address.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 255 }),
    __metadata("design:type", String)
], Address.prototype, "street", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "building", type: "varchar", length: 20, nullable: true }),
    __metadata("design:type", Object)
], Address.prototype, "building", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "apartment", type: "varchar", length: 20, nullable: true }),
    __metadata("design:type", Object)
], Address.prototype, "apartment", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "postal_code", type: "varchar", length: 20, nullable: true }),
    __metadata("design:type", Object)
], Address.prototype, "postalCode", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 20, nullable: true }),
    __metadata("design:type", Object)
], Address.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "is_default", type: "boolean", default: false }),
    __metadata("design:type", Boolean)
], Address.prototype, "isDefault", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: "timestamp", name: "created_at" }),
    __metadata("design:type", Date)
], Address.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => users_entity_1.User, (user) => user.addresses, { onDelete: "CASCADE" }),
    (0, typeorm_1.JoinColumn)({ name: "user_id" }),
    __metadata("design:type", users_entity_1.User)
], Address.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => order_entity_1.Order, (order) => order.address),
    __metadata("design:type", Array)
], Address.prototype, "orders", void 0);
exports.Address = Address = __decorate([
    (0, typeorm_1.Entity)("addresses")
], Address);
//# sourceMappingURL=address.entity.js.map