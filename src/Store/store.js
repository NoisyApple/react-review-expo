import { configureStore } from "@reduxjs/toolkit";
import darkThemeReducer from "./darkThemeSlice";
import counterReducer from "./counterSlice";

export default configureStore({
  reducer: {
    darkTheme: darkThemeReducer,
    counter: counterReducer,
  },
});
