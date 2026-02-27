export declare class ProductResponseDto {
    id: number;
    title: string;
    slug: string;
    price: number;
    discontPrice: number | null;
    description: string | null;
    stock: number;
    isActive: boolean;
    image: string | null;
    categoryId: number;
    createdAt: Date;
    updatedAt: Date;
    category?: {
        id: number;
        title: string;
        image: string | null;
    };
}
