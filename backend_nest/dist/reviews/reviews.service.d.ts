import { Repository } from "typeorm";
import { Review } from "./entities/review.entity";
import { Product } from "../products/entities/product.entity";
import { User } from "../users/users.entity";
import { CreateReviewDto } from "./dto/create-review.dto";
import { UpdateReviewDto } from "./dto/update-review.dto";
import { OrderItem } from "../order-items/entities/order-item.entity";
import { Order } from "../orders/entities/order.entity";
export declare class ReviewsService {
    private readonly reviewRepo;
    private readonly productRepo;
    private readonly userRepo;
    private readonly orderItemRepo;
    private readonly orderRepo;
    constructor(reviewRepo: Repository<Review>, productRepo: Repository<Product>, userRepo: Repository<User>, orderItemRepo: Repository<OrderItem>, orderRepo: Repository<Order>);
    canUserReviewProduct(userId: number, productId: number): Promise<boolean>;
    create(dto: CreateReviewDto): Promise<Review>;
    findByProduct(productId: number, onlyApproved?: boolean): Promise<Review[]>;
    findOne(id: number): Promise<Review>;
    findByUser(userId: number): Promise<Review[]>;
    update(id: number, dto: UpdateReviewDto, userId?: number): Promise<Review>;
    approve(id: number): Promise<Review>;
    reject(id: number): Promise<Review>;
    remove(id: number, userId?: number): Promise<{
        message: string;
    }>;
    getProductRating(productId: number): Promise<{
        average: number;
        count: number;
        distribution: Record<number, number>;
    }>;
    getPendingReviews(): Promise<Review[]>;
}
