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
exports.deletePartners = exports.addPartners = exports.getPartnersByNames = exports.getPartnersById = exports.getPartners = void 0;
const app_data_source_1 = require("../app-data-source");
const Partners_entity_1 = require("../entity/Partners.entity");
// import { getGodByName } from "./godsServices";
const getPartners = (p1, p2) => __awaiter(void 0, void 0, void 0, function* () {
    const partnersQuery = app_data_source_1.AppDataSource.getRepository(Partners_entity_1.Partners)
        .createQueryBuilder("partners")
        .leftJoin("partners.partner_1", "partner1")
        .leftJoin("partners.partner_2", "partner2")
        .leftJoin("partners.children", "children")
        .leftJoin("children.child", "child")
        .select([
        "partners.id",
        "partner1.name",
        "partner2.name",
        "children.id",
        "child.name",
    ]);
    if (p1 !== undefined && p2 !== undefined) {
        partnersQuery
            .andWhere("partner1.name = :p1 AND partner2.name = :p2", { p1, p2 })
            .orWhere("partner1.name = :p2 AND partner2.name = :p1", { p1, p2 });
    }
    const partners = yield partnersQuery.getMany();
    const newPartners = partners.map((item) => ({
        partner_1: item.partner_1.name,
        partner_2: item.partner_2.name,
        children: item.children.map((child) => child.name),
    }));
    return newPartners;
});
exports.getPartners = getPartners;
const getPartnersById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const partners = yield app_data_source_1.AppDataSource.getRepository(Partners_entity_1.Partners).findOne({
        where: { id: id },
        relations: ["partner_1", "partner_2", "children"], // Specify the relation names here
    });
    if (!partners)
        throw Error(`Couldn't find partners with id: ${id}`);
    const newPartners = {
        partner_1: partners.partner_1.name,
        partner_2: partners.partner_2.name,
        children: partners.children.map((child) => child.name),
    };
    return newPartners;
});
exports.getPartnersById = getPartnersById;
const getPartnersByNames = (partner_1, partner_2) => __awaiter(void 0, void 0, void 0, function* () {
    const partners = yield app_data_source_1.AppDataSource.getRepository(Partners_entity_1.Partners)
        .createQueryBuilder("partners")
        .where({ partner_1: partner_1, partner_2: partner_2 })
        .orWhere({ partner_1: partner_2, partner_2: partner_1 })
        .getOne();
    return partners;
});
exports.getPartnersByNames = getPartnersByNames;
const addPartners = (partners) => __awaiter(void 0, void 0, void 0, function* () {
    // await getGodByName(partners.partner_1);
    // await getGodByName(partners.partner_2);
    const checkPartners = yield app_data_source_1.AppDataSource.getRepository(Partners_entity_1.Partners)
        .createQueryBuilder("partners")
        .where({ partner_1: partners.partner_1, partner_2: partners.partner_2 })
        .orWhere({ partner_1: partners.partner_2, partner_2: partners.partner_1 })
        .getOne();
    if (checkPartners)
        throw Error("Partners already exists.");
    const { partner_1, partner_2 } = partners;
    const newPartners = Object.assign(new Partners_entity_1.Partners(), {
        partner_1,
        partner_2,
    });
    const add = yield app_data_source_1.AppDataSource.getRepository(Partners_entity_1.Partners).save(newPartners);
    return add;
});
exports.addPartners = addPartners;
const deletePartners = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield app_data_source_1.AppDataSource.getRepository(Partners_entity_1.Partners).delete(id);
});
exports.deletePartners = deletePartners;
