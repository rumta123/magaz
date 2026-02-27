"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const crypto = __importStar(require("crypto"));
const product_entity_1 = require("./entities/product.entity");
const category_entity_1 = require("../categories/entities/category.entity");
let ProductsService = class ProductsService {
    productRepo;
    categoryRepo;
    uploadDir;
    constructor(productRepo, categoryRepo) {
        this.productRepo = productRepo;
        this.categoryRepo = categoryRepo;
        this.uploadDir = path.join(process.cwd(), "uploads", "products");
        if (!fs.existsSync(this.uploadDir)) {
            fs.mkdirSync(this.uploadDir, { recursive: true });
        }
    }
    generateSlug(input) {
        return input
            .toLowerCase()
            .trim()
            .replace(/[‐-‒–—−]/g, "-")
            .replace(/[^a-z0-9а-яё\s-]/g, "")
            .replace(/[\s-]+/g, "-")
            .replace(/^-+|-+$/g, "");
    }
    pickAndNormalizeSlug(dtoSlug, title) {
        const raw = dtoSlug && dtoSlug.trim().length > 0 ? dtoSlug : title;
        return this.generateSlug(raw);
    }
    async makeUniqueSlug(baseSlug, excludeId) {
        const base = baseSlug && baseSlug.length > 0 ? baseSlug : "product";
        let slug = base;
        let i = 2;
        const exists = async (s) => {
            const found = await this.productRepo.findOne({
                where: { slug: s },
                select: { id: true },
            });
            if (!found)
                return false;
            if (excludeId !== undefined && Number(found.id) === Number(excludeId))
                return false;
            return true;
        };
        while (await exists(slug)) {
            slug = `${base}-${i}`;
            i += 1;
            if (i > 500) {
                throw new common_1.BadRequestException("Не удалось подобрать уникальный slug");
            }
        }
        return slug;
    }
    generateFilename(originalname) {
        const uniqueSuffix = crypto.randomBytes(16).toString("hex");
        const ext = path.extname(originalname);
        return `${uniqueSuffix}${ext}`;
    }
    async saveFile(file) {
        const allowedTypes = ["image/jpeg", "image/png", "image/webp", "image/gif"];
        if (!allowedTypes.includes(file.mimetype)) {
            throw new common_1.BadRequestException("Разрешены только изображения (JPEG, PNG, WebP, GIF)");
        }
        if (file.size > 5 * 1024 * 1024) {
            throw new common_1.BadRequestException("Размер файла не должен превышать 5MB");
        }
        const filename = this.generateFilename(file.originalname ?? "file");
        const filePath = path.join(this.uploadDir, filename);
        await fs.promises.writeFile(filePath, file.buffer);
        return filename;
    }
    async deleteFile(url) {
        try {
            const filename = url.split("/").pop();
            if (!filename)
                return;
            const filePath = path.join(this.uploadDir, filename);
            if (fs.existsSync(filePath)) {
                await fs.promises.unlink(filePath);
            }
        }
        catch (error) {
            console.error("Ошибка при удалении файла:", error);
        }
    }
    async findAllForAdmin() {
        return this.productRepo.find({
            relations: ["category"],
            select: {
                id: true,
                title: true,
                slug: true,
                price: true,
                discontPrice: true,
                description: true,
                stock: true,
                image: true,
                isActive: true,
                createdAt: true,
                category: { id: true, title: true, image: true },
            },
            order: { createdAt: "DESC" },
        });
    }
    async create(dto, image) {
        const category = await this.categoryRepo.findOneBy({ id: dto.categoryId });
        if (!category) {
            throw new common_1.NotFoundException(`Категория с ID ${dto.categoryId} не найдена`);
        }
        const baseSlug = this.pickAndNormalizeSlug(dto.slug, dto.title);
        const slug = await this.makeUniqueSlug(baseSlug);
        let imageUrl = null;
        if (image) {
            imageUrl = await this.saveFile(image);
        }
        const product = this.productRepo.create({
            ...dto,
            slug,
            stock: dto.stock ?? 0,
            isActive: dto.isActive ?? true,
            image: imageUrl ?? "",
        });
        return this.productRepo.save(product);
    }
    async findAll(query) {
        const { page = 1, limit = 20, search, categoryId, minPrice, maxPrice, inStock, } = query || {};
        const where = { isActive: true };
        if (search)
            where.title = (0, typeorm_2.Like)(`%${search}%`);
        if (categoryId)
            where.categoryId = categoryId;
        if (minPrice !== undefined && maxPrice !== undefined) {
            where.price = (0, typeorm_2.Between)(minPrice, maxPrice);
        }
        else if (minPrice !== undefined) {
            where.price = (0, typeorm_2.MoreThanOrEqual)(minPrice);
        }
        else if (maxPrice !== undefined) {
            where.price = (0, typeorm_2.LessThanOrEqual)(maxPrice);
        }
        if (inStock !== undefined) {
            where.stock = inStock ? (0, typeorm_2.MoreThan)(0) : 0;
        }
        const [products, total] = await this.productRepo.findAndCount({
            where,
            relations: ["category"],
            select: {
                id: true,
                title: true,
                slug: true,
                price: true,
                discontPrice: true,
                description: true,
                stock: true,
                image: true,
                createdAt: true,
                category: { id: true, title: true, image: true },
            },
            order: { createdAt: "DESC" },
            skip: (page - 1) * limit,
            take: limit,
        });
        return {
            products,
            pagination: {
                page,
                limit,
                total,
                totalPages: Math.ceil(total / limit),
            },
        };
    }
    async findOne(id) {
        const product = await this.productRepo.findOne({
            where: { id, isActive: true },
            relations: ["category", "images"],
        });
        if (!product) {
            throw new common_1.NotFoundException(`Товар с ID ${id} не найден`);
        }
        if (Array.isArray(product.images)) {
            product.images = [...product.images].sort((a, b) => {
                const as = Number(a?.sortOrder ?? 0);
                const bs = Number(b?.sortOrder ?? 0);
                if (as !== bs)
                    return as - bs;
                return Number(b?.isPrimary ? 1 : 0) - Number(a?.isPrimary ? 1 : 0);
            });
        }
        return product;
    }
    async findOneBySlug(slug) {
        const normalized = this.generateSlug(slug);
        const product = await this.productRepo.findOne({
            where: { slug: normalized, isActive: true },
            relations: ["category", "images"],
        });
        if (!product) {
            throw new common_1.NotFoundException(`Товар "${normalized}" не найден`);
        }
        return product;
    }
    async update(id, dto, image) {
        if (dto.slug && dto.slug.trim().length > 0) {
            const baseSlug = this.generateSlug(dto.slug);
            dto.slug = await this.makeUniqueSlug(baseSlug, Number(id));
        }
        if (dto.categoryId) {
            const category = await this.categoryRepo.findOneBy({
                id: dto.categoryId,
            });
            if (!category) {
                throw new common_1.NotFoundException(`Категория с ID ${dto.categoryId} не найдена`);
            }
        }
        if (image) {
            const product = await this.findOne(Number(id));
            if (product.image) {
                await this.deleteFile(product.image);
            }
            dto.image = await this.saveFile(image);
        }
        await this.productRepo.update(Number(id), dto);
        return this.findOne(Number(id));
    }
    async remove(id) {
        const product = await this.productRepo.findOneBy({ id });
        if (!product) {
            throw new common_1.NotFoundException(`Товар с ID ${id} не найден`);
        }
        if (product.image) {
            await this.deleteFile(product.image);
        }
        product.isActive = false;
        await this.productRepo.save(product);
        return { message: "Товар успешно удален" };
    }
    async findByCategory(categoryId) {
        return this.productRepo.find({
            where: { categoryId, isActive: true },
            relations: ["category"],
            order: { createdAt: "DESC" },
        });
    }
    async updateStock(productId, quantity) {
        const product = await this.productRepo.findOneBy({ id: productId });
        if (!product) {
            throw new common_1.NotFoundException(`Товар с ID ${productId} не найден`);
        }
        product.stock = Math.max(0, product.stock + quantity);
        return this.productRepo.save(product);
    }
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(product_entity_1.Product)),
    __param(1, (0, typeorm_1.InjectRepository)(category_entity_1.Category)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], ProductsService);
//# sourceMappingURL=products.service.js.map