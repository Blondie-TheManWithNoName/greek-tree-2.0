import { addGod, getGodByName, getGods } from "../services/GodsServices";
import { Request, Response } from "express";
import { parseBoolean } from "../utils";

export class GodController {
  async all(req: Request, res: Response) {
    const gods = await getGods(parseBoolean(req.query.id));
    res.status(200).json(gods);
  }

  async one(req: Request, res: Response) {
    const name = req.params.name;
    const god = await getGodByName(name);
    res.status(200).json(god);
  }

  async save(req: Request, res: Response) {
    await addGod(req.body);
    res.status(200).json("Added succesfully!");
  }
}
