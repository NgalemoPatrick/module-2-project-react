import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <nav className="navbar-style">
      <div className="h-menu" onClick={()=> setOpenMenu(!openMenu)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={openMenu ? 'open' : ''}>
        <li>
          <NavLink to="/">About me</NavLink>
        </li>
        <li>
          <NavLink to="/Projects">Projects</NavLink>
        </li>
        <li>
          <NavLink to="/Contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
