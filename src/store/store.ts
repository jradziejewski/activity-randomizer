import { configureStore } from "@reduxjs/toolkit";
import activityOptionsReducer, {
  ActivityOptionsState,
} from "./features/activityOptions";
import stageReducer from "./features/stage";

export interface RootState {
  activityOptions: ActivityOptionsState;
  stage: number;
}

export const store = configureStore({
  reducer: {
    activityOptions: activityOptionsReducer,
    stage: stageReducer,
  },
});
