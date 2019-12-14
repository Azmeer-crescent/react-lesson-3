import { IS_LOADING, HAS_ERROR, UPDATE_COUNTER, FETCHUSERS_SUCCESS } from "../constants/action-types";

const initialState = {
  isLoading: false,
  countGlobal: 0,
  users: [],
  hasError: false,
  errorMsg: '',
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case IS_LOADING:
      return { ...state, isLoading: action.payload }

    case HAS_ERROR:
      return { ...state, hasError: true, errorMsg: action.payload }

    case UPDATE_COUNTER:
      return { ...state, countGlobal: action.payload }

    case FETCHUSERS_SUCCESS:
      return { ...state, users: action.payload }

    default:
      return state;
  }
}

export default rootReducer;