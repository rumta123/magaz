// src/addresses/dto/update-address.dto.ts
import {
  IsString,
  IsOptional,
  IsBoolean,
  IsEnum,
  MaxLength,
  Matches,
} from "class-validator";
import { AddressType } from "../entities/address.entity";
import { ApiProperty } from "@nestjs/swagger";

export class UpdateAddressDto {
  @IsEnum(AddressType)
  @IsOptional()
  @ApiProperty({ example: AddressType.HOME, required: false })
  type?: AddressType;

  @IsString()
  @MaxLength(100)
  @IsOptional()
  @ApiProperty({ example: "Москва", required: false })
  city?: string;

  @IsString()
  @MaxLength(255)
  @IsOptional()
  @ApiProperty({ example: "ул. Ленина", required: false })
  street?: string;

  @IsString()
  @MaxLength(20)
  @IsOptional()
  @ApiProperty({ example: "10А", required: false })
  building?: string;

  @IsString()
  @MaxLength(20)
  @IsOptional()
  @ApiProperty({ example: "12", required: false })
  apartment?: string;

  @IsString()
  @MaxLength(20)
  @IsOptional()
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
  phone?: string;

  @IsBoolean()
  @IsOptional()
  @ApiProperty({ example: false, required: false })
  isDefault?: boolean;
}
