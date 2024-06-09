// export const getEntrie = ()

import { AppDataSource } from "../app-data-source";
import { God } from "../entity/God.entity";

export const getGods = async (): Promise<God[]> => {
  const gods = await AppDataSource.getRepository(God).find();
  return gods;
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
