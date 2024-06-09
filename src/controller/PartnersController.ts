import {
  addPartners,
  deletePartners,
  getPartners,
} from "../services/PartnersServices";
import { Request, Response } from "express";

export class PartnersController {
  async all(_res: Request, res: Response) {
    const partners = await getPartners();
    res.status(200).json(partners);
  }

  async save(req: Request, res: Response) {
    await addPartners(req.body);
    res.status(200).json("Added partners succesfully!");
  }

  async remove(req: Request, res: Response) {
    await deletePartners(+req.params.id);
    res.status(200).json("Deleted succesfully!");
  }
}
