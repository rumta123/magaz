export declare class ProductPreviewDto {
    id: number;
    title: string;
    price: number;
    discontPrice: number | null;
    image: string | null;
    stock: number;
}
export declare class CartResponseDto {
    id: number;
    userId: number;
    productId: number;
    quantity: number;
    createdAt: Date;
    updatedAt: Date;
    product?: ProductPreviewDto;
    totalPrice: number;
}
