import { Repository } from "typeorm";
import { Cart } from "./entities/cart.entity";
import { Product } from "../products/entities/product.entity";
import { CreateCartDto } from "./dto/create-cart.dto";
import { UpdateCartDto } from "./dto/update-cart.dto";
import { User } from "src/users/users.entity";
import { MergeCartDto } from "./dto/merge-cart.dto";
export declare class CartService {
    private readonly cartRepo;
    private readonly productRepo;
    private readonly userRepo;
    constructor(cartRepo: Repository<Cart>, productRepo: Repository<Product>, userRepo: Repository<User>);
    addToCart(dto: CreateCartDto): Promise<Cart>;
    getUserCart(userId: number): Promise<{
        items: Cart[];
        totalItems: number;
        totalPrice: number;
    }>;
    findOne(id: number): Promise<Cart>;
    updateQuantity(id: number, dto: UpdateCartDto): Promise<Cart>;
    removeFromCart(id: number): Promise<{
        message: string;
    }>;
    clearCart(userId: number): Promise<{
        message: string;
    }>;
    incrementQuantity(id: number): Promise<Cart>;
    mergeCart(userId: number, mergeDto: MergeCartDto): Promise<{
        items: Cart[];
        totalItems: number;
        totalPrice: number;
    }>;
    decrementQuantity(id: number): Promise<Cart>;
}
