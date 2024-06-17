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
exports.Partners = void 0;
const typeorm_1 = require("typeorm");
const class_validator_1 = require("class-validator");
const God_entity_1 = require("./God.entity");
const Child_entity_1 = require("./Child.entity");
let Partners = class Partners {
};
exports.Partners = Partners;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    (0, class_validator_1.IsDefined)(),
    __metadata("design:type", Number)
], Partners.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => God_entity_1.God)
    //   @Column()
    ,
    (0, class_validator_1.IsDefined)(),
    __metadata("design:type", God_entity_1.God)
], Partners.prototype, "partner_1", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => God_entity_1.God),
    (0, class_validator_1.IsDefined)(),
    __metadata("design:type", God_entity_1.God)
], Partners.prototype, "partner_2", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Child_entity_1.Child, (child) => child.parents),
    __metadata("design:type", Array)
], Partners.prototype, "children", void 0);
exports.Partners = Partners = __decorate([
    (0, typeorm_1.Entity)()
], Partners);
