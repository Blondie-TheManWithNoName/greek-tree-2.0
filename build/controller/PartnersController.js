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
exports.PartnersController = void 0;
const PartnersServices_1 = require("../services/PartnersServices");
class PartnersController {
    all(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const partners = yield (0, PartnersServices_1.getPartners)(req.query.p1, req.query.p2);
            res.status(200).json(partners);
        });
    }
    oneById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const partners = yield (0, PartnersServices_1.getPartnersById)(+req.params.id);
            res.status(200).json(partners);
        });
    }
    oneByNames(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("req.query.p1", req.query.p1);
            const partners = yield (0, PartnersServices_1.getPartnersByNames)(req.query.p1, req.query.p2);
            res.status(200).json(partners);
        });
    }
    save(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, PartnersServices_1.addPartners)(req.body);
            res.status(200).json("Added partners succesfully!");
        });
    }
    remove(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, PartnersServices_1.deletePartners)(+req.params.id);
            res.status(200).json("Deleted succesfully!");
        });
    }
}
exports.PartnersController = PartnersController;
