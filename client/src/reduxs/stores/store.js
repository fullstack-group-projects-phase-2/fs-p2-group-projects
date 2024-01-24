import { configureStore } from "@reduxjs/toolkit";
import registerSlice from "../slices/registerSlice";
import loginSlice from "../slices/loginSlice";

export const store = configureStore({
  reducer: {
    register: registerSlice,
    login: loginSlice,
  },
});
