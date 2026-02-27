import { Repository } from "typeorm";
import { Category } from "./entities/category.entity";
import { Product } from "../products/entities/product.entity";
import { FileUploadService } from "../common/file-upload/file-upload.service";
import { CreateCategoryDto } from "./dto/create-category.dto";
import { UpdateCategoryDto } from "./dto/update-category.dto";
export declare class CategoriesService {
    private readonly categoryRepo;
    private readonly productRepo;
    private readonly fileUploadService;
    constructor(categoryRepo: Repository<Category>, productRepo: Repository<Product>, fileUploadService: FileUploadService);
    getAllCategories(): Promise<Category[]>;
    getCategoryWithProducts(categoryId: number): Promise<{
        category: {
            id: number;
            title: string;
            slug: string;
            image: string;
        };
        products: {
            id: number;
            title: string;
            price: number;
            discontPrice: number;
            image: string;
            slug: string;
        }[];
        total: number;
    }>;
    getCategoryWithProductsBySlug(slug: string): Promise<{
        category: {
            id: number;
            title: string;
            slug: string;
            image: string;
        };
        products: {
            id: number;
            title: string;
            price: number;
            discontPrice: number;
            image: string;
            slug: string;
        }[];
        total: number;
    }>;
    createCategory(dto: CreateCategoryDto): Promise<Category>;
    updateCategory(id: number, dto: UpdateCategoryDto): Promise<Category>;
    deleteCategory(id: number): Promise<{
        message: string;
    }>;
    uploadCategoryImage(id: number, file: Express.Multer.File): Promise<{
        url: string;
    }>;
}
