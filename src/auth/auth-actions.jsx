const API = 'http://localhost:8080';

export const SET_AUTH_DATA = 'SET_AUTH_DATA';
export const setAuthData = authData => ({
  type: SET_AUTH_DATA,
  authData
});

export const CLEAR_AUTH_DATA = 'CLEAR_AUTH_DATA';
export const clearAuthData = () => ({
  type: CLEAR_AUTH_DATA
});

export const LOGOUT = 'LOGOUT';
export const logout = () => ({
  type: LOGOUT
});

export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const signupAction = () => ({
  type: SIGNUP_REQUEST
});

export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
const signupSuccessAction = user => ({
  type: SIGNUP_SUCCESS,
  user
});

export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';
const signupFailureAction = error => ({
  type: SIGNUP_FAILURE,
  error
});

export const signUp = user => dispatch => {
  dispatch(signupAction());

  return fetch(`${API}/api/users`, {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-type': 'application/json'
    }
  })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(signUpData => {
      dispatch(signupSuccessAction(signUpData));
      return signUpData;
    })
    .catch(err => {
      dispatch(signupFailureAction(err));
    });
};

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
const loginAction = () => ({
  type: LOGIN_REQUEST
});

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const loginSuccessAction = authData => ({
  type: LOGIN_SUCCESS,
  authData
});

export const LOGIN_FAILURE = 'LOGIN_FAILURE';
const loginFalureAction = error => ({
  type: LOGIN_FAILURE,
  error
});

export const logIn = user => dispatch => {
  dispatch(loginAction());
  return fetch(`${API}/api/auth/login`, {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(loginData => {
      dispatch(loginSuccessAction(loginData));
      return loginData;
    })
    .catch(err => {
      dispatch(loginFalureAction(err));
    });
};
