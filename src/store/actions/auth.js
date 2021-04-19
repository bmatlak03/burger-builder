import * as actionTypes from "./actionTypes";

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};
export const authSuccess = (token, userID) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    idToken: token,
    userID,
  };
};
export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error,
  };
};
export const logout = () => {
  // localStorage.removeItem("token");
  // localStorage.removeItem("expirationDate");
  // localStorage.removeItem("userID");
  return {
    type: actionTypes.AUTH_INITIATE_LOGOUT,
  };
};
export const logoutSucceed = () => {
  return {
    type: actionTypes.AUTH_LOGOUT,
  };
};
export const checkAuthTimeout = (expirationTime) => {
  return {
    type: actionTypes.AUTH_CHECK_TIMEOUT,
    expirationTime,
  };
};

export const auth = (email, password, isSignUp) => {
  return {
    type: actionTypes.AUTH_USER,
    email,
    password,
    isSignUp,
  };
};

export const setAuthRedirectPath = (path) => {
  return {
    type: actionTypes.SET_AUTH_REDIRECT_PATH,
    path: path,
  };
};
export const authCheckState = () => {
  return {
    type: actionTypes.AUTH_CHECK_STATE,
  };
};
