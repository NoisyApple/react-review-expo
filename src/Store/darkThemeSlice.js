import { createSlice } from "@reduxjs/toolkit";

export const darkThemeSlice = createSlice({
  name: "darkTheme",
  initialState: {
    isEnabled: false,
  },
  reducers: {
    toggleDarkTheme: (state) => {
      state.isEnabled = !state.isEnabled;
    },
    setDarkTheme: (state, action) => {
      state.isEnabled = action.payload;
    },
  },
});

export const { toggleDarkTheme, setDarkTheme } = darkThemeSlice.actions;

export default darkThemeSlice.reducer;
