import { ADD_COUNTER, ADD_NUM, REDUCE_COUNTER, RESET } from "./actionType";

const initialState = {
  counter: 0,
};

export const reducerCounter = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_COUNTER:
      return { ...state, counter: state.counter + payload };
    case REDUCE_COUNTER:
      return { ...state, counter: state.counter - payload };
    case RESET:
      return { counter: 0 };
    default:
      return state;
  }
};
