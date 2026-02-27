import { ProductImagesService } from "./product-images.service";
import { CreateProductImageDto } from "./dto/create-product-image.dto";
import { UpdateProductImageDto } from "./dto/update-product-image.dto";
export declare class ProductImagesController {
    private readonly imagesService;
    constructor(imagesService: ProductImagesService);
    findByProduct(productId: number): Promise<import("./entities/product-image.entity").ProductImage[]>;
    findPrimary(productId: number): Promise<import("./entities/product-image.entity").ProductImage | null>;
    findOne(id: number): Promise<import("./entities/product-image.entity").ProductImage>;
    create(dto: CreateProductImageDto): Promise<import("./entities/product-image.entity").ProductImage>;
    update(id: number, dto: UpdateProductImageDto): Promise<import("./entities/product-image.entity").ProductImage>;
    remove(id: number): Promise<{
        message: string;
    }>;
    setAsPrimary(id: number): Promise<import("./entities/product-image.entity").ProductImage>;
    updateSortOrder(productId: number, imageIds: number[]): Promise<{
        message: string;
    }>;
}
