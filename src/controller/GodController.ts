import { addGod, getGodByName, getGods } from "../services/godsServices";
import { Request, Response } from "express";

export class GodController {
  async all(_req: Request, res: Response) {
    const gods = await getGods();
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
