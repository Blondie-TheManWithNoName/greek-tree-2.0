"use strict";
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
exports.GodController = void 0;
const GodsServices_1 = require("../services/GodsServices");
const utils_1 = require("../utils");
class GodController {
    all(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const gods = yield (0, GodsServices_1.getGods)((0, utils_1.parseBoolean)(req.query.id));
            res.status(200).json(gods);
        });
    }
    one(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const name = req.params.name;
            const god = yield (0, GodsServices_1.getGodByName)(name);
            res.status(200).json(god);
        });
    }
    save(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, GodsServices_1.addGod)(req.body);
            res.status(200).json("Added succesfully!");
        });
    }
}
exports.GodController = GodController;
