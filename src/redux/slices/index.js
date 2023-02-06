import { combineReducers } from "redux";
import authSlice from "./auth.slice";

export default combineReducers({
    auth: authSlice
});