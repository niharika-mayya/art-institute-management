import { createSlice } from "@reduxjs/toolkit";

//Default state
const initialState={
    username: "",
    userType:""
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