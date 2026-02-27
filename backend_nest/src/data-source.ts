import "dotenv/config";
import { DataSource } from "typeorm";
import { join } from "path";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST || "localhost",
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USERNAME || "postgres",
  password: process.env.DB_PASSWORD || "password",
  database: process.env.DB_NAME || "react_shop_db",

  entities: [join(__dirname, "**/*.entity{.ts,.js}")],
  migrations: [join(__dirname, "migrations/*{.ts,.js}")],

  synchronize: false,
  logging: ["error", "warn"],
});
