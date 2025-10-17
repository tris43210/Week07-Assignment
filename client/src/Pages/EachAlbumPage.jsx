import { Footer } from "../Components/Footer";
import { Header } from "../Components/Header";
import { ReviewForm } from "../Components/ReviewForm";
import { useParams } from "react-router";
import { useState, useEffect } from "react";

export function EachAlbumPage() {
  const params = useParams();
  const [individualAlbums, setIndividualAlbums] = useState([]);

  useEffect(
    function () {
      async function fetchData() {
        const getData = await fetch(
          `http://localhost:8081/albums/${params.id}`
        );
        const gotData = await getData.json();
        console.log(gotData);
        setIndividualAlbums(gotData);
      }
      fetchData();
    },
    [params]
  );

  return (
    <>
      <Header />
      <main>
        <div className="w-screen flex flex-col items-center">
          <img src={individualAlbums[0]?.albumCover} />
          <h2>{individualAlbums[0]?.albumName}</h2>
        </div>
        <ReviewForm />
      </main>
      <Footer />
    </>
  );
}
