import React, { useEffect, useRef, useState } from "react";
import { NavLink, useMatch } from "react-router-dom";

const NavButton = ({ to, text }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? activeStyle : baseStyle)}
    >
      {text}
    </NavLink>
  );
};

const baseStyle =
  "px-4 py-2 text-white rounded-md transition-colors bg-blue-300 hover:bg-blue-200";
const activeStyle =
  "px-4 py-2 text-white rounded-md transition-colors bg-blue-400 hover:bg-blue-200";
export default NavButton;
