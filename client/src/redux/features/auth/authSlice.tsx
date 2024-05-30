import { persistor } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";
import {User} from '../../../app/types'

//send request with authoization header include the token there and revalidate on page reload

type authSlice = {
  token : string,
  newUser:boolean,
  user: User | null
}

const initialState: authSlice = {
  token: "",
  user:null ,
  newUser: false,
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
      state.user = null;
      console.log("removing state")
    
    },
  },
});

export const { userRegistration, userLoggedOut, userLoggedIn } =
  authSlice.actions;

export default authSlice.reducer;
