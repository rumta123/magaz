import { Repository } from "typeorm";
import { LoadCategory } from "./entities/load-category.entity";
import { Category } from "../categories/entities/category.entity";
import { ImportLoadCategoriesDto } from "./dto/import-load-categories.dto";
export declare class LoadCategoriesService {
    private readonly loadRepo;
    private readonly categoryRepo;
    constructor(loadRepo: Repository<LoadCategory>, categoryRepo: Repository<Category>);
    getAll(): Promise<LoadCategory[]>;
    importToCategories(options?: ImportLoadCategoriesDto): Promise<{
        message: string;
        stats: {
            created: number;
            updated: number;
            skipped: number;
            total: number;
        };
    }>;
}
