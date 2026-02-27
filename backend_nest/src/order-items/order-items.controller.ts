// src/order-items/order-items.controller.ts
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
import { ApiTags } from "@nestjs/swagger";
import { OrderItemsService } from "./order-items.service";
import { CreateOrderItemDto } from "./dto/create-order-item.dto";
import { UpdateOrderItemDto } from "./dto/update-order-item.dto";

@ApiTags("Order Items")
@Controller("order-items")
export class OrderItemsController {
  constructor(private readonly orderItemsService: OrderItemsService) {}

  // 🔹 PUBLIC: Получить все позиции заказа
  @Get("order/:orderId")
  async findByOrder(@Param("orderId", ParseIntPipe) orderId: number) {
    return this.orderItemsService.findByOrder(orderId);
  }

  // 🔹 PUBLIC: Получить позицию по ID
  @Get(":id")
  async findOne(@Param("id", ParseIntPipe) id: number) {
    return this.orderItemsService.findOne(id);
  }

  // 🔹 ADMIN: Создать позицию заказа
  @Post()
  @UsePipes(new ValidationPipe({ transform: true, whitelist: true }))
  async create(@Body() dto: CreateOrderItemDto) {
    return this.orderItemsService.create(dto);
  }

  // 🔹 ADMIN: Обновить позицию заказа
  @Patch(":id")
  @UsePipes(new ValidationPipe({ transform: true, whitelist: true }))
  async update(
    @Param("id", ParseIntPipe) id: number,
    @Body() dto: UpdateOrderItemDto,
  ) {
    return this.orderItemsService.update(id, dto);
  }

  // 🔹 ADMIN: Удалить позицию заказа
  @Delete(":id")
  async remove(@Param("id", ParseIntPipe) id: number) {
    return this.orderItemsService.remove(id);
  }

  // 🔹 ADMIN: Обновить количество
  @Patch(":id/quantity")
  async updateQuantity(
    @Param("id", ParseIntPipe) id: number,
    @Body("quantity", ParseIntPipe) quantity: number,
  ) {
    return this.orderItemsService.updateQuantity(id, quantity);
  }

  // 🔹 ADMIN: Увеличить количество на 1
  @Patch(":id/increment")
  async incrementQuantity(@Param("id", ParseIntPipe) id: number) {
    return this.orderItemsService.incrementQuantity(id);
  }

  // 🔹 ADMIN: Уменьшить количество на 1
  @Patch(":id/decrement")
  async decrementQuantity(@Param("id", ParseIntPipe) id: number) {
    return this.orderItemsService.decrementQuantity(id);
  }
}
