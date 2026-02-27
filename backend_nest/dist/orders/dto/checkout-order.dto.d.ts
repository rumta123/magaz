import { PaymentMethod } from "../entities/order.entity";
import { AddressType } from "../../addresses/entities/address.entity";
export declare class CheckoutItemDto {
    productId: number;
    quantity: number;
}
export declare class CheckoutAddressDto {
    type?: AddressType;
    city: string;
    street: string;
    building?: string;
    apartment?: string;
    postalCode?: string;
    phone?: string;
    isDefault?: boolean;
}
export declare class CheckoutOrderDto {
    userId: number;
    addressId?: number;
    address?: CheckoutAddressDto;
    paymentMethod?: PaymentMethod;
    notes?: string;
    items: CheckoutItemDto[];
}
