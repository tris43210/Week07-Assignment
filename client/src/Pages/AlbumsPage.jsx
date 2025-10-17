import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";
import { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router";

export function AlbumsPage() {
  const [albums, setAlbums] = useState([]);
  const [isVisible, setVisible] = useState(false);

  useEffect(function () {
    async function fetchImages() {
      const getData = await fetch(`http://localhost:8081/albums`);
      const gotData = await getData.json();
      setAlbums(gotData);
    }
    fetchImages();
  }, []);

  console.log(albums);

  return (
    <>
      <Header />
      <main>
        <div className="album-container">
          <h1>My Favorite Albums:</h1>
        </div>
        <div>
          <button
            onClick={function () {
              setVisible(true);
            }}
          >
            {" "}
            See Albums
          </button>
          <button
            onClick={function () {
              setVisible(false);
            }}
          >
            {" "}
            Hide Albums
          </button>
        </div>
        {console.log(isVisible)}
        {isVisible
          ? albums.map(function (album) {
              return (
                <div
                  key={album.id}
                  className="w-screen flex flex-col items-center"
                >
                  <Link to={`/albums/${album.id}`}>
                    <img src={album.albumCover} />
                    <h1>{album.albumName}</h1>
                  </Link>
                </div>
              );
            })
          : null}
      </main>
      <Footer />
    </>
  );
}
