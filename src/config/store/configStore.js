import { configureStore } from "@reduxjs/toolkit";
import modal from "../module/modal";

const store = configureStore({
  reducer: { modal },
});

export default store;
