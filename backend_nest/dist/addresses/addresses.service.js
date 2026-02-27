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
exports.AddressesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const address_entity_1 = require("./entities/address.entity");
const users_entity_1 = require("../users/users.entity");
let AddressesService = class AddressesService {
    addressRepo;
    userRepo;
    constructor(addressRepo, userRepo) {
        this.addressRepo = addressRepo;
        this.userRepo = userRepo;
    }
    normalize(value) {
        return (value || "").trim().toLowerCase();
    }
    sameAddress(a, dto, type) {
        return ((a.type || address_entity_1.AddressType.SHIPPING) === type &&
            this.normalize(a.city) === this.normalize(dto.city) &&
            this.normalize(a.street) === this.normalize(dto.street) &&
            this.normalize(a.building) === this.normalize(dto.building) &&
            this.normalize(a.apartment) === this.normalize(dto.apartment) &&
            this.normalize(a.postalCode) === this.normalize(dto.postalCode) &&
            this.normalize(a.phone) === this.normalize(dto.phone));
    }
    async create(dto) {
        const user = await this.userRepo.findOneBy({ id: dto.userId });
        if (!user) {
            throw new common_1.NotFoundException(`Пользователь с ID ${dto.userId} не найден`);
        }
        const wantedType = dto.type || address_entity_1.AddressType.SHIPPING;
        const existingList = await this.addressRepo.find({ where: { userId: dto.userId } });
        const existing = existingList.find((a) => this.sameAddress(a, dto, wantedType));
        if (existing) {
            if (dto.isDefault && !existing.isDefault) {
                await this.addressRepo.update({ userId: dto.userId, isDefault: true }, { isDefault: false });
                await this.addressRepo.update(existing.id, { isDefault: true });
                return this.findOne(existing.id);
            }
            return existing;
        }
        if (dto.isDefault) {
            await this.addressRepo.update({ userId: dto.userId, isDefault: true }, { isDefault: false });
        }
        const address = this.addressRepo.create({
            ...dto,
            type: wantedType,
            isDefault: !!dto.isDefault,
        });
        return this.addressRepo.save(address);
    }
    async findByUser(userId) {
        return this.addressRepo.find({
            where: { userId },
            order: { isDefault: "DESC", createdAt: "DESC" },
        });
    }
    async findDefault(userId) {
        return this.addressRepo.findOne({
            where: { userId, isDefault: true },
        });
    }
    async findOne(id) {
        const address = await this.addressRepo.findOneBy({ id });
        if (!address) {
            throw new common_1.NotFoundException(`Адрес с ID ${id} не найден`);
        }
        return address;
    }
    async update(id, dto) {
        const address = await this.findOne(id);
        if (dto.isDefault === true) {
            await this.addressRepo.update({ userId: address.userId, isDefault: true, id: (0, typeorm_2.Not)(id) }, { isDefault: false });
        }
        await this.addressRepo.update(id, dto);
        return this.findOne(id);
    }
    async setAsDefault(id) {
        const address = await this.findOne(id);
        await this.addressRepo.update({ userId: address.userId, isDefault: true }, { isDefault: false });
        await this.addressRepo.update(id, { isDefault: true });
        return this.findOne(id);
    }
    async remove(id) {
        const address = await this.findOne(id);
        const userAddresses = await this.addressRepo.find({
            where: { userId: address.userId },
        });
        if (userAddresses.length === 1) {
            throw new common_1.BadRequestException("Нельзя удалить единственный адрес");
        }
        if (address.isDefault) {
            const other = await this.addressRepo.findOne({
                where: { userId: address.userId, id: (0, typeorm_2.Not)(id) },
                order: { createdAt: "ASC" },
            });
            if (other) {
                await this.addressRepo.update(other.id, { isDefault: true });
            }
        }
        await this.addressRepo.delete(id);
        return { message: "Адрес успешно удален" };
    }
    async getAddressForOrder(userId, addressId) {
        if (!addressId) {
            const defaultAddress = await this.findDefault(userId);
            if (!defaultAddress) {
                throw new common_1.BadRequestException("У пользователя нет адреса по умолчанию. Укажите адрес доставки.");
            }
            return defaultAddress;
        }
        const address = await this.findOne(addressId);
        if (address.userId !== userId) {
            throw new common_1.BadRequestException("Адрес не принадлежит пользователю");
        }
        return address;
    }
};
exports.AddressesService = AddressesService;
exports.AddressesService = AddressesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(address_entity_1.Address)),
    __param(1, (0, typeorm_1.InjectRepository)(users_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], AddressesService);
//# sourceMappingURL=addresses.service.js.map