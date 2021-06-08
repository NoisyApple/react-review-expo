import { createSlice } from "@reduxjs/toolkit";

export const colorSelectorSlice = createSlice({
  name: "colorSelector",
  initialState: {
    color: "#000000",
  },
  reducers: {
    setSelectorColor: (state, action) => {
      state.color = action.payload;
    },
  },
});

export const { setSelectorColor } = colorSelectorSlice.actions;

export default colorSelectorSlice.reducer;
