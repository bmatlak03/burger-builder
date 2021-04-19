import { NavLink } from "react-router-dom";
import classes from "./NavigationItem.module.css";
const navigationItem = ({ children, link }) => (
  <li className={classes.NavigationItem}>
    <NavLink to={link} activeClassName={classes.active} exact>
      {children}
    </NavLink>
  </li>
);

export default navigationItem;
