import NavigationItem from "./NavigationItem/NavigationItem";
import classes from "./NavigationItems.module.css";
const NavigationItems = ({ isAuthenticated }) => {
  const OrdersLink = isAuthenticated && (
    <NavigationItem link="/orders">Orders</NavigationItem>
  );
  const AuthenticationLink = isAuthenticated ? (
    <NavigationItem link="/logout">Logout</NavigationItem>
  ) : (
    <NavigationItem link="/auth">Authenticate</NavigationItem>
  );
  const AccountLink = isAuthenticated && (
    <NavigationItem link="/account">My account</NavigationItem>
  );
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link="/">Burger Builder</NavigationItem>
      {OrdersLink}
      {AccountLink}
      {AuthenticationLink}
    </ul>
  );
};

export default NavigationItems;
