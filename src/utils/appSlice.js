import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "appSlice",
  initialState: {
    isMenuOpen: true,
    videoSearches: [],
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
    addVideos: (state, action) => {
      state.videoSearches = action.payload;
    },
  },
});
export const { toggleMenu, closeMenu, addVideos } = appSlice.actions;
export default appSlice.reducer;
