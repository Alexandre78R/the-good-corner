import sqlite from "sqlite3";

const db = new sqlite.Database('good_corner.sqlite');

export { db };