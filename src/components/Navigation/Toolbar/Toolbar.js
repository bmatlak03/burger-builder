import classes from "./Toolbar.module.css";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import LoggedUser from "../LoggedUser/LoggedUser";
const toolbar = ({ open, isAuth }) => {
  return (
    <header className={classes.Toolbar}>
      <DrawerToggle clicked={open} />
      <div className={classes.Logo}>
        <Logo />
      </div>
      <LoggedUser loggedIn={isAuth} />
      <nav className={classes.DesktopOnly}>
        <NavigationItems isAuthenticated={isAuth} />
      </nav>
    </header>
  );
};

export default toolbar;
