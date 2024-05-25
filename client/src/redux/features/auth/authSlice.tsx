import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  user: "",
  newUser:false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userRegistration: (state, action) => {
      state.token = action.payload.token;
      // state.user = action.payload.user;
    },
    userLoggedIn: (state, action) => {
      state.token = action.payload.accessToken;
      state.user = action.payload.user;
      state.newUser = action.payload?.newUser;
    },
    userLoggedOut: (state) => {
      state.token = "";
      state.user = "";
    },
  },
});

export const { userRegistration, userLoggedOut, userLoggedIn } =
  authSlice.actions;

  export default authSlice.reducer