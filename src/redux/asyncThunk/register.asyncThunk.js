import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserRegisterService } from "../services/register.service";
import { ASYNC_ROUTES } from "../constants/redux.constants";

export const userRegisterAsync = createAsyncThunk(
  ASYNC_ROUTES.USER_REGISTER,
  async (payload) => await UserRegisterService(payload)
);
