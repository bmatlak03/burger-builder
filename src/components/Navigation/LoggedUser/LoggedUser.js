import classes from "./LoggedUser.module.css";
const LoggedUser = ({ loggedIn }) => {
  const loggedUserEmail = localStorage.getItem("email");
  let loggedUser = null;
  if (loggedIn) {
    loggedUser = (
      <p className={classes.Logged}>
        You are logged in as: <strong>{loggedUserEmail}</strong>
      </p>
    );
  }
  return loggedUser;
};

export default LoggedUser;
