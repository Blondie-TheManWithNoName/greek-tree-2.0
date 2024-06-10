// export const getEntrie = ()

import { AppDataSource } from "../app-data-source";
import { God } from "../entity/God.entity";

export const getGods = async (id?: boolean) => {
  const godRepository = AppDataSource.getRepository(God);

  const gods = await godRepository
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
    const partnersId: { id: number; partner: string }[] = [];
    const partners: string[] = [];

    if (god.partnersAsPartner1) {
      god.partnersAsPartner1.forEach((partner) => {
        if (id)
          partnersId.push({
            id: partner.id,
            partner: partner.partner_2.name,
          });
        else partners.push(partner.partner_2.name);
      });
    }

    if (god.partnersAsPartner2) {
      god.partnersAsPartner2.forEach((partner) => {
        if (id)
          partnersId.push({
            id: partner.id,
            partner: partner.partner_1.name,
          });
        else partners.push(partner.partner_1.name);
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
};
export const getGodByName = async (name: string): Promise<God> => {
  const god = await AppDataSource.getRepository(God).findOneBy({ name: name });
  if (!god) throw Error(`God ${name} does not exist.`);
  return god;
};

export const addGod = async (god: God): Promise<God> => {
  const check = await AppDataSource.getRepository(God).findOneBy({
    name: god.name,
  });
  if (check) throw Error("God already exists.");
  const add = await AppDataSource.getRepository(God).save(god);
  return add;
};
