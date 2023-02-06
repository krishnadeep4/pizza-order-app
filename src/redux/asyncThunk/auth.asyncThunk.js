import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserLoginService } from "../services/auth.service";
import { ASYNC_ROUTES } from "../constants/redux.constants";

export const userLoginAsync = createAsyncThunk(  
  ASYNC_ROUTES.USER_LOGIN,
  async (payload) => await UserLoginService(payload)
);