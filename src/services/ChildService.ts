// export const getEntrie = ()

import { AppDataSource } from "../app-data-source";
import { Child } from "../entity/Child.entity";
import { ChildInterface } from "../types";

export const getChildren = async (): Promise<Child[]> => {
  const children = await AppDataSource.getRepository(Child).find();
  return children;
};

export const addChild = async (child: ChildInterface) => {
  const { name, parents_id } = child;
  const newChild = Object.assign(new Child(), {
    child: name,
    parents: parents_id,
  });
  const add = await AppDataSource.getRepository(Child).save(newChild);
  return add;
};
