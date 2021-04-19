import { memo } from "react";
import Aux from "../../../hoc/hoc";
import Backdrop from "../Backdrop/Backdrop";
import classes from "./Modal.module.css";

const Modal = ({ children, show, modalClosed }) => {
  const modalStyles = {
    transform: show ? "translateY(0)" : "translateY(-100vh)",
    opacity: show ? "1" : "0",
  };
  return (
    <Aux>
      <Backdrop show={show} clicked={modalClosed} />
      <div className={classes.Modal} style={modalStyles}>
        {children}
      </div>
    </Aux>
  );
};

export default memo(Modal);
