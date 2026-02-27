import { ConfigService } from "@nestjs/config";
export declare class FileUploadService {
    private configService;
    private uploadDir;
    private baseUrl;
    constructor(configService: ConfigService);
    generateFilename(originalname: string): string;
    validateFile(file: Express.Multer.File): void;
    uploadFile(file: Express.Multer.File, subfolder?: string): Promise<string>;
    deleteFile(url: string): Promise<void>;
    uploadMultipleFiles(files: Express.Multer.File[], subfolder?: string): Promise<string[]>;
}
