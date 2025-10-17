import "./App.css";
import { AlbumsPage } from "./Pages/AlbumsPage";
import { HomePage } from "./Pages/Homepage";
import { Routes, Route } from "react-router";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/albums" element={<AlbumsPage />} />
      </Routes>
    </>
  );
}

export default App;
