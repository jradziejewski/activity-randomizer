import { createSlice } from "@reduxjs/toolkit";

export const stage = createSlice({
  name: "stage",
  initialState: 0,
  reducers: {
    nextStage: (state) => {
      if (state > 0) return;
      return ++state;
    },
  },
});

export const { nextStage } = stage.actions;
export default stage.reducer;
