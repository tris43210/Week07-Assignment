import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";
import { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router";
import "./AlbumsPage.css"

export function AlbumsPage() {
  const [albums, setAlbums] = useState([]);
  const [isVisible, setVisible] = useState(false);

  useEffect(function () {
    async function fetchImages() {
      const getData = await fetch(`https://week07-assignment-server-afhz.onrender.com/albums`);
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
          <h1 className="text-center">My Favorite Albums</h1>
        </div>
        <div className="flex justify-around">
          <button className="btn-displayAlbums show"
            onClick={function () {
              setVisible(true);
            }}
          >
            {" "}
            See Albums
          </button>
          <button className="btn-displayAlbums hide"
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
                  className="w-screen flex flex-col items-center image-container"
                >
                  <Link to={`/albums/${album.id}`}>
                    <img src={album.albumCover} />
                    <h1 className="text-center">{album.albumName}</h1>
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
