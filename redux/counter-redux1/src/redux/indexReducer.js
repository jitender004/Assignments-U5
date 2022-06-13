import { reducerCounter } from "./reducer";
import { combineReducers } from "redux";

const allReducer = combineReducers({
  reducerCounter,
});
export default allReducer;

// export default combineReducers({
//   reducerCounter,
// });
