import { Repository } from "typeorm";
import { Address } from "./entities/address.entity";
import { CreateAddressDto } from "./dto/create-address.dto";
import { UpdateAddressDto } from "./dto/update-address.dto";
import { User } from "../users/users.entity";
export declare class AddressesService {
    private readonly addressRepo;
    private readonly userRepo;
    constructor(addressRepo: Repository<Address>, userRepo: Repository<User>);
    private normalize;
    private sameAddress;
    create(dto: CreateAddressDto): Promise<Address>;
    findByUser(userId: number): Promise<Address[]>;
    findDefault(userId: number): Promise<Address | null>;
    findOne(id: number): Promise<Address>;
    update(id: number, dto: UpdateAddressDto): Promise<Address>;
    setAsDefault(id: number): Promise<Address>;
    remove(id: number): Promise<{
        message: string;
    }>;
    getAddressForOrder(userId: number, addressId?: number): Promise<Address>;
}
