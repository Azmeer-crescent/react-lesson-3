import { IS_LOADING, UPDATE_COUNTER } from "../constants/action-types";

const initialState = {
  isLoading: false,
  countGlobal: 0,
  hasError: false
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case IS_LOADING:
      return { ...state, isLoading: action.payload }

    case UPDATE_COUNTER:
      return { ...state, countGlobal: action.payload }

    default:
      return state;
  }
}

export default rootReducer;