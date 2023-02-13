import { combineReducers } from "redux";
import authSlice from "./auth.slice";
import pizzaSlice from "./pizzas.slice";
import registerSlice from "./register.slice";
import cartSlice from "./cart.slice";

export default combineReducers({
  auth: authSlice,
  register: registerSlice,
  pizzas: pizzaSlice,
  cart: cartSlice,
});
