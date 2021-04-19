import axios from "../../axios-orders";
import { put } from "redux-saga/effects";
import * as actions from "../actions";
const token = localStorage.getItem("token");

axios.defaults.headers.common["userID"] = `Bearer ${token}`;

axios.defaults.headers.post["Content-Type"] = "application/json";
export function* purchaseBurgerSaga(action) {
  const {
    purchaseBurgerStart,
    purchaseBurgerSuccess,
    purchaseBurgerFail,
  } = actions;

  yield put(purchaseBurgerStart());
  try {
    const response = yield axios.post(
      `/orders.json?auth=${action.token}`,
      action.orderData
    );
    yield put(purchaseBurgerSuccess(response.data.name, action.orderData));
  } catch (err) {
    yield put(purchaseBurgerFail(err));
  }
}
export function* fetchOrdersSaga(action) {
  const { fetchOrdersStart, fetchOrdersSuccess, fetchOrdersFail } = actions;
  const { token, userID } = action;
  yield put(fetchOrdersStart());
  try {
    const response = yield axios.get("/orders.json", {
      params: {
        auth: token,
        orderBy: '"userID"',
        equalTo: `"${userID}"`,
      },
    });
    const fetchedOrders = [];
    for (let key in response.data) {
      fetchedOrders.push({ ...response.data[key], id: key });
    }
    yield put(fetchOrdersSuccess(fetchedOrders));
  } catch (err) {
    yield put(fetchOrdersFail(err));
  }
}
export function* removeOrder(action) {
  try {
    // yield fetch(
    //   `https://react-burger-builder-20033.firebaseio.com/`,
    //   {
    //     method: "DELETE",
    //     headers: {
    //       Authorization: "AIzaSyDgQdSnnIuUgFQCVqLmTExPLymC9U1mMNY",
    //       "Content-Type": "application/json",
    //       "Access-Control-Allow-Origin": "http://localhost:3000",
    //     },
    //     mode: "cors",
    //   }
    // );

    yield axios.delete(
      `/orders/${action.orderId}.json`,
      {
        params: {
          auth: token,
        },
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
      }
    );

    const ordersCopy = [...action.orders];
    const updatedOrders = ordersCopy.filter(
      (order) => order.id !== action.orderId
    );
    yield put(actions.deleteOrderSuccess(updatedOrders));
  } catch (error) {
    console.error(error);
  }
}
