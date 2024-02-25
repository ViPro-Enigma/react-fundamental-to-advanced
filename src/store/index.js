import { combineReducers } from "redux";
import { counterReducer } from "./counter";
import { messageReducer } from "./message";

export const reducers = combineReducers({
  counter: counterReducer,
  message: messageReducer,
});
