import { useState } from "react";
import { connect } from "react-redux";
import classes from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
const Layout = ({ isAuthenticated, children }) => {
  const [showSideDrawer, setShowSideDrawer] = useState(false);
  const sideDrawerOpenHandler = () => setShowSideDrawer(true);

  const sideDrawerClosedHandler = () => setShowSideDrawer(false);

  return (
    <>
      <Toolbar isAuth={isAuthenticated} open={sideDrawerOpenHandler} />
      <SideDrawer
        isAuth={isAuthenticated}
        open={showSideDrawer}
        closed={sideDrawerClosedHandler}
      />
      <main className={classes.Content}>{children}</main>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};
export default connect(mapStateToProps)(Layout);
