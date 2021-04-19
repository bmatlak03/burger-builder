import classes from "./Account.module.css";
const Account = () => {
  const loggedUserEmail = localStorage.getItem("email");
  const tokenExpirationDate = localStorage.getItem("expirationDate");
  const transformedDate = new Date(tokenExpirationDate).toLocaleTimeString();
  return (
    <div className={classes.Account}>
      <h1>
        Hi <span className={classes.LoggedUser}>{loggedUserEmail}</span> !
      </h1>
      <p>
        You will be logged out at: <strong>{transformedDate}</strong>
      </p>
    </div>
  );
};

export default Account;
