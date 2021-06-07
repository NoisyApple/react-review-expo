import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    key: 3,
    counters: {
      c1: { title: "counter 1", value: 0 },
      c2: { title: "counter 2", value: 5 },
    },
  },
  reducers: {
    incrementCounter: (state, action) => {
      state.counters[action.payload].value += 1;
    },
    decrementCounter: (state, action) => {
      state.counters[action.payload].value -= 1;
    },
    createCounter: (state, action) => {
      const newKey = `c${state.key}`;

      state.counters[newKey] = action.payload;

      state.key += 1;
    },
    deleteCounter: (state, action) => {
      delete state.counters[action.payload];
    },
  },
});

export const {
  incrementCounter,
  decrementCounter,
  createCounter,
  deleteCounter,
} = counterSlice.actions;

export default counterSlice.reducer;
