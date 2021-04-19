import classes from "./DrawerToggle.module.css";
const drawerToggle = ({ clicked }) => (
  <div onClick={clicked} className={classes.DrawerToggle}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default drawerToggle;
