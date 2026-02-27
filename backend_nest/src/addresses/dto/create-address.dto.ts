// src/addresses/dto/create-address.dto.ts
import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsBoolean,
  IsEnum,
  MaxLength,
  IsInt,
  Min,
  Matches,
} from "class-validator";
import { AddressType } from "../entities/address.entity";
import { ApiProperty } from "@nestjs/swagger";

export class CreateAddressDto {
  @IsInt()
  @Min(1)
  @IsNotEmpty()
  @ApiProperty({ example: 1 })
  userId: number;

  @IsEnum(AddressType)
  @IsOptional()
  @ApiProperty({ example: AddressType.HOME, required: false })
  type?: AddressType;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  @ApiProperty({ example: "Москва" })
  city: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  @ApiProperty({ example: "ул. Ленина" })
  street: string;

  @IsString()
  @IsOptional()
  @MaxLength(20)
  @ApiProperty({ example: "10А", required: false })
  building?: string;

  @IsString()
  @IsOptional()
  @MaxLength(20)
  @ApiProperty({ example: "12", required: false })
  apartment?: string;

  @IsString()
  @IsOptional()
  @MaxLength(20)
  @Matches(/^\d{6}$/, { message: "Почтовый индекс должен содержать 6 цифр" })
  @ApiProperty({ example: "123456", required: false })
  postalCode?: string;

  // ✅ ИСПРАВЛЕНО: убраны лишние экранирования внутри []
  @IsString()
  @IsOptional()
  @MaxLength(20)
  @Matches(/^(\+7|8)?[\s-]?\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/, {
    message: "Неверный формат телефона. Пример: +7 (999) 123-45-67",
  })
  @ApiProperty({ example: "+7 (999) 123-45-67", required: false })
  phone?: string;

  @IsBoolean()
  @IsOptional()
  @ApiProperty({ example: false, required: false })
  isDefault?: boolean;
}
