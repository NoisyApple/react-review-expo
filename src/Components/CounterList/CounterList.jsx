import React from "react";
import { useSelector } from "react-redux";
import Counter from "../Counter/Counter";

const CounterList = () => {
  const counters = useSelector((state) => state.counter.counters);

  return (
    <div className="counter-list">
      {Object.keys(counters).map((key) => {
        const { value } = counters[key];

        return <Counter key={key} id={key} startValue={value} />;
      })}
    </div>
  );
};

export default CounterList;
