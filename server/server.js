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

app.get(`/albums/:id`, async function(req,res) {
  const {id} = req.params; 
  console.log(id);
  const result = await db.query(`SELECT * FROM albums WHERE id = $1`, [id]);
  res.json(result.rows);
})

app.post(`/reviews`, async function(req,res) {
  const requestFromClient = req.body;

  const sendtoDatabase = db.query(`INSERT INTO albumreviews (review, albumid) VALUES ($1, $2)`, [req.body.review, req.body.albumid])

  res.json({message: `Your review has been submitted`})
})

app.get(`/reviews`, async function(req,res) {
  const dbReviews = await db.query(`SELECT * FROM albumreviews WHERE albumid = $1`, [req.query.albumid]);
  res.json(dbReviews.rows)
})

app.listen(8081, function () {
  console.log(`server running on port: https://week07-assignment-server-afhz.onrender.com/`);
});
