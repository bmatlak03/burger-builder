import classes from "./Input.module.css";
const input = ({
  invalid,
  shouldValidate,
  touched,
  elementType,
  elementConfig,
  label,
  value,
  changed,
}) => {
  let inputElement = null;
  const inputClasses = [classes.InputElement];

  if (invalid && shouldValidate && touched) {
    inputClasses.push(classes.Invalid);
  }
  switch (elementType) {
    case "input":
      inputElement = (
        <input
          className={inputClasses.join(" ")}
          {...elementConfig}
          value={value}
          onChange={changed}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          className={inputClasses.join(" ")}
          {...elementConfig}
          value={value}
          onChange={changed}
        />
      );
      break;
    case "select":
      inputElement = (
        <select
          onChange={changed}
          className={inputClasses.join(" ")}
          value={value}
        >
          {elementConfig.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;
    default:
      inputElement = (
        <input
          className={inputClasses.join(" ")}
          {...elementConfig}
          value={value}
        />
      );
  }
  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{label}</label>
      {inputElement}
    </div>
  );
};
export default input;
