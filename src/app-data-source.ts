import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "root",
  database: "greek-tree",
  entities: ["build/**/*entity.{ts,js}"],
  migrations: ["build/migrations/*.{ts,js}"],
  logging: false,
  synchronize: true,
});
