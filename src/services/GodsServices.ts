// export const getEntrie = ()

import { AppDataSource } from "../app-data-source";
import { God } from "../entity/God.entity";

export const getGods = async (limit: number, offset: number) => {
  const godRepository = AppDataSource.getRepository(God);

  console.log("limit", limit);
  console.log("offset", offset);
  const [gods, count] = await godRepository.findAndCount({
    skip: offset,
    take: limit,
  });

  const formattedGods = gods.map((god) => {
    return {
      name: god.name,
      url: "https://api.theogonia.net/gods/" + god.name,
    };
  });

  return {
    count: count,
    // prettier-ignore
    next:
      offset + limit < count ? 
      `https://api.theogonia.net/gods?limit=${limit}&offset=${offset + limit}`
       : null,
    // prettier-ignore
    previous:
      offset - limit >= 0 ? `https://api.theogonia.net/gods?limit=${limit}&offset=${offset - limit}`
      : (limit - offset > 0) ? `https://api.theogonia.net/gods?limit=${limit - offset}&offset=0`
      : null,

    results: formattedGods,
  };
};
export const getGodByName = async (name: string, names: boolean = false) => {
  const god = await AppDataSource.getRepository(God).findOne({
    where: { name: name },
    relations: [
      "partnersAsPartner1",
      "partnersAsPartner2",
      "parents",
      "partnersAsPartner1.partner_2",
      "partnersAsPartner2.partner_1",
    ],
  });
  if (!god) throw Error(`God ${name} does not exist.`);

  const partnersNames: string[] = [];
  const partners: number[] = [];

  if (god.partnersAsPartner1) {
    god.partnersAsPartner1.forEach((partner) => {
      if (names) partnersNames.push(partner.partner_2.name);
      partners.push(partner.id);
    });
  }

  if (god.partnersAsPartner2) {
    god.partnersAsPartner2.forEach((partner) => {
      if (names) partnersNames.push(partner.partner_1.name);
      partners.push(partner.id);
    });
  }

  const godInfo = {
    name: god.name,
    gender: god.gender,
    title: god.title,
    description: god.description,
    greekName: god.greekName,
    romanName: god.romanName,
    parentsId: god.parents.id,
    partners: partners,
  };

  if (names) (godInfo as any).partnersNames = partnersNames;

  return godInfo;
};
