import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { LoadCategory } from "./entities/load-category.entity";
import { Category } from "../categories/entities/category.entity";
import { ImportLoadCategoriesDto } from "./dto/import-load-categories.dto";

@Injectable()
export class LoadCategoriesService {
  constructor(
    @InjectRepository(LoadCategory)
    private readonly loadRepo: Repository<LoadCategory>,
    @InjectRepository(Category)
    private readonly categoryRepo: Repository<Category>,
  ) {}

  async getAll() {
    return this.loadRepo.find({ order: { index: "ASC" as any } });
  }

  async importToCategories(options: ImportLoadCategoriesDto = {}) {
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
        // createdAt/updatedAt у тебя text — можно оставить null
      });

      await this.categoryRepo.save(cat);
      created++;
    }

    return {
      message: "Import finished",
      stats: { created, updated, skipped, total: rows.length },
    };
  }
}
