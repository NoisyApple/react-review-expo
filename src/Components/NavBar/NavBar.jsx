import "./NavBar.scss";

import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/alt-path">Alt</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
