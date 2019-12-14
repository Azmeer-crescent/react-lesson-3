import { IS_LOADING, UPDATE_COUNTER, FETCHUSERS_SUCCESS, HAS_ERROR } from "../constants/action-types";

export function isLoading(payload) {
  return { type: IS_LOADING, payload };
}

export function hasError(payload) {
  return { type: HAS_ERROR, payload };
}

export function updateCounter(payload) {
  return { type: UPDATE_COUNTER, payload };
}

export function fetchUsers(payload) {
  return { type: FETCHUSERS_SUCCESS, payload };
}


