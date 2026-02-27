import { CartService } from "./cart.service";
import { CreateCartDto } from "./dto/create-cart.dto";
import { UpdateCartDto } from "./dto/update-cart.dto";
import { MergeCartDto } from "./dto/merge-cart.dto";
export declare class CartController {
    private readonly cartService;
    constructor(cartService: CartService);
    getUserCart(userId: number): Promise<{
        items: import("./entities/cart.entity").Cart[];
        totalItems: number;
        totalPrice: number;
    }>;
    findOne(id: number): Promise<import("./entities/cart.entity").Cart>;
    addToCart(dto: CreateCartDto): Promise<import("./entities/cart.entity").Cart>;
    syncCart(mergeDto: MergeCartDto): Promise<{
        items: import("./entities/cart.entity").Cart[];
        totalItems: number;
        totalPrice: number;
    }>;
    updateQuantity(id: number, dto: UpdateCartDto): Promise<import("./entities/cart.entity").Cart>;
    incrementQuantity(id: number): Promise<import("./entities/cart.entity").Cart>;
    decrementQuantity(id: number): Promise<import("./entities/cart.entity").Cart>;
    removeFromCart(id: number): Promise<{
        message: string;
    }>;
    clearCart(userId: number): Promise<{
        message: string;
    }>;
}
