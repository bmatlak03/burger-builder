import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";
import classes from "./CheckoutSummary.module.css";
const checkoutSummary = ({
  ingredients,
  onCheckoutCancelled,
  onCheckoutContinued,
}) => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>We hope it tastes well!</h1>
      <div style={{ width: "100%", margin: "auto" }}>
        <Burger ingredients={ingredients} />
        <Button btnType="Danger" clicked={onCheckoutCancelled}>
          CANCEL
        </Button>
        <Button btnType="Success" clicked={onCheckoutContinued}>
          CONTINUE
        </Button>
      </div>
    </div>
  );
};

export default checkoutSummary;
