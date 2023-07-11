import { configureStore } from "@reduxjs/toolkit";
import dummyReducer from "./reducer";

export const store = configureStore({
  reducer: {
    dummy: dummyReducer,
  },
});
