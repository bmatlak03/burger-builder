import reducer from "./auth";
import * as actionTypes from "../actions/actionTypes";

describe("auth reducer", () => {
  it("should return initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      token: null,
      userID: null,
      error: null,
      loading: false,
      authRedirectPath: "/",
    });
  });
  it("should store token upon login", () => {
    expect(
      reducer(
        {
          token: null,
          userID: null,
          error: null,
          loading: false,
          authRedirectPath: "/",
        },
        {
          type: actionTypes.AUTH_SUCCESS,
          idToken: "some-token",
          userID: "some-userID",
        }
      )
    ).toEqual({
      token: "some-token",
      userID: "some-userID",
      error: null,
      loading: false,
      authRedirectPath: "/",
    });
  });
});
