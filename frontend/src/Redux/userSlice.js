import { createSlice } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";

const token=localStorage.getItem("token");

//Default state
let initialState={
    username: "",
    userType:""
}

if (token) {
    try {
        const user = jwtDecode(token);
        initialState = {
            username: user.username,
            userType: user.userType
        };
    } catch (error) {
        console.log("Invalid token");
    }
}

const userSlice = createSlice({
  name: "user", //Slice name
  initialState,
  //Functions to update state
  reducers: {
    setUser: (state, action) => {
      state.username = action.payload.username;
      state.userType = action.payload.userType;
    },
    clearUser: (state) => {
      state.username = "";
      state.userType = "";
    }
  }
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;