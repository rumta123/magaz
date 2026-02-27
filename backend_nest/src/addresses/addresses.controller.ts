// src/addresses/addresses.controller.ts
import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
  ParseIntPipe,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import { AddressesService } from "./addresses.service";
import { CreateAddressDto } from "./dto/create-address.dto";
import { UpdateAddressDto } from "./dto/update-address.dto";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("Addresses")
@Controller("addresses")
export class AddressesController {
  constructor(private readonly addressesService: AddressesService) {}

  // 🔹 PUBLIC: Получить все адреса пользователя
  @Get("user/:userId")
  async findByUser(@Param("userId", ParseIntPipe) userId: number) {
    return this.addressesService.findByUser(userId);
  }

  // 🔹 PUBLIC: Получить адрес по умолчанию
  @Get("user/:userId/default")
  async findDefault(@Param("userId", ParseIntPipe) userId: number) {
    return this.addressesService.findDefault(userId);
  }

  // 🔹 PUBLIC: Получить адрес по ID
  @Get(":id")
  async findOne(@Param("id", ParseIntPipe) id: number) {
    return this.addressesService.findOne(id);
  }

  // 🔹 PUBLIC: Создать адрес
  @Post()
  @UsePipes(new ValidationPipe({ transform: true, whitelist: true }))
  async create(@Body() dto: CreateAddressDto) {
    return this.addressesService.create(dto);
  }

  // 🔹 PUBLIC: Обновить адрес
  @Patch(":id")
  @UsePipes(new ValidationPipe({ transform: true, whitelist: true }))
  async update(
    @Param("id", ParseIntPipe) id: number,
    @Body() dto: UpdateAddressDto,
  ) {
    return this.addressesService.update(id, dto);
  }

  // 🔹 PUBLIC: Установить адрес как адрес по умолчанию
  @Patch(":id/set-default")
  async setAsDefault(@Param("id", ParseIntPipe) id: number) {
    return this.addressesService.setAsDefault(id);
  }

  // 🔹 PUBLIC: Удалить адрес
  @Delete(":id")
  async remove(@Param("id", ParseIntPipe) id: number) {
    return this.addressesService.remove(id);
  }
}
