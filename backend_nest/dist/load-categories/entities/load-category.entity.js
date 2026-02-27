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
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadCategory = void 0;
const typeorm_1 = require("typeorm");
let LoadCategory = class LoadCategory {
    index;
    title;
    imgLink;
    categLink;
};
exports.LoadCategory = LoadCategory;
__decorate([
    (0, typeorm_1.PrimaryColumn)({ name: "index", type: "bigint" }),
    __metadata("design:type", Number)
], LoadCategory.prototype, "index", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text" }),
    __metadata("design:type", String)
], LoadCategory.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "img_link", type: "text", nullable: true }),
    __metadata("design:type", String)
], LoadCategory.prototype, "imgLink", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "categ_link", type: "text", nullable: true }),
    __metadata("design:type", String)
], LoadCategory.prototype, "categLink", void 0);
exports.LoadCategory = LoadCategory = __decorate([
    (0, typeorm_1.Entity)("load_categoryes")
], LoadCategory);
//# sourceMappingURL=load-category.entity.js.map