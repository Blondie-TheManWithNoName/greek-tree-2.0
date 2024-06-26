import { getPartners, getPartnersById } from "../services/PartnersServices";
import { Request, Response } from "express";

export class PartnersController {
  async all(req: Request, res: Response) {
    const partners = await getPartners(
      parseInt(req.query.limit as string) || 20,
      parseInt(req.query.offset as string) || 0,
      req.query.p1 as string,
      req.query.p2 as string
    );
    res.status(200).json(partners);
  }

  async oneById(req: Request, res: Response) {
    const partners = await getPartnersById(+req.params.id);
    res.status(200).json(partners);
  }

  // async oneByNames(req: Request, res: Response) {
  //   console.log("req.query.p1", req.query.p1);
  //   const partners = await getPartnersByNames(req.query.p1, req.query.p2);
  //   res.status(200).json(partners);
  // }

  // async save(req: Request, res: Response) {
  //   await addPartners(req.body);
  //   res.status(200).json("Added partners succesfully!");
  // }

  // async remove(req: Request, res: Response) {
  //   await deletePartners(+req.params.id);
  //   res.status(200).json("Deleted succesfully!");
  // }
}
