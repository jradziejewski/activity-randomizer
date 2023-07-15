import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = [
  { name: "drink", active: false },
  { name: "music", active: false },
  { name: "snack", active: false },
];

export const activityOptions = createSlice({
  name: "activityOptions",
  initialState: initialState,
  reducers: {
    toggleActivityOption: (state, action: PayloadAction<string>) => {
      const name = action.payload;
      const option = state.find((item) => item.name === name);
      if (option) {
        option.active = !option.active;
      }
    },
  },
});

export const { toggleActivityOption } = activityOptions.actions;
export default activityOptions.reducer;
