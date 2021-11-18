import { combineReducers } from "redux";
import userReducer from "./users";

// total reducers object
export default combineReducers({
  userReducer: userReducer,
  // other
});
