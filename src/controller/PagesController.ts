import { Request, Response } from "express";
import path from "path";

export class PagesController {
  async index(_req: Request, res: Response) {
    const index = path.join(__dirname, "../public/pages/index.html");
    res.status(200).sendFile(index);
  }

  async docs(_req: Request, res: Response) {
    const docs = path.join(__dirname, "../public/pages/docs.html");
    res.status(200).sendFile(docs);
  }
}
