import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import ContactData from "./ContactData/ContactData";
const Checkout = ({ history, purchased, ings, match }) => {
  const checkoutContinuedHandler = () => {
    history.replace("/checkout/contact-data");
  };
  const checkoutCancelledHandler = () => {
    history.goBack();
  };

  let summary = <Redirect to="/" />;

  if (ings) {
    const purchasedRedirect = purchased ? <Redirect to="/" /> : null;
    summary = (
      <div>
        {purchasedRedirect}
        <CheckoutSummary
          ingredients={ings}
          onCheckoutContinued={checkoutContinuedHandler}
          onCheckoutCancelled={checkoutCancelledHandler}
        />
        <Route path={match.path + "/contact-data"} component={ContactData} />
      </div>
    );
  }
  return <div>{summary}</div>;
};

const mapStateToProps = (state) => {
  return {
    ings: state.burgerBuilder.ingredients,
    purchased: state.order.purchased,
  };
};

export default connect(mapStateToProps)(Checkout);
