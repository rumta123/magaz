// src/order-items/order-items.module.ts
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { OrderItemsController } from "./order-items.controller";
import { OrderItemsService } from "./order-items.service";
import { OrderItem } from "./entities/order-item.entity";
import { Order } from "../orders/entities/order.entity";
import { Product } from "../products/entities/product.entity";

@Module({
  imports: [TypeOrmModule.forFeature([OrderItem, Order, Product])],
  controllers: [OrderItemsController],
  providers: [OrderItemsService],
  exports: [OrderItemsService],
})
export class OrderItemsModule {}
