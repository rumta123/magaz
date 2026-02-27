import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { OrdersController } from "./orders.controller";
import { OrdersService } from "./orders.service";
import { Order } from "./entities/order.entity";
import { OrderItem } from "../order-items/entities/order-item.entity";
import { Product } from "../products/entities/product.entity";
import { User } from "../users/users.entity";
import { Address } from "../addresses/entities/address.entity";
import { Cart } from "../cart/entities/cart.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([Order, OrderItem, Product, User, Address, Cart]),
  ],
  controllers: [OrdersController],
  providers: [OrdersService],
  exports: [OrdersService],
})
export class OrdersModule {}
