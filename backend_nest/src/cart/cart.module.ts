// src/cart/cart.module.ts
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CartController } from "./cart.controller";
import { CartService } from "./cart.service";
import { Cart } from "./entities/cart.entity";
import { Product } from "../products/entities/product.entity";
import { User } from "../users/users.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Cart, Product, User])],
  controllers: [CartController],
  providers: [CartService],
  exports: [CartService],
})
export class CartModule {}
