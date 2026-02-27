// src/cart/cart.controller.ts
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
  HttpCode,
  HttpStatus,
} from "@nestjs/common";
import { CartService } from "./cart.service";
import { CreateCartDto } from "./dto/create-cart.dto";
import { UpdateCartDto } from "./dto/update-cart.dto";
import { MergeCartDto } from "./dto/merge-cart.dto"; // 🔹 ИМПОРТ НОВОГО DTO
import {
  ApiTags,
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
} from "@nestjs/swagger";

@Controller("cart")
@ApiTags("Cart")
@ApiBearerAuth("JWT-auth")
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Get("user/:userId")
  @ApiOperation({ summary: "Get user's cart" })
  @ApiResponse({ status: 200, description: "Cart items array" })
  async getUserCart(@Param("userId", ParseIntPipe) userId: number) {
    return this.cartService.getUserCart(userId);
  }

  @Get(":id")
  async findOne(@Param("id", ParseIntPipe) id: number) {
    return this.cartService.findOne(id);
  }

  @Post()
  @UsePipes(new ValidationPipe({ transform: true, whitelist: true }))
  @ApiOperation({ summary: "Add item to cart" })
  async addToCart(@Body() dto: CreateCartDto) {
    return this.cartService.addToCart(dto);
  }

  // 🔹 🔥 НОВЫЙ: Синхронизация корзины при логине (MERGE)
  @Post("sync")
  @UsePipes(new ValidationPipe({ transform: true, whitelist: true }))
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: "Sync full cart snapshot for user" })
  @ApiResponse({ status: 200, description: "Synced cart items" })
  async syncCart(@Body() mergeDto: MergeCartDto) {
    return this.cartService.mergeCart(mergeDto.userId, mergeDto);
  }

  @Patch(":id")
  @UsePipes(new ValidationPipe({ transform: true, whitelist: true }))
  async updateQuantity(
    @Param("id", ParseIntPipe) id: number,
    @Body() dto: UpdateCartDto,
  ) {
    return this.cartService.updateQuantity(id, dto);
  }

  @Patch(":id/increment")
  async incrementQuantity(@Param("id", ParseIntPipe) id: number) {
    return this.cartService.incrementQuantity(id);
  }

  @Patch(":id/decrement")
  async decrementQuantity(@Param("id", ParseIntPipe) id: number) {
    return this.cartService.decrementQuantity(id);
  }

  @Delete(":id")
  @HttpCode(HttpStatus.OK)
  async removeFromCart(@Param("id", ParseIntPipe) id: number) {
    return this.cartService.removeFromCart(id);
  }

  @Delete("user/:userId/clear")
  @HttpCode(HttpStatus.OK)
  async clearCart(@Param("userId", ParseIntPipe) userId: number) {
    return this.cartService.clearCart(userId);
  }
}
