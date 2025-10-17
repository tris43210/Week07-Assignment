import { Link, Route, Routes } from "react-router";

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
