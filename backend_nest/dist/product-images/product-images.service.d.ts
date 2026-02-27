import { Repository } from "typeorm";
import { ProductImage } from "./entities/product-image.entity";
import { Product } from "../products/entities/product.entity";
import { CreateProductImageDto } from "./dto/create-product-image.dto";
import { UpdateProductImageDto } from "./dto/update-product-image.dto";
export declare class ProductImagesService {
    private readonly imageRepo;
    private readonly productRepo;
    constructor(imageRepo: Repository<ProductImage>, productRepo: Repository<Product>);
    create(dto: CreateProductImageDto): Promise<ProductImage>;
    findByProduct(productId: number): Promise<ProductImage[]>;
    findOne(id: number): Promise<ProductImage>;
    findPrimary(productId: number): Promise<ProductImage | null>;
    update(id: number, dto: UpdateProductImageDto): Promise<ProductImage>;
    remove(id: number): Promise<{
        message: string;
    }>;
    setAsPrimary(id: number): Promise<ProductImage>;
    updateSortOrder(productId: number, imageIds: number[]): Promise<{
        message: string;
    }>;
}
