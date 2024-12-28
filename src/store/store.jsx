import { configureStore } from "@reduxjs/toolkit";
import { authReducer, dateReducer, ItemsReducer } from "./authentication";

const store = configureStore({
  reducer: {
    auth: authReducer,
    date: dateReducer, 
    items: ItemsReducer,
  },
});

export default store;
