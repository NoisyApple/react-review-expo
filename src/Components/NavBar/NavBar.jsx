import "./NavBar.scss";

import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import Switch from "../Switch/Switch";
import { toggleDarkTheme } from "../../Store/darkThemeSlice";

const NavBar = () => {
  const dispatch = useDispatch();

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
        <div className="nav-bar__dark-theme-switch-container">
          <p className="nav-bar__dark-theme-switch-label">Dark Theme: </p>
          <Switch
            onChange={() => {
              dispatch(toggleDarkTheme());
            }}
          />
        </div>
      </ul>
    </nav>
  );
};

export default NavBar;
