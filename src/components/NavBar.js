import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar-style">
      <div className="h-menu">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul>
        <li>
          <NavLink to="/">ABOUT ME</NavLink>
        </li>
        <li>
          <NavLink to="/Projects">PROJECTS</NavLink>
        </li>
        <li>
          <NavLink to="/Contact">CONTACT</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
