import { createAsyncThunk } from "@reduxjs/toolkit";
import { ASYNC_ROUTES } from "../constants/redux.constants";
import { pizzaService } from "../services/pizza.service";

export const pizzaAsync = createAsyncThunk(
  ASYNC_ROUTES.GET_PIZZA,
  async () => await pizzaService()
);
