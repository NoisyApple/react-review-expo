import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementCounter,
  deleteCounter,
  incrementCounter,
} from "../../Store/counterSlice";

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
    <div>
      <h1>{title}</h1>
      <h2>Count: {count}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Counter;
