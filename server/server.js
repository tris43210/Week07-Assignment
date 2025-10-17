import express from "express";
import pg from "pg";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

const db = new pg.Pool({
  connectionString: process.env.DB_CONN_STRING,
});

app.get(`/`, async function (req, res) {
  res.json({ message: "this is the root route" });
});

app.get(`/albums`, async function (req, res) {
  const result = await db.query(`SELECT * FROM albums`);
  res.json(result.rows);
});

app.listen(`8080`, function () {
  console.log(`server running on port: http://localhost:8080`);
});
