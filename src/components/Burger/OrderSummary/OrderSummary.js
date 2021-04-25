import Button from "../../UI/Button/Button";
const orderSummary = ({
  ingredients,
  purchaseCancel,
  purchaseContinue,
  price,
}) => {
  const ingredientSummary = Object.keys(ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
        {ingredients[igKey]}
      </li>
    );
  });
  return (
    <>
      <h3>Your order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>
        <strong>Total Price: {price.toFixed(2)}$ </strong>
      </p>
      <p>Continue with checkout?</p>
      <Button clicked={purchaseCancel} btnType="Danger">
        CANCEL
      </Button>
      <Button clicked={purchaseContinue} btnType="Success">
        CONTINUE
      </Button>
    </>
  );
};

export default orderSummary;
