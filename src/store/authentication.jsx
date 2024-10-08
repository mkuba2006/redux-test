import { createSlice } from "@reduxjs/toolkit";
import { auth } from "../components/auth/firebase";
const defaultValue = {
  isLogged: "false",
};

const data = {
  day: 0,
  month: 0,
};

const AuthenticationSlice = createSlice({
  name: 'authentication',
  initialState: defaultValue,
  reducers: {
    form(prev) {
      prev.isLogged = "modal";
    },
    login(prev) {
      console.log(auth);
      
      prev.isLogged = "true";
    },
    logout(prev) {
      prev.isLogged = "false";
    },
  },
});

const DateSlice = createSlice({
  name: 'date',
  initialState: data,
  reducers: {
    getDate(state) {
      const currentDate = new Date();
      const day = currentDate.getDate();
      const month = currentDate.getMonth() + 1;
      state.day = parseInt(day, 10);
      state.month = parseInt(month, 10);
    },
  },
});

export const authReducer = AuthenticationSlice.reducer;
export const dateReducer = DateSlice.reducer;

export const AuthActions = AuthenticationSlice.actions;
export const DateActions = DateSlice.actions;
