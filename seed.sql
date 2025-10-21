CREATE table songs (
  id INT PRIMARY KEY GENERATED ALWAYS AS identity,
  songName TEXT, 
  songCover TEXT
)

INSERT INTO albums ("albumName", "albumCover")
VALUES ('Quest For Fire', 'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/fc/f4/6b/fcf46b95-cf27-9f04-94c2-4ad257b7a5a6/075679695239.jpg/600x600bb.jpg')


CREATE table albumReviews (
  reviewID INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  review TEXT,
  albumID INT references albums(id)
)

