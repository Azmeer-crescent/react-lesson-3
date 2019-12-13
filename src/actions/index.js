import { IS_LOADING, UPDATE_COUNTER } from "../constants/action-types";

export function isLoading(payload) {
  return { type: IS_LOADING, payload };
}

export function updateCounter(payload) {
  return { type: UPDATE_COUNTER, payload };
}


