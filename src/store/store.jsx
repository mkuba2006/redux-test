import { configureStore } from "@reduxjs/toolkit";
import { authReducer, dateReducer } from "./authentication";

const store = configureStore({
  reducer: {
    auth: authReducer,
    date: dateReducer, 
  },
});

export default store;
