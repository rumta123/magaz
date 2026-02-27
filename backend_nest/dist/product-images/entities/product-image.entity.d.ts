import { Product } from "../../products/entities/product.entity";
export declare class ProductImage {
    id: number;
    productId: number;
    imageUrl: string;
    altText: string | null;
    isPrimary: boolean;
    sortOrder: number;
    createdAt: Date;
    product: Product;
}
