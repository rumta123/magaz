import { AddressType } from "../entities/address.entity";
export declare class UpdateAddressDto {
    type?: AddressType;
    city?: string;
    street?: string;
    building?: string;
    apartment?: string;
    postalCode?: string;
    phone?: string;
    isDefault?: boolean;
}
