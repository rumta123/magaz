import { ProductsService } from "./products.service";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    private parseInStock;
    findAll(page?: number, limit?: number, search?: string, categoryId?: number, minPrice?: number, maxPrice?: number, inStock?: string): Promise<{
        products: import("./entities/product.entity").Product[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    }>;
    findAllForAdmin(): Promise<import("./entities/product.entity").Product[]>;
    findOne(id: number): Promise<import("./entities/product.entity").Product>;
    findOneBySlug(slug: string): Promise<import("./entities/product.entity").Product>;
    findByCategory(categoryId: number): Promise<import("./entities/product.entity").Product[]>;
    create(image: Express.Multer.File, dto: CreateProductDto): Promise<import("./entities/product.entity").Product>;
    update(id: number, image: Express.Multer.File, dto: UpdateProductDto): Promise<import("./entities/product.entity").Product>;
    remove(id: number): Promise<{
        message: string;
    }>;
    updateStock(id: number, quantity: number): Promise<import("./entities/product.entity").Product>;
}
