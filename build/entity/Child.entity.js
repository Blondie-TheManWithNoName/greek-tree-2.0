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
exports.Child = void 0;
const typeorm_1 = require("typeorm");
const class_validator_1 = require("class-validator");
const God_entity_1 = require("./God.entity");
const Partners_entity_1 = require("./Partners.entity");
let Child = class Child {
};
exports.Child = Child;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    (0, class_validator_1.IsDefined)(),
    __metadata("design:type", Number)
], Child.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => God_entity_1.God, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: "child" }),
    __metadata("design:type", God_entity_1.God)
], Child.prototype, "child", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Partners_entity_1.Partners, (parents) => parents.children),
    __metadata("design:type", Partners_entity_1.Partners)
], Child.prototype, "parents", void 0);
exports.Child = Child = __decorate([
    (0, typeorm_1.Entity)()
], Child);
