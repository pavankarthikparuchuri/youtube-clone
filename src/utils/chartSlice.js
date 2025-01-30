import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVE_CHAT } from "./constants";

const chartSlice = createSlice({
  name: "chartSlice",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      state.messages.splice(OFFSET_LIVE_CHAT, 1);
      state.messages.unshift(action.payload);
    },
  },
});
export const { addMessage } = chartSlice.actions;
export default chartSlice.reducer;
