import * as actions from '../auth/auth-actions';
import { saveAuthData, clearAuthData } from '../auth/local-storage';

const initialState = {
  authenticating: false,
  isLoggedIn: false,
  user: null,
  jwt: null,
  error: null
};

export default function reducer(state = initialState, action) {
  //LOGIN AND SIGNUP REQUEST
  if (
    action.type === actions.LOGIN_REQUEST ||
    action.type === actions.SIGNUP_REQUEST
  ) {
    return {
      ...state,
      authenticating: true,
      isLoggedIn: false,
      user: null,
      jwt: null,
      error: null
    };
    //LOGIN AND SIGNUP REQUEST FAILURE
  } else if (
    action.type === actions.LOGIN_FAILURE ||
    action.type === actions.SIGNUP_FAILURE
  ) {
    return { ...state, authenticating: false, error: action.error };
    //LOGIN AND SIGNUP REQUEST SUCCESS
  } else if (
    action.type === actions.LOGIN_SUCCESS ||
    action.type === actions.SET_AUTH_DATA
  ) {
    saveAuthData(action.authData);
    return {
      ...state,
      authenticating: false,
      isLoggedIn: true,
      user: action.authData.user,
      jwt: action.authData.jwt
    };
    //LOGOUT REQUEST
  } else if (
    action.type === actions.LOGOUT ||
    action.type === actions.CLEAR_AUTH_DATA
  ) {
    clearAuthData();
    return { ...state, isLoggedIn: false, user: null, jwt: null };
  }
  return state;
}
