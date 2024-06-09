import { addChild, getChildren } from "../services/ChildService";
import { Request, Response } from "express";

export class ChildController {
  async all(_res: Request, res: Response) {
    const children = await getChildren();
    res.status(200).json(children);
  }

  async save(req: Request, res: Response) {
    await addChild(req.body);
    res.status(200).json("Added partners succesfully!");
  }
}
