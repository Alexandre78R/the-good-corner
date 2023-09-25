// import sqlite from "sqlite3";

// const db = new sqlite.Database('good_corner.sqlite');

// export { db };

import { DataSource } from "typeorm";

export default new DataSource({
  type: "sqlite",
  database: "good_corner.sqlite",
  entities: ["src/entities/*.ts"],
  synchronize: true,
  // logging: ["query","error"],
  logging: true,
});