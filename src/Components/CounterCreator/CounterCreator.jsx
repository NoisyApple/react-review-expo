import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createCounter } from "../../Store/counterSlice";

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
      <h1>Create a new counter here:</h1>
      <form onSubmit={handleSubmit}>
        <div className="counter-creator__field">
          <label htmlFor="counterName">Counter name:</label>
          <input
            name="counterName"
            value={counterName}
            onChange={(e) => setCounterName(e.target.value)}
          />
        </div>
        <div className="counter-creator__field">
          <label htmlFor="initialValue">Initual value:</label>
          <input
            name="initialValue"
            value={initialValue}
            onChange={(e) => setInitialValue(e.target.value)}
          />
        </div>
        <button type="submit">CREATE</button>
      </form>
    </div>
  );
};

export default CounterCreator;
