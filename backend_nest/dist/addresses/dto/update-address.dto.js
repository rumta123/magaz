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
exports.UpdateAddressDto = void 0;
const class_validator_1 = require("class-validator");
const address_entity_1 = require("../entities/address.entity");
const swagger_1 = require("@nestjs/swagger");
class UpdateAddressDto {
    type;
    city;
    street;
    building;
    apartment;
    postalCode;
    phone;
    isDefault;
}
exports.UpdateAddressDto = UpdateAddressDto;
__decorate([
    (0, class_validator_1.IsEnum)(address_entity_1.AddressType),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ example: address_entity_1.AddressType.HOME, required: false }),
    __metadata("design:type", String)
], UpdateAddressDto.prototype, "type", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(100),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ example: "Москва", required: false }),
    __metadata("design:type", String)
], UpdateAddressDto.prototype, "city", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(255),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ example: "ул. Ленина", required: false }),
    __metadata("design:type", String)
], UpdateAddressDto.prototype, "street", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(20),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ example: "10А", required: false }),
    __metadata("design:type", String)
], UpdateAddressDto.prototype, "building", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(20),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ example: "12", required: false }),
    __metadata("design:type", String)
], UpdateAddressDto.prototype, "apartment", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(20),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Matches)(/^\d{6}$/, { message: "Почтовый индекс должен содержать 6 цифр" }),
    (0, swagger_1.ApiProperty)({ example: "123456", required: false }),
    __metadata("design:type", String)
], UpdateAddressDto.prototype, "postalCode", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(20),
    (0, class_validator_1.Matches)(/^(\+7|8)?[\s-]?\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/, {
        message: "Неверный формат телефона. Пример: +7 (999) 123-45-67",
    }),
    __metadata("design:type", String)
], UpdateAddressDto.prototype, "phone", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ example: false, required: false }),
    __metadata("design:type", Boolean)
], UpdateAddressDto.prototype, "isDefault", void 0);
//# sourceMappingURL=update-address.dto.js.map