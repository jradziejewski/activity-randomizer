import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Option {
  name: string;
}

export interface ActivityOptionsState {
  activityOptions: Option[];
  activeOptions: string[];
}

const initialState: ActivityOptionsState = {
  activityOptions: [{ name: "drink" }, { name: "music" }, { name: "snack" }],
  activeOptions: [],
};

export const activityOptions = createSlice({
  name: "activityOptions",
  initialState: initialState,
  reducers: {
    toggleActivityOption: (state, action: PayloadAction<string>) => {
      const name = action.payload;
      const index = state.activeOptions.indexOf(name);
      if (index === -1) {
        state.activeOptions.push(name);
      } else {
        state.activeOptions.splice(index, 1);
      }
    },
  },
});

export const { toggleActivityOption } = activityOptions.actions;
export default activityOptions.reducer;
