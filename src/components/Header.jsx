import React from "react";
import NavButton from "./NavButton";



const Header = ({ className }) => {
  return (
    <nav className={`flex gap-2 mb-4 ${className}`}>
      <NavButton text="Produtos" to="/" end />
      <NavButton text="Contato" to="contato" />
    </nav>
  );
};

export default Header;
