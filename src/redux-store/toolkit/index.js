import { combineReducers } from "redux";
import { authSlice } from "./auth/authSlice";

const reducer = combineReducers({
  auth: authSlice.reducer,
});

export default reducer;
