import { configureStore } from "@reduxjs/toolkit";
import userReducer, { userSliceName } from "./user";
// import logger from "redux-logger";

export const store = configureStore({
  reducer: {
    [userSliceName]: userReducer,
  },
  devTools: true,
  // enhancers: [],
});
