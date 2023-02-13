import { createSlice } from "@reduxjs/toolkit";
import { pizzaAsync } from "../asyncThunk/pizzas.asyncThunk";
import { THUNK_STATUS } from "../constants/redux.constants";

const initialState = {
  pizzaData: null,
  pizzaStatus: null,
};
export const PizzaSlice = createSlice({
  name: "pizzas",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(pizzaAsync.pending, (state, action) => {
      state.pizzaStatus = THUNK_STATUS.LOADING;
    });
    builder.addCase(pizzaAsync.fulfilled, (state, action) => {
      state.pizzaStatus = THUNK_STATUS.SUCCESS;
    });
    builder.addCase(pizzaAsync.rejected, (state, action) => {
      state.pizzaStatus = THUNK_STATUS.FAILED;
    });
  },
});

export default PizzaSlice.reducer;
