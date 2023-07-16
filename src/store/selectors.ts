import { RootState } from "./store";

export const selectActiveOptions = (state: RootState) =>
  state.activityOptions.activeOptions;
