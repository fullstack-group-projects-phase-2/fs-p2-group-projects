import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.data = payload;
    },
  },
});

export function userLogin(user) {
  return async (dispatch) => {
    try {
      const { data } = await axios.post("http://localhost:3000/login", user);
      const token = data.access_token;
      localStorage.setItem("access_token", token);

      dispatch(login(token));
    } catch (error) {
      console.log(error);
    }
  };
}

// Action creators are generated for each case reducer function
export const { login } = loginSlice.actions;

export default loginSlice.reducer;
