"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadCategoriesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const load_category_entity_1 = require("./entities/load-category.entity");
const category_entity_1 = require("../categories/entities/category.entity");
let LoadCategoriesService = class LoadCategoriesService {
    loadRepo;
    categoryRepo;
    constructor(loadRepo, categoryRepo) {
        this.loadRepo = loadRepo;
        this.categoryRepo = categoryRepo;
    }
    async getAll() {
        return this.loadRepo.find({ order: { index: "ASC" } });
    }
    async importToCategories(options = {}) {
        const rows = await this.loadRepo.find();
        let created = 0;
        let updated = 0;
        let skipped = 0;
        for (const row of rows) {
            const existing = await this.categoryRepo.findOne({
                where: { title: row.title },
            });
            if (existing) {
                if (options.skipIfExists) {
                    skipped++;
                    continue;
                }
                if (options.upsert) {
                    existing.image = row.imgLink ?? existing.image;
                    await this.categoryRepo.save(existing);
                    updated++;
                    continue;
                }
                skipped++;
                continue;
            }
            const cat = this.categoryRepo.create({
                title: row.title,
                image: row.imgLink ?? null,
            });
            await this.categoryRepo.save(cat);
            created++;
        }
        return {
            message: "Import finished",
            stats: { created, updated, skipped, total: rows.length },
        };
    }
};
exports.LoadCategoriesService = LoadCategoriesService;
exports.LoadCategoriesService = LoadCategoriesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(load_category_entity_1.LoadCategory)),
    __param(1, (0, typeorm_1.InjectRepository)(category_entity_1.Category)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], LoadCategoriesService);
//# sourceMappingURL=load-categories.service.js.map