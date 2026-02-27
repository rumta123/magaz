import { Repository } from "typeorm";
import { Product } from "./entities/product.entity";
import { Category } from "../categories/entities/category.entity";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
export declare class ProductsService {
    private readonly productRepo;
    private readonly categoryRepo;
    private uploadDir;
    constructor(productRepo: Repository<Product>, categoryRepo: Repository<Category>);
    private generateSlug;
    private pickAndNormalizeSlug;
    private makeUniqueSlug;
    private generateFilename;
    private saveFile;
    private deleteFile;
    findAllForAdmin(): Promise<Product[]>;
    create(dto: CreateProductDto, image?: Express.Multer.File): Promise<Product>;
    findAll(query?: {
        page?: number;
        limit?: number;
        search?: string;
        categoryId?: number;
        minPrice?: number;
        maxPrice?: number;
        inStock?: boolean;
    }): Promise<{
        products: Product[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    }>;
    findOne(id: number): Promise<Product>;
    findOneBySlug(slug: string): Promise<Product>;
    update(id: number, dto: UpdateProductDto, image?: Express.Multer.File): Promise<Product>;
    remove(id: number): Promise<{
        message: string;
    }>;
    findByCategory(categoryId: number): Promise<Product[]>;
    updateStock(productId: number, quantity: number): Promise<Product>;
}
