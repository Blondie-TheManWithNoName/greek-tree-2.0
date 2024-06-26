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
exports.God = void 0;
const typeorm_1 = require("typeorm");
const class_validator_1 = require("class-validator");
const Partners_entity_1 = require("./Partners.entity");
let God = class God {
};
exports.God = God;
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    (0, class_validator_1.IsDefined)(),
    __metadata("design:type", String)
], God.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true }),
    (0, class_validator_1.IsDefined)(),
    __metadata("design:type", Boolean)
], God.prototype, "gender", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text", nullable: true }),
    __metadata("design:type", String)
], God.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: "Greek" }),
    __metadata("design:type", String)
], God.prototype, "greekName", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: "RomanGod" }),
    __metadata("design:type", String)
], God.prototype, "romanName", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Partners_entity_1.Partners, (partners) => partners.partner_1),
    __metadata("design:type", Array)
], God.prototype, "partnersAsPartner1", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Partners_entity_1.Partners, (partners) => partners.partner_2),
    __metadata("design:type", Array)
], God.prototype, "partnersAsPartner2", void 0);
exports.God = God = __decorate([
    (0, typeorm_1.Entity)()
], God);
