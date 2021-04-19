import { useEffect } from "react";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import * as actions from "./store/actions/index";
import Logout from "./containers/Auth/Logout/Logout";
import asyncComponent from "./hoc/asyncComponent/asyncComponent";
import Account from "./components/Account/Account";
const asyncCheckout = asyncComponent(() => {
  return import("./containers/Checkout/Checkout");
});
const asyncOrders = asyncComponent(() => {
  return import("./containers/Orders/Orders");
});
const asyncAuth = asyncComponent(() => {
  return import("./containers/Auth/Auth");
});
const App = ({ isAuthenticated, onTryAutoSingup }) => {
  useEffect(() => {
    onTryAutoSingup();
  }, [onTryAutoSingup]);

  let routes = (
    <Switch>
      <Route path="/auth" component={asyncAuth} />
      <Route path="/" exact component={BurgerBuilder} />
      <Redirect to="/" />
    </Switch>
  );

  if (isAuthenticated) {
    routes = (
      <Switch>
        <Route path="/checkout" component={asyncCheckout} />
        <Route path="/orders" component={asyncOrders} />
        <Route path="/auth" component={asyncAuth} />
        <Route path="/logout" component={Logout} />
        <Route path="/" exact component={BurgerBuilder} />
        <Route path="/account" component={Account} />
        <Redirect to="/" />
      </Switch>
    );
  }

  return (
    <div>
      <Layout>{routes}</Layout>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutoSingup: () => dispatch(actions.authCheckState()),
  };
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
