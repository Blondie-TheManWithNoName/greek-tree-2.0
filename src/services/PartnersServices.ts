// export const getEntrie = ()

import { AppDataSource } from "../app-data-source";
import { Partners } from "../entity/Partners.entity";
import { PartnersInterface } from "../types";
import { getGodByName } from "./godsServices";

export const getPartners = async () => {
  const partners = await AppDataSource.getRepository(Partners)
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
    ])
    .getMany();
  const newPartners = partners.map((item) => ({
    partner_1: item.partner_1.name,
    partner_2: item.partner_2.name,
    children: item.children.map((child) => child.child.name),
  }));
  return newPartners;
};

export const getPartnersById = async (id: number) => {
  const partners = await AppDataSource.getRepository(Partners).findOne({
    where: { id: id },
    relations: ["partner_1", "partner_2", "children"], // Specify the relation names here
  });

  if (!partners) throw Error(`Couldn't find partners with id: ${id}`);

  const newPartners = {
    partner_1: partners.partner_1.name,
    partner_2: partners.partner_2.name,
    children: partners.children.map((child) => child.child.name),
  };
  return newPartners;
};

export const getPartnersByNames = async (partner_1: any, partner_2: any) => {
  const partners = await AppDataSource.getRepository(Partners)
    .createQueryBuilder("partners")
    .where({ partner_1: partner_1, partner_2: partner_2 })
    .orWhere({ partner_1: partner_2, partner_2: partner_1 })
    .getOne();

  return partners;
};

export const addPartners = async (
  partners: PartnersInterface
): Promise<Partners> => {
  await getGodByName(partners.partner_1);
  await getGodByName(partners.partner_2);

  const checkPartners = await AppDataSource.getRepository(Partners)
    .createQueryBuilder("partners")
    .where({ partner_1: partners.partner_1, partner_2: partners.partner_2 })
    .orWhere({ partner_1: partners.partner_2, partner_2: partners.partner_1 })
    .getOne();

  if (checkPartners) throw Error("Partners already exists.");

  const { partner_1, partner_2 } = partners;
  const newPartners = Object.assign(new Partners(), {
    partner_1,
    partner_2,
  });

  const add = await AppDataSource.getRepository(Partners).save(newPartners);
  return add;
};

export const deletePartners = async (id: number) => {
  await AppDataSource.getRepository(Partners).delete(id);
};
