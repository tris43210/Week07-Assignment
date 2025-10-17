import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const db = new pg.Pool({
  connectionString: process.env.DB_CONN_STRING,
});

db.query(
  `INSERT INTO albums ("albumName", "albumCover") VALUES ('Closer', 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/75/b9/a1/75b9a1d8-c6d1-9bc8-575b-88a4dfee6622/8790001361256.png/600x600bb.jpg')`
);

db.query(
  `INSERT INTO albumReviews ("review", "albumid") VALUES ('Quest for Fire is one of the best albums this year', 1)`
);
