// export const getEntrie = ()

import { AppDataSource } from "../app-data-source";
import { Partners } from "../entity/Partners.entity";
// import { PartnersInterface } from "../types";
// import { getGodByName } from "./godsServices";

export const getPartners = async (
  limit: number,
  offset: number,
  p1?: string,
  p2?: string
) => {
  let result: any[] = [];
  let count = 0;
  const partnersRepository = AppDataSource.getRepository(Partners);
  if (p1 === undefined && p2 === undefined) {
    [result, count] = await partnersRepository.findAndCount({
      skip: offset,
      take: limit,
      relations: ["partner_1", "partner_2"],
    });
  } else {
    if (p1 === undefined || p2 === undefined) {
      if (p1 !== undefined) {
        [result, count] = await partnersRepository.findAndCount({
          skip: offset,
          take: limit,
          where: [{ partner_1: { name: p1 } }, { partner_2: { name: p1 } }],
          relations: ["partner_1", "partner_2"],
        });
      } else {
        [result, count] = await partnersRepository.findAndCount({
          skip: offset,
          take: limit,
          where: [{ partner_1: { name: p2 } }, { partner_2: { name: p2 } }],
          relations: ["partner_1", "partner_2"],
        });
      }
    } else {
      [result, count] = await partnersRepository.findAndCount({
        skip: offset,
        take: limit,
        where: [
          { partner_1: { name: p1 }, partner_2: { name: p2 } },
          { partner_1: { name: p2 }, partner_2: { name: p1 } },
        ],
        relations: ["partner_1", "partner_2"],
      });
    }
  }
  result = result.map((item) => ({
    id: item.id,
    partner1: item.partner_1.name,
    partner2: item.partner_2.name,
    url: `https://api.theogonia.net/partners/${item.id}`,
  }));
  return {
    count: count,
    // prettier-ignore
    next:
          offset + limit < count ? 
          `https://api.theogonia.net/relationships?limit=${limit}&offset=${offset + limit}`
           : null,
    // prettier-ignore
    previous:
          offset - limit >= 0 ? `https://api.theogonia.net/relationship?limit=${limit}&offset=${offset - limit}`
          : (limit - offset > 0 && offset !== 0) ? `https://api.theogonia.net/relationship?limit=${limit - offset}&offset=0`
          : null,
    results: result,
  };
};

export const getPartnersById = async (id: number) => {
  const partners = await AppDataSource.getRepository(Partners).findOne({
    where: { id: id },
    relations: ["partner_1", "partner_2", "children"], // Specify the relation names here
  });

  if (!partners) throw Error(`Couldn't find partners with id: ${id}`);

  const newPartners = {
    id: id,
    partner_1: partners.partner_1.name,
    partner_2: partners.partner_2.name,
    children: partners.children.map((child) => child.name),
  };
  return newPartners;
};

// export const getPartnersByNames = async (partner_1: any, partner_2: any) => {
//   const partners = await AppDataSource.getRepository(Partners)
//     .createQueryBuilder("partners")
//     .where({ partner_1: partner_1, partner_2: partner_2 })
//     .orWhere({ partner_1: partner_2, partner_2: partner_1 })
//     .getOne();

//   return partners;
// };

// export const addPartners = async (
//   partners: PartnersInterface
// ): Promise<Partners> => {
//   // await getGodByName(partners.partner_1);
//   // await getGodByName(partners.partner_2);

//   const checkPartners = await AppDataSource.getRepository(Partners)
//     .createQueryBuilder("partners")
//     .where({ partner_1: partners.partner_1, partner_2: partners.partner_2 })
//     .orWhere({ partner_1: partners.partner_2, partner_2: partners.partner_1 })
//     .getOne();

//   if (checkPartners) throw Error("Partners already exists.");

//   const { partner_1, partner_2 } = partners;
//   const newPartners = Object.assign(new Partners(), {
//     partner_1,
//     partner_2,
//   });

//   const add = await AppDataSource.getRepository(Partners).save(newPartners);
//   return add;
// };

// export const deletePartners = async (id: number) => {
//   await AppDataSource.getRepository(Partners).delete(id);
// };
