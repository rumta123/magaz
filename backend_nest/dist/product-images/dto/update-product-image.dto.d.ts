import { CreateProductImageDto } from "./create-product-image.dto";
declare const UpdateProductImageDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateProductImageDto>>;
export declare class UpdateProductImageDto extends UpdateProductImageDto_base {
    imageUrl?: string;
    isPrimary?: boolean;
    sortOrder?: number;
}
export {};
