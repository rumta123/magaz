import { LoadCategoriesService } from "./load-categories.service";
import { ImportLoadCategoriesDto } from "./dto/import-load-categories.dto";
export declare class LoadCategoriesController {
    private readonly loadCategoriesService;
    constructor(loadCategoriesService: LoadCategoriesService);
    getAll(): Promise<import("./entities/load-category.entity").LoadCategory[]>;
    importToCategories(dto: ImportLoadCategoriesDto): Promise<{
        message: string;
        stats: {
            created: number;
            updated: number;
            skipped: number;
            total: number;
        };
    }>;
}
