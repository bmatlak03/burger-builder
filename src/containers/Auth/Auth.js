import { useState, useEffect } from "react";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import classes from "./Auth.module.css";
import { Redirect } from "react-router-dom";
import * as actions from "../../store/actions/index";
import { connect } from "react-redux";
import Spinner from "../../components/UI/Spinner/Spinner";
import { updateObject, checkValidity } from "../../shared/utility";
const Auth = ({
  buildingBurger,
  authRedirectPath,
  onSetAuthRedirectPath,
  onAuth,
  loading,
  error,
  isAuthenticated,
}) => {
  const [controls, setControls] = useState({
    email: {
      elementType: "input",
      elementConfig: {
        type: "email",
        placeholder: "Mail Address",
      },
      value: "",
      validation: {
        requierd: true,
        isEmail: true,
      },
      valid: false,
      touched: false,
    },
    password: {
      elementType: "input",
      elementConfig: {
        type: "password",
        placeholder: "Password",
      },
      value: "",
      validation: {
        requierd: true,
        minLength: 6,
      },
      valid: false,
      touched: false,
    },
  });

  const [isSingUp, setIsSingUp] = useState(true);
  useEffect(() => {
    if (buildingBurger && authRedirectPath !== "/") {
      onSetAuthRedirectPath();
    }
  }, [buildingBurger, authRedirectPath, onSetAuthRedirectPath]);

  const inputChangedHandler = (e, controlName) => {
    const updatedControls = updateObject(controls, {
      [controlName]: updateObject(controls[controlName], {
        value: e.target.value,
        valid: checkValidity(e.target.value, controls[controlName].validation),
        touched: true,
      }),
    });
    setControls(updatedControls);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    onAuth(controls.email.value, controls.password.value, isSingUp);
  };
  const switchModeHandler = () => {
    setIsSingUp(!isSingUp);
  };

  const formElementsArray = [];
  for (let key in controls) {
    formElementsArray.push({
      id: key,
      config: controls[key],
    });
  }
  let form = formElementsArray.map((formElement) => (
    <Input
      key={formElement.id}
      elementType={formElement.config.elementType}
      elementConfig={formElement.config.elementConfig}
      value={formElement.config.value}
      changed={(e) => inputChangedHandler(e, formElement.id)}
      invalid={!formElement.config.valid}
      shouldValidate={formElement.config.validation}
      touched={formElement.config.touched}
    />
  ));
  if (loading) {
    form = <Spinner />;
  }
  let errorMessage = null;
  if (error) {
    errorMessage = <p>{error.message}</p>;
  }
  let authRedirect = null;

  if (isAuthenticated && buildingBurger) {
    authRedirect = <Redirect to="/checkout" />;
  } else if (isAuthenticated) {
    authRedirect = <Redirect to="/" />;
  }
  let modeMessage = <strong>YOU ARE ON SING UP PAGE</strong>;
  if (!isSingUp) {
    modeMessage = <strong>YOU ARE ON SING IN PAGE</strong>;
  }
  return (
    <div className={classes.Auth}>
      {authRedirect}
      {errorMessage}
      {modeMessage}
      <form onSubmit={submitHandler}>
        {form}
        <Button btnType="Success">SUBMIT</Button>
      </form>
      <Button btnType="Danger" clicked={switchModeHandler}>
        SWITCH TO {isSingUp ? "SING IN" : "SING UP"}
      </Button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    isAuthenticated: state.auth.token,
    buildingBurger: state.burgerBuilder.building,
    authRedirectPath: state.auth.authRedirectPath,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (email, password, isSignUp) =>
      dispatch(actions.auth(email, password, isSignUp)),
    onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath("/")),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
