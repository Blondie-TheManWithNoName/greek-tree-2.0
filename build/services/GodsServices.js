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
exports.addGod = exports.getGodByName = exports.getGods = void 0;
const app_data_source_1 = require("../app-data-source");
const God_entity_1 = require("../entity/God.entity");
const getGods = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const godRepository = app_data_source_1.AppDataSource.getRepository(God_entity_1.God);
    const gods = yield godRepository
        .createQueryBuilder("god")
        .leftJoinAndSelect("god.partnersAsPartner1", "partner1")
        .leftJoinAndSelect("god.partnersAsPartner2", "partner2")
        .leftJoinAndSelect("partner1.partner_2", "partner1_god2")
        .leftJoinAndSelect("partner2.partner_1", "partner2_god1")
        .select([
        "god",
        "partner1",
        "partner2",
        "partner1_god2.name",
        "partner2_god1.name",
    ])
        .getMany();
    const formattedGods = gods.map((god) => {
        const partnersId = [];
        const partners = [];
        if (god.partnersAsPartner1) {
            god.partnersAsPartner1.forEach((partner) => {
                if (id)
                    partnersId.push({
                        id: partner.id,
                        partner: partner.partner_2.name,
                    });
                else
                    partners.push(partner.partner_2.name);
            });
        }
        if (god.partnersAsPartner2) {
            god.partnersAsPartner2.forEach((partner) => {
                if (id)
                    partnersId.push({
                        id: partner.id,
                        partner: partner.partner_1.name,
                    });
                else
                    partners.push(partner.partner_1.name);
            });
        }
        return {
            name: god.name,
            gender: god.gender,
            description: god.description,
            greekName: god.greekName,
            romanName: god.romanName,
            partners: id ? partnersId : partners,
        };
    });
    return formattedGods;
});
exports.getGods = getGods;
const getGodByName = (name) => __awaiter(void 0, void 0, void 0, function* () {
    const god = yield app_data_source_1.AppDataSource.getRepository(God_entity_1.God).findOneBy({ name: name });
    if (!god)
        throw Error(`God ${name} does not exist.`);
    return god;
});
exports.getGodByName = getGodByName;
const addGod = (god) => __awaiter(void 0, void 0, void 0, function* () {
    const check = yield app_data_source_1.AppDataSource.getRepository(God_entity_1.God).findOneBy({
        name: god.name,
    });
    if (check)
        throw Error("God already exists.");
    const add = yield app_data_source_1.AppDataSource.getRepository(God_entity_1.God).save(god);
    return add;
});
exports.addGod = addGod;
