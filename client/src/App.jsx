import "./App.css";
import { AlbumsPage } from "./Pages/AlbumsPage";
import { EachAlbumPage } from "./Pages/EachAlbumPage";
import { HomePage } from "./Pages/Homepage";
import { Routes, Route } from "react-router";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/albums" element={<AlbumsPage />} />
        <Route path="/albums/:id" element={<EachAlbumPage />} />
      </Routes>
    </>
  );
}

export default App;
