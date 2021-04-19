import axios from "axios";
import { delay } from "redux-saga/effects";
import { put, call } from "redux-saga/effects";
import * as actions from "../actions/index";

export function* logoutSaga(action) {
  yield call([localStorage, "removeItem"], "token");
  yield call([localStorage, "removeItem"], "expirationDate");
  yield call([localStorage, "removeItem"], "userID");
  yield call([localStorage, "removeItem"], "email");
  yield put(actions.logoutSucceed());
}

export function* checkAuthTimeoutSaga(action) {
  yield delay(action.expirationTime * 1000);
  yield put(actions.logout());
}
export function* authUserSaga(action) {
  const { email, password, isSignUp } = action;
  yield put(actions.authStart());
  const authData = {
    email,
    password,
    returnSecureToken: true,
  };
  let url =
    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDgQdSnnIuUgFQCVqLmTExPLymC9U1mMNY";
  if (!isSignUp) {
    url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDgQdSnnIuUgFQCVqLmTExPLymC9U1mMNY";
  }
  try {
    const response = yield axios.post(url, authData);
    const expirationDate = yield new Date(
      new Date().getTime() + response.data.expiresIn * 1000
    );
    yield localStorage.setItem("token", response.data.idToken);
    yield localStorage.setItem("email", response.data.email);
    yield localStorage.setItem("expirationDate", expirationDate);
    yield localStorage.setItem("userID", response.data.localId);
    yield put(
      actions.authSuccess(response.data.idToken, response.data.localId)
    );
    yield put(actions.checkAuthTimeout(response.data.expiresIn));
  } catch (err) {
    yield put(actions.authFail(err.response.data.error));
  }
}
export function* authCheckStateSaga(action) {
  const { logout, checkAuthTimeout, authSuccess } = actions;
  const token = yield localStorage.getItem("token");

  if (!token) {
    yield put(logout());
  } else {
    const expirationDate = yield new Date(
      localStorage.getItem("expirationDate")
    );
    if (expirationDate <= new Date()) {
      yield put(logout());
    } else {
      const userID = localStorage.getItem("userID");
      yield put(authSuccess(token, userID));
      yield put(
        checkAuthTimeout(
          (expirationDate.getTime() - new Date().getTime()) / 1000
        )
      );
    }
  }
}
