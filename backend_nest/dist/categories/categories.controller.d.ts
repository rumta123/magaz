import { CategoriesService } from "./categories.service";
import { CreateCategoryDto } from "./dto/create-category.dto";
import { UpdateCategoryDto } from "./dto/update-category.dto";
export declare class CategoriesController {
    private readonly categoriesService;
    constructor(categoriesService: CategoriesService);
    getAll(): Promise<import("./entities/category.entity").Category[]>;
    getCategoryProductsBySlug(slug: string): Promise<{
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
    getCategoryProducts(id: number): Promise<{
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
    create(dto: CreateCategoryDto): Promise<import("./entities/category.entity").Category>;
    update(id: number, dto: UpdateCategoryDto): Promise<import("./entities/category.entity").Category>;
    uploadImage(id: number, file: Express.Multer.File): Promise<{
        url: string;
    }>;
    delete(id: number): Promise<{
        message: string;
    }>;
}
