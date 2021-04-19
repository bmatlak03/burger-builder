import classes from "./Button.module.css";
const button = ({ children, clicked, btnType, disabled }) => (
  <button
    disabled={disabled}
    className={[classes.Button, classes[btnType]].join(" ")}
    onClick={clicked}
  >
    {children}
  </button>
);

export default button;
