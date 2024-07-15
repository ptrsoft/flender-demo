import { createSlice } from "@reduxjs/toolkit";
import {} from "./authThunk";

const initialState = {
  loginStatus: { status: false },
};

export const authSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    onLogin: (state, action) => {
      state.loginStatus = { status: action.payload };
    },
  },
  extraReducers: (builder) => {
    // builder.addCase(login.pending.toString(), (state) => {
    //   return {
    //     ...state,
    //     loginRes: { status: APIstatus.IN_PROGRESS, data: [] },
    //   };
    // });
    // builder.addCase(login.fulfilled.toString(), (state, action) => {
    //   return {
    //     ...state,
    //     loginRes: { status: APIstatus.SUCCESS, data: action.payload },
    //   };
    // });
    // builder.addCase(login.rejected.toString(), (state) => {
    //   return {
    //     ...state,
    //     loginRes: { status: APIstatus.FAILURE, data: [] },
    //   };
    // });
  },
});

export const { onLogin } = authSlice.actions;
