import { configureStore } from "@reduxjs/toolkit";
import darkThemeReducer from "./darkThemeSlice";

export default configureStore({
  reducer: {
    darkTheme: darkThemeReducer,
  },
});
