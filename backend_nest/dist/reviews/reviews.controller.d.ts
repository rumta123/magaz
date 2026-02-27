import { ReviewsService } from "./reviews.service";
import { CreateReviewDto } from "./dto/create-review.dto";
import { UpdateReviewDto } from "./dto/update-review.dto";
export declare class ReviewsController {
    private readonly reviewsService;
    constructor(reviewsService: ReviewsService);
    findByProduct(productId: number, approved?: string): Promise<import("./entities/review.entity").Review[]>;
    canReview(productId: number, req: any): Promise<{
        canReview: boolean;
    }>;
    getProductRating(productId: number): Promise<{
        average: number;
        count: number;
        distribution: Record<number, number>;
    }>;
    findOne(id: number): Promise<import("./entities/review.entity").Review>;
    create(dto: CreateReviewDto, req: any): Promise<import("./entities/review.entity").Review>;
    update(id: number, dto: UpdateReviewDto, req: any): Promise<import("./entities/review.entity").Review>;
    remove(id: number, req: any): Promise<{
        message: string;
    }>;
    approve(id: number): Promise<import("./entities/review.entity").Review>;
    reject(id: number): Promise<import("./entities/review.entity").Review>;
    getPendingReviews(): Promise<import("./entities/review.entity").Review[]>;
}
