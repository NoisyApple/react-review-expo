import "./Home.scss";

import React from "react";

import Button from "../Button/Button";
import { COLORS } from "../../Constants";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <h1 className="home__title">Hi There!</h1>
        <p className="home__description">You can manage counters here! 😸</p>
        <div className="home__buttons-container">
          <Link className="home__link" to="/counter-creator">
            <Button className="home__button" color={COLORS.tuftsBlue}>
              Create a counter
            </Button>
          </Link>
          <Link className="home__link" to="/counters">
            <Button className="home__button" color={COLORS.tuftsBlue}>
              Manage your counters
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
