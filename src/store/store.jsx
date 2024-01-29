import { configureStore } from "@reduxjs/toolkit";
import AuthenticationSlice from "./authentication";

const store = configureStore({
  reducer: { auth: AuthenticationSlice }
});

export default store;
