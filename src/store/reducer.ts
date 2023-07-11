import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = { name: "dummy", count: 0 };

export const dummySlice = createSlice({
  name: "dummy",
  initialState: initialState,
  reducers: {
    changeName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    increaseCount: (state) => {
      state.count += 1;
    },
    decreaseCount: (state) => {
      state.count -= 1;
    },
  },
});

export const { changeName, increaseCount, decreaseCount } = dummySlice.actions;
export default dummySlice.reducer;
