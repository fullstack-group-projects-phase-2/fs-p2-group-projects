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

export function addUser(newUser) {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(
        "http://localhost:3000/register",
        newUser
      );
      dispatch(register(data));
    } catch (error) {
      console.log(error);
    }
  };
}

// Action creators are generated for each case reducer function
export const { newUser } = registerSlice.actions;

export default registerSlice.reducer;
