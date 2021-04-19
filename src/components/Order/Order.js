import classes from "./Order.module.css";
import Button from "../UI/Button/Button";

const order = ({ price, orderRemove, ingredients }) => {
  const ingredientsTransformed = [];
  for (let ingredientName in ingredients) {
    ingredientsTransformed.push({
      name: ingredientName,
      amount: ingredients[ingredientName],
    });
  }
  const ingredientOutput = ingredientsTransformed.map((ingredient) => {
    return (
      <span
        key={ingredient.name}
        style={{
          textTransform: "capitalize",
          display: "inline-block",
          margin: "0 5px",
          border: "1px solid grey",
          padding: 5,
        }}
      >
        {ingredient.name} ({ingredient.amount})
      </span>
    );
  });

  return (
    <div className={classes.Order}>
      <p>Ingredients: {ingredientOutput} </p>
      <p>
        Price: <strong>USD {parseFloat(price).toFixed(2)}</strong>
      </p>
      <Button btnType="Delete" clicked={orderRemove}>
        DELETE
      </Button>
    </div>
  );
};

export default order;
