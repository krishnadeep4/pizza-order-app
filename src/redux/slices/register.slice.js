import { createSlice } from "@reduxjs/toolkit";
import { userRegisterAsync } from "../asyncThunk/register.asyncThunk";
import { THUNK_STATUS } from "../constants/redux.constants";

const initialState = {
    userLoginStatus: null,
};
export const RegisterSlice = createSlice({
  name: "register",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userRegisterAsync.pending, (state, action) => {
      state.userLoginStatus = THUNK_STATUS.LOADING;
    });
    builder.addCase(userRegisterAsync.fulfilled, (state, action) => {
      state.userLoginStatus = THUNK_STATUS.SUCCESS;
    });
    builder.addCase(userRegisterAsync.rejected, (state, action) => {
      state.userLoginStatus = THUNK_STATUS.FAILED;
    });
  },
});

export default RegisterSlice.reducer;
