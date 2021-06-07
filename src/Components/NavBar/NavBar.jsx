import "./NavBar.scss";

import React from "react";
import { Link } from "react-router-dom";

import Switch from "../Switch/Switch";

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <ul className="nav-bar__list">
        <li className="nav-bar__list-item">
          <Link className="nav-bar__list-item-link" to="/">
            HOME
          </Link>
        </li>
        <li className="nav-bar__list-item">
          <Link className="nav-bar__list-item-link" to="/alt-path">
            Alt
          </Link>
        </li>
        <Switch />
      </ul>
    </nav>
  );
};

export default NavBar;
