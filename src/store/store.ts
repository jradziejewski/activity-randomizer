import { configureStore } from "@reduxjs/toolkit";
import activityOptionsReducer, { ActivityOptionsState } from "./reducer";

export interface RootState {
  activityOptions: ActivityOptionsState;
}

export const store = configureStore({
  reducer: {
    activityOptions: activityOptionsReducer,
  },
});
