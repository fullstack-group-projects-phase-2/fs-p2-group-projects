import { createSlice } from "@reduxjs/toolkit";
import axios from "../../components/instances/instance";

const initialState = {
  data: [],
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      console.log(payload, "ini paylod <<<<<<");
      state.data.push(payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { login } = loginSlice.actions;

export function userLogin(user) {
  return async (dispatch) => {
    try {
      const { data } = await axios.post("/users/login", user);
      const token = data.access_token;
      const access_token = localStorage.setItem("access_token", token);

      dispatch(login(access_token));
    } catch (error) {
      console.log(error);
    }
  };
}

export default loginSlice.reducer;
