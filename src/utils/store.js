import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import searchReducer from "./searchSlice";
import chartReducer from "./chartSlice";

const store = configureStore({
  reducer: { app: appReducer, search: searchReducer, chart: chartReducer },
});

export default store;
