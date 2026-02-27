import {
  IsArray,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  Min,
  ValidateNested,
  Matches,
} from "class-validator";
import { Type } from "class-transformer";
import { PaymentMethod } from "../entities/order.entity";
import { AddressType } from "../../addresses/entities/address.entity";

export class CheckoutItemDto {
  @IsInt()
  @Min(1)
  @IsNotEmpty()
  @Type(() => Number)
  productId: number;

  @IsInt()
  @Min(1)
  @IsNotEmpty()
  @Type(() => Number)
  quantity: number;
}

export class CheckoutAddressDto {
  @IsOptional()
  @IsEnum(AddressType)
  type?: AddressType;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  city: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  street: string;

  @IsOptional()
  @IsString()
  @MaxLength(20)
  building?: string;

  @IsOptional()
  @IsString()
  @MaxLength(20)
  apartment?: string;

  @IsOptional()
  @IsString()
  @MaxLength(20)
  @Matches(/^\d{6}$/)
  postalCode?: string;

  @IsOptional()
  @IsString()
  @MaxLength(20)
  phone?: string;

  @IsOptional()
  isDefault?: boolean;
}

export class CheckoutOrderDto {
  @IsInt()
  @Min(1)
  @IsNotEmpty()
  @Type(() => Number)
  userId: number;

  @IsOptional()
  @IsInt()
  @Min(1)
  @Type(() => Number)
  addressId?: number;

  @IsOptional()
  @ValidateNested()
  @Type(() => CheckoutAddressDto)
  address?: CheckoutAddressDto;

  @IsEnum(PaymentMethod)
  @IsOptional()
  paymentMethod?: PaymentMethod;

  @IsOptional()
  @IsString()
  @MaxLength(1000)
  notes?: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CheckoutItemDto)
  items: CheckoutItemDto[];
}
