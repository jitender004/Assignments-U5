import { legacy_createStore as createStore } from "redux";
// import { reducer } from "./reducer";
 import { reducerCounter } from "./reducer";
// import allReducer from "./combineReducer";
// import { combineReducers } from "./indexReducer";
import allReducer from "./indexReducer";

export const store = createStore(reducerCounter,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
