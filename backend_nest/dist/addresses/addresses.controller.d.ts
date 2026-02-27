import { AddressesService } from "./addresses.service";
import { CreateAddressDto } from "./dto/create-address.dto";
import { UpdateAddressDto } from "./dto/update-address.dto";
export declare class AddressesController {
    private readonly addressesService;
    constructor(addressesService: AddressesService);
    findByUser(userId: number): Promise<import("./entities/address.entity").Address[]>;
    findDefault(userId: number): Promise<import("./entities/address.entity").Address | null>;
    findOne(id: number): Promise<import("./entities/address.entity").Address>;
    create(dto: CreateAddressDto): Promise<import("./entities/address.entity").Address>;
    update(id: number, dto: UpdateAddressDto): Promise<import("./entities/address.entity").Address>;
    setAsDefault(id: number): Promise<import("./entities/address.entity").Address>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
