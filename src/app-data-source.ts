import { DataSource } from "typeorm";
import { God } from "./entity/God.entity";
import { Partners } from "./entity/Partners.entity";
import { Child } from "./entity/Child.entity";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "root",
  database: "greek-tree",
  entities: [God, Partners, Child],
  logging: false,
  synchronize: true,
});
