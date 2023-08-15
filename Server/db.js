import mysql from "mysql";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "ansh",
  database: "blog",
});

export default db;
