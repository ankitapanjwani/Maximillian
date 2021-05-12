import React, { useState, useEffect } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";

const Login = ({ onLogin }) => {
  //states for password and email
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  // validation for email and apssword
  const [emailIsValid, setEmailIsValid] = useState();
  const [passwordIsValid, setPasswordIsValid] = useState();

  //checking whole form is valid or invalid
  const [formIsValid, setFormIsValid] = useState(false);

  // email on change handler
  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);

    // setFormIsValid(
    //   event.target.value.includes("@") && enteredPassword.trim().length > 6
    // );
  };

  //password on change handler
  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);

    // setFormIsValid(
    //   event.target.value.trim().length > 6 && enteredEmail.includes("@")
    // );
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes("@"));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };
  ///can set common validation for both inside useeffect instead of writing redundant code
  useEffect(() => {
    setFormIsValid(
      enteredPassword.trim().length > 6 && enteredEmail.includes("@")
    );
  }, [enteredPassword, enteredEmail]);

  //submit handler
  const submitHandler = (event) => {
    event.preventDefault();
    //calls onlogin handler present in parent-app.js
    onLogin(enteredEmail, enteredPassword);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          type="email"
          id="email"
          label="E-mail"
          isValid={emailIsValid}
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        
        <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
