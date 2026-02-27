export declare class CreateProductDto {
    title: string;
    slug?: string;
    price: number;
    discontPrice?: number;
    description?: string;
    stock?: number;
    isActive?: boolean;
    image?: string;
    categoryId: number;
}
