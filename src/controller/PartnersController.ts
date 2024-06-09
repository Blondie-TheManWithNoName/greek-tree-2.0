import {
  addPartners,
  deletePartners,
  getPartners,
  getPartnersByNames,
} from "../services/PartnersServices";
import { Request, Response } from "express";

export class PartnersController {
  async all(_req: Request, res: Response) {
    const partners = await getPartners();
    res.status(200).json(partners);
  }

  async oneByNames(req: Request, res: Response) {
    console.log("req.query.p1", req.query.p1);
    const partners = await getPartnersByNames(req.query.p1, req.query.p2);
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
