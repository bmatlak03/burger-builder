import classes from "./BuildControl.module.css";
const BuildControl = ({ label, added, removed, disabled }) => {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{label}</div>
      <button tabIndex="" className={classes.More} onClick={added}>
        More
      </button>
      <button className={classes.Less} onClick={removed} disabled={disabled}>
        Less
      </button>
    </div>
  );
};

export default BuildControl;
