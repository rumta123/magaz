export declare class ReviewResponseDto {
    id: number;
    productId: number;
    userId: number;
    rating: number;
    comment: string | null;
    isApproved: boolean;
    createdAt: Date;
    user?: {
        id: number;
        name: string;
    };
    product?: {
        id: number;
        title: string;
    };
}
