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
  },
});

export const { toggleDarkTheme } = darkThemeSlice.actions;

export default darkThemeSlice.reducer;
