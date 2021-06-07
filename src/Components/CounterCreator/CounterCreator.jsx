import "./CounterCreator.scss";

import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { createCounter } from "../../Store/counterSlice";
import Button from "../Button/Button";
import { COLORS } from "../../Constants";

const CounterCreator = () => {
  const [counterName, setCounterName] = useState("");
  const [initialValue, setInitialValue] = useState(0);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      createCounter({ title: counterName, value: parseInt(initialValue) })
    );
  };

  return (
    <div className="counter-creator">
      <div className="counter-creator__container">
        <h1 className="counter-creator__title">Create a new counter:</h1>
        <form className="counter-creator__form" onSubmit={handleSubmit}>
          <div className="counter-creator__field">
            <label className="counter-creator__label" htmlFor="counterName">
              Counter name:
            </label>
            <input
              className="counter-creator__input"
              name="counterName"
              value={counterName}
              onChange={(e) => setCounterName(e.target.value)}
            />
          </div>
          <div className="counter-creator__field">
            <label className="counter-creator__label" htmlFor="initialValue">
              Initual value:
            </label>
            <input
              className="counter-creator__input"
              name="initialValue"
              value={initialValue}
              onChange={(e) => setInitialValue(e.target.value)}
            />
          </div>
          <Button
            className="counter-creator__button"
            color={COLORS.tuftsBlue}
            type="submit"
          >
            CREATE
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CounterCreator;
