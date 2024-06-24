import { getGodByName, getGods, getRandom } from "../services/GodsServices";
import { Request, Response } from "express";
import { parseBoolean } from "../utils";

export class GodController {
  async all(req: Request, res: Response) {
    const gods = await getGods(
      parseInt(req.query.limit as string) || 20,
      parseInt(req.query.offset as string) || 0
    );
    res.status(200).json(gods);
  }

  async one(req: Request, res: Response) {
    const name = req.params.name;
    if (name === "random" || name === "rand") {
      const god = await getRandom();
      res.status(200).json(god);
    } else {
      const god = await getGodByName(
        name,
        parseBoolean(req.query.partnersNames)
      );
      res.status(200).json(god);
    }
  }
}
