import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "searchSlice",
  initialState: {},
  reducers: {
    cacheResults: (state, action) => {
      return { ...action.payload, ...state };
    },
  },
});
export const { cacheResults } = searchSlice.actions;
export default searchSlice.reducer;
