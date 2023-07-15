import { configureStore } from "@reduxjs/toolkit";
import activityOptionsReducer from "./reducer";

export const store = configureStore({
  reducer: {
    activityOptions: activityOptionsReducer,
  },
});
