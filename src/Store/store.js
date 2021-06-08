import { configureStore } from "@reduxjs/toolkit";
import darkThemeReducer from "./darkThemeSlice";
import counterReducer from "./counterSlice";
import colorSelectorReducer from "./colorSelectorSlice";

export default configureStore({
  reducer: {
    darkTheme: darkThemeReducer,
    counter: counterReducer,
    colorSelector: colorSelectorReducer,
  },
});
