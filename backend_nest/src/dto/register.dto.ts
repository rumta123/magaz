import {
  IsEmail,
  IsString,
  MinLength,
  IsOptional,
  IsArray,
  IsIn,
  IsPhoneNumber,
} from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class RegisterDto {
  @IsEmail()
  @ApiProperty({ example: "user@example.com" })
  email: string;
  @IsString()
  @ApiProperty({ example: "Иван Иванов" })
  name: string;
  @IsString()
  @MinLength(6)
  @ApiProperty({ example: "password123", minLength: 6 })
  password: string;

  @IsOptional()
  @IsPhoneNumber() // Валидация номера телефона
  @ApiProperty({ example: "+71234567890", required: false })
  phone?: string;

  @IsOptional()
  @IsArray()
  @IsIn(["user", "admin", "manager"], { each: true })
  @ApiProperty({ example: ["user"], required: false })
  roles?: string[];
}
