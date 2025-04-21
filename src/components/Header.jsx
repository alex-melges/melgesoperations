import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="p-4 bg-gray-900 text-white">
      <nav className="flex gap-4 justify-center">
        <Link to="/">Quem Sou Eu</Link>
        <Link to="/projetos">Projetos</Link>
        <Link to="/blogs">Blogs Pessoais</Link>
        <Link to="/contato">Contato</Link>
      </nav>
    </header>
  );
}

export default Header;
