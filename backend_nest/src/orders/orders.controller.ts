import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  ParseIntPipe,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { OrdersService } from "./orders.service";
import { CheckoutOrderDto } from "./dto/checkout-order.dto";
import { JwtAuthGuard } from "../auth/jwt.guard";
import { RolesGuard } from "../auth/roles.guard";
import { Roles } from "../auth/roles.decorator";
import { OrderStatus } from "./entities/order.entity";

@ApiTags("Orders")
@Controller("orders")
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles("admin")
  async findAllForAdmin() {
    return this.ordersService.findAllForAdmin();
  }

  @Get("user/:userId")
  async findByUser(@Param("userId", ParseIntPipe) userId: number) {
    return this.ordersService.findByUser(userId);
  }

  @Get(":id")
  async findOne(@Param("id", ParseIntPipe) id: number) {
    return this.ordersService.findOneForAdmin(id);
  }

  @Post("checkout")
  @UsePipes(new ValidationPipe({ transform: true, whitelist: true }))
  async checkout(@Body() dto: CheckoutOrderDto) {
    return this.ordersService.checkout(dto);
  }

  @Patch(":id/confirm")
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles("admin")
  async confirm(@Param("id", ParseIntPipe) id: number) {
    return this.ordersService.updateStatusByAdmin(id, OrderStatus.PROCESSING);
  }

  @Patch(":id/cancel")
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles("admin")
  async cancel(@Param("id", ParseIntPipe) id: number) {
    return this.ordersService.updateStatusByAdmin(id, OrderStatus.CANCELLED);
  }
}
