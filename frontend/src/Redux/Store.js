import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./userSlice";
import { InstituteApi } from "../api/InstituteApi";

export const store = configureStore({
  reducer: {
    user: userReducer,
    [InstituteApi.reducerPath]:InstituteApi.reducer
  },
  middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware().concat(InstituteApi.middleware)
});