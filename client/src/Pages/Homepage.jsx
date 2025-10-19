import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";
import { useState, useEffect} from "react"

export function HomePage() {
    const [albumImage, setAlbumImage] = useState([]); 
    const [arrayIndex, setArrayIndex] = useState(0)

    useEffect(function () {
      async function fetchImages() {
        const getData = await fetch(`http://localhost:8081/albums`);
        const gotData = await getData.json();
        setAlbumImage(gotData);
      }
      fetchImages();
    }, []);
    
    
 useEffect(function () {
    const interval = setInterval(function () {
      setArrayIndex(function (prevIndex) {
        let newIndex = prevIndex + 1;
        if (newIndex > albumImage.length - 1) {
          newIndex = 0;
        }
        return newIndex;
      });
    }, 10000);

    return function () {
      clearInterval(interval);
    };
  }, [albumImage]);
      
  
  return (
    <>
      <Header />
      <main>
        <h1 className="text-center">Find Reviews on The Below Albums</h1>
        <div className="flex justify-center">
          <img src={albumImage[arrayIndex]?.albumCover}  />
        </div>
      </main>
      <Footer />
    </>
  );
}
