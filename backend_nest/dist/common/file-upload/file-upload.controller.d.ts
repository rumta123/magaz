import { FileUploadService } from "./file-upload.service";
export declare class FileUploadController {
    private readonly fileUploadService;
    constructor(fileUploadService: FileUploadService);
    uploadSingle(file: Express.Multer.File): Promise<{
        url: string;
        filename: string;
    }>;
    uploadMultiple(files: Express.Multer.File[]): Promise<{
        urls: string[];
        count: number;
    }>;
    uploadAvatar(file: Express.Multer.File): Promise<{
        url: string;
    }>;
    uploadCategoryImage(file: Express.Multer.File): Promise<{
        url: string;
    }>;
}
