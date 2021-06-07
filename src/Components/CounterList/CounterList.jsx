import "./CounterList.scss";

import React from "react";
import { useSelector } from "react-redux";

import Counter from "../Counter/Counter";

const CounterList = () => {
  const counters = useSelector((state) => state.counter.counters);

  return (
    <div className="counter-list">
      <div className="counter-list__container">
        <h1 className="counter-list__title">Counter list:</h1>
        {Object.keys(counters).length > 0 ? (
          Object.keys(counters).map((key) => {
            const { value } = counters[key];

            return (
              <div key={key} className="counter-list__item">
                <Counter id={key} startValue={value} />
              </div>
            );
          })
        ) : (
          <p className="counter-list__description">
            {"You don't have any counters yet 🥵"}
          </p>
        )}
      </div>
    </div>
  );
};

export default CounterList;
