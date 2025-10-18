import { Link, Route, Routes } from "react-router";
import "./Header.css" 
export function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/albums">Albums</Link>
      </nav>
    </header>
  );
}
