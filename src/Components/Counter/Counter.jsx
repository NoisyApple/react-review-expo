import "./Counter.scss";

import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  decrementCounter,
  deleteCounter,
  incrementCounter,
} from "../../Store/counterSlice";
import Button from "../Button/Button";
import { COLORS } from "../../Constants";

const Counter = ({ id }) => {
  const count = useSelector((store) => store.counter.counters[id].value);
  const title = useSelector((store) => store.counter.counters[id].title);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementCounter(id));
  };

  const handleDecrement = () => {
    dispatch(decrementCounter(id));
  };

  const handleDelete = () => {
    dispatch(deleteCounter(id));
  };

  return (
    <div className="counter">
      <h1>{title}</h1>
      <div className="counter__buttons-container">
        <div className="counter__count-value">{count}</div>
        <Button
          color={COLORS.tuftsBlue}
          className="counter__button"
          onClick={handleIncrement}
        >
          +
        </Button>
        <Button
          color={COLORS.tuftsBlue}
          className="counter__button"
          onClick={handleDecrement}
        >
          -
        </Button>
        <Button
          color={COLORS.razzmatazz}
          className="counter__button"
          onClick={handleDelete}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default Counter;
