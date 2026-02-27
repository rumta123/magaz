export declare class MergeCartItemDto {
    userId?: number;
    productId: number;
    quantity: number;
}
export declare class MergeCartDto {
    userId: number;
    items?: MergeCartItemDto[];
}
