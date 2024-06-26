import express, { Request, Response, NextFunction } from "express";
import { AppDataSource } from "./app-data-source";
import { Routes } from "./routes";
import morgan from "morgan";
import { validationResult } from "express-validator";

const PORT = 3000;

AppDataSource.initialize()
  .then(async () => {
    // create express app
    const app = express();
    app.use(express.json());
    app.use(morgan("tiny"));
    // register express routes from defined application routes
    Routes.forEach((route) => {
      (app as any)[route.method](
        route.route,
        ...route.validation,
        async (req: Request, res: Response, next: NextFunction) => {
          try {
            const errors = validationResult(req);
            if (!errors.isEmpty())
              res.status(400).json({ errors: errors.array() });

            const result = await new (route.controller as any)()[route.action](
              req,
              res,
              next
            );
            if (result !== null && result !== undefined) {
              res.send(result);
            }
          } catch (error) {
            next(error);
          }
        }
      );
    });

    // error-handling middleware
    app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
      console.error(err.stack);
      res.status(500).json({ error: err.message });
    });

    // start express server
    app.listen(3000, () => {
      console.log(`Express server has started on port ${PORT}`);
    });
  })
  .catch((error: any) => console.log(error));
