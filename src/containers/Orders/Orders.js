import { useEffect } from "react";
import { connect } from "react-redux";
import axios from "../../axios-orders";
import Order from "../../components/Order/Order";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import * as actions from "../../store/actions/index";

const Orders = ({
  token,
  userID,
  onFetchOrders,
  loading,
  orders,
  onDeleteOrder,
}) => {
  useEffect(() => {
    onFetchOrders(token, userID);
  }, [onFetchOrders, token, userID]);

  const removeOrderHandler = (orderId) => {
    onDeleteOrder(orderId, orders);
  };

  let ordersList = <Spinner />;
  if (!loading) {
    ordersList = orders.map((order) => (
      <Order
        key={order.id}
        ingredients={order.ingredients}
        price={order.price}
        orderRemove={() => removeOrderHandler(order.id)}
      />
    ));
  }
  if (orders.length <= 0 && !loading) {
    ordersList = (
      <p style={{ textAlign: "center" }}>You haven't ordered anything yet</p>
    );
  }
  return <div>{ordersList}</div>;
};
const mapStateToProps = (state) => {
  return {
    orders: state.order.orders,
    loading: state.order.loading,
    token: state.auth.token,
    userID: state.auth.userID,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onFetchOrders: (token, userID) =>
      dispatch(actions.fetchOrders(token, userID)),
    onDeleteOrder: (orderId, orders) =>
      dispatch(actions.deleteOrder(orderId, orders)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(Orders, axios));
