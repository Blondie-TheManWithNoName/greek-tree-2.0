"use strict";
// export const getEntrie = ()
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addChild = exports.getChildren = void 0;
const app_data_source_1 = require("../app-data-source");
const Child_entity_1 = require("../entity/Child.entity");
const getChildren = () => __awaiter(void 0, void 0, void 0, function* () {
    const children = yield app_data_source_1.AppDataSource.getRepository(Child_entity_1.Child).find();
    return children;
});
exports.getChildren = getChildren;
const addChild = (child) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, parents_id } = child;
    const newChild = Object.assign(new Child_entity_1.Child(), {
        child: name,
        parents: parents_id,
    });
    const add = yield app_data_source_1.AppDataSource.getRepository(Child_entity_1.Child).save(newChild);
    return add;
});
exports.addChild = addChild;
