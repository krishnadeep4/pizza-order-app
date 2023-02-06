import { createSlice } from "@reduxjs/toolkit";
import { userLoginAsync } from "../asyncThunk/auth.asyncThunk";
import { THUNK_STATUS } from "../constants/redux.constants";

const initialState = {
    user: null,
    token: null,
    userLoginStatus: null,
};

export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    removeToken: (state, action) => {
      state.token = null;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userLoginAsync.pending, (state, action) => {
      state.userLoginStatus = THUNK_STATUS.LOADING;
    });
    builder.addCase(userLoginAsync.fulfilled, (state, action) => {
      state.userLoginStatus = THUNK_STATUS.SUCCESS;
      state.token = action.payload.data.token;
      state.user = action.payload.data.data;
    });
    builder.addCase(userLoginAsync.rejected, (state, action) => {
      state.userLoginStatus = THUNK_STATUS.FAILED;
    });
  },
});

export const { removeToken } = AuthSlice.actions;

export default AuthSlice.reducer;
