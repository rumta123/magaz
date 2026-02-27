import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository, Not } from "typeorm";
import { Address, AddressType } from "./entities/address.entity";
import { CreateAddressDto } from "./dto/create-address.dto";
import { UpdateAddressDto } from "./dto/update-address.dto";
import { User } from "../users/users.entity";

@Injectable()
export class AddressesService {
  constructor(
    @InjectRepository(Address)
    private readonly addressRepo: Repository<Address>,
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
  ) {}

  private normalize(value?: string | null): string {
    return (value || "").trim().toLowerCase();
  }

  private sameAddress(a: Address, dto: CreateAddressDto, type: AddressType): boolean {
    return (
      (a.type || AddressType.SHIPPING) === type &&
      this.normalize(a.city) === this.normalize(dto.city) &&
      this.normalize(a.street) === this.normalize(dto.street) &&
      this.normalize(a.building) === this.normalize(dto.building) &&
      this.normalize(a.apartment) === this.normalize(dto.apartment) &&
      this.normalize(a.postalCode) === this.normalize(dto.postalCode) &&
      this.normalize(a.phone) === this.normalize(dto.phone)
    );
  }

  async create(dto: CreateAddressDto): Promise<Address> {
    const user = await this.userRepo.findOneBy({ id: dto.userId });
    if (!user) {
      throw new NotFoundException(`Пользователь с ID ${dto.userId} не найден`);
    }

    const wantedType = dto.type || AddressType.SHIPPING;
    const existingList = await this.addressRepo.find({ where: { userId: dto.userId } });
    const existing = existingList.find((a) => this.sameAddress(a, dto, wantedType));

    if (existing) {
      if (dto.isDefault && !existing.isDefault) {
        await this.addressRepo.update(
          { userId: dto.userId, isDefault: true },
          { isDefault: false },
        );
        await this.addressRepo.update(existing.id, { isDefault: true });
        return this.findOne(existing.id);
      }
      return existing;
    }

    if (dto.isDefault) {
      await this.addressRepo.update(
        { userId: dto.userId, isDefault: true },
        { isDefault: false },
      );
    }

    const address = this.addressRepo.create({
      ...dto,
      type: wantedType,
      isDefault: !!dto.isDefault,
    });

    return this.addressRepo.save(address);
  }

  async findByUser(userId: number): Promise<Address[]> {
    return this.addressRepo.find({
      where: { userId },
      order: { isDefault: "DESC", createdAt: "DESC" },
    });
  }

  async findDefault(userId: number): Promise<Address | null> {
    return this.addressRepo.findOne({
      where: { userId, isDefault: true },
    });
  }

  async findOne(id: number): Promise<Address> {
    const address = await this.addressRepo.findOneBy({ id });
    if (!address) {
      throw new NotFoundException(`Адрес с ID ${id} не найден`);
    }
    return address;
  }

  async update(id: number, dto: UpdateAddressDto): Promise<Address> {
    const address = await this.findOne(id);

    if (dto.isDefault === true) {
      await this.addressRepo.update(
        { userId: address.userId, isDefault: true, id: Not(id) },
        { isDefault: false },
      );
    }

    await this.addressRepo.update(id, dto);
    return this.findOne(id);
  }

  async setAsDefault(id: number): Promise<Address> {
    const address = await this.findOne(id);

    await this.addressRepo.update(
      { userId: address.userId, isDefault: true },
      { isDefault: false },
    );

    await this.addressRepo.update(id, { isDefault: true });
    return this.findOne(id);
  }

  async remove(id: number): Promise<{ message: string }> {
    const address = await this.findOne(id);

    const userAddresses = await this.addressRepo.find({
      where: { userId: address.userId },
    });

    if (userAddresses.length === 1) {
      throw new BadRequestException("Нельзя удалить единственный адрес");
    }

    if (address.isDefault) {
      const other = await this.addressRepo.findOne({
        where: { userId: address.userId, id: Not(id) },
        order: { createdAt: "ASC" },
      });
      if (other) {
        await this.addressRepo.update(other.id, { isDefault: true });
      }
    }

    await this.addressRepo.delete(id);
    return { message: "Адрес успешно удален" };
  }

  async getAddressForOrder(userId: number, addressId?: number): Promise<Address> {
    if (!addressId) {
      const defaultAddress = await this.findDefault(userId);
      if (!defaultAddress) {
        throw new BadRequestException(
          "У пользователя нет адреса по умолчанию. Укажите адрес доставки.",
        );
      }
      return defaultAddress;
    }

    const address = await this.findOne(addressId);
    if (address.userId !== userId) {
      throw new BadRequestException("Адрес не принадлежит пользователю");
    }
    return address;
  }
}
