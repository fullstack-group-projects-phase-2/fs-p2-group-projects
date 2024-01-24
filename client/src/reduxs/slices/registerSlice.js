import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: {},
};

export const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    register: (state, { payload }) => {
      state.data = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { register } = registerSlice.actions;

export function addUser(newUser) {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(
        "http://localhost:3000/users/register",
        newUser
      );

      dispatch(register(data));
    } catch (error) {
      console.log(error);
    }
  };
}

export default registerSlice.reducer;
