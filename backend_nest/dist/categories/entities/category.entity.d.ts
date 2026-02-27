import { Product } from "../../products/entities/product.entity";
export declare class Category {
    id: number;
    title: string;
    image: string;
    createdAt: Date;
    updatedAt: Date;
    parentId: number;
    parent: Category;
    children: Category[];
    sortOrder: number;
    products: Product[];
    slug: string;
    generateSlug(): string;
}
