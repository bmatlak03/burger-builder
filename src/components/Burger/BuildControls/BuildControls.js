import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";
const controls = [
  {
    label: "Salad",
    type: "salad",
  },
  {
    label: "Bacon",
    type: "bacon",
  },
  {
    label: "Cheese",
    type: "cheese",
  },
  {
    label: "Meat",
    type: "meat",
  },
];
const BuildControls = ({
  ingredientAdded,
  ingredientRemoved,
  disabled,
  price,
  purchasable,
  ordered,
  isAuth,
}) => {
  const buildControls = controls.map((buildControl) => (
    <BuildControl
      key={buildControl.label}
      label={buildControl.label}
      added={() => ingredientAdded(buildControl.type)}
      removed={() => ingredientRemoved(buildControl.type)}
      disabled={disabled[buildControl.type]}
    />
  ));
  return (
    <div className={classes.BuildControls}>
      <p>
        Total Price: <strong>{price.toFixed(2)} $</strong>
      </p>
      {buildControls}
      <button
        className={classes.OrderButton}
        disabled={!purchasable}
        onClick={ordered}
      >
        {isAuth ? "ORDER NOW!" : "SING UP TO ORDER"}
      </button>
    </div>
  );
};

export default BuildControls;
