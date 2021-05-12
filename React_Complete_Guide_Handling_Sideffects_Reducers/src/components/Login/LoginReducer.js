import React, {
  useState,
  useEffect,
  useReducer,
  useContext,
  useRef,
} from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../../Store/auth-context";
import Input from "../UI/Input/Input";

//Email Reducer function
const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.includes("@") };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
  }
  return { value: "", isValid: false };
};

//Password Reducer Function
const passwordReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
  return { value: "", isValid: false };
};

////===================== MAIN LOGIN COMPONENT ==============================
const LoginReducer = ({ onLogin }) => {
  //checking whole form is valid or invalid
  const [formIsValid, setFormIsValid] = useState(false);

  const ctx = useContext(AuthContext);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  //useReducer
  const [emailState, dispatchEmailState] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });
  const [passwordState, dispatchPasswordState] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });
  // email on change handler
  const emailChangeHandler = (event) => {
    dispatchEmailState({ type: "USER_INPUT", val: event.target.value });

    // setFormIsValid(
    //   event.target.value.includes("@") && passwordState.value.trim().length > 6
    // );
  };

  //password on change handler
  const passwordChangeHandler = (event) => {
    dispatchPasswordState({ type: "USER_INPUT", val: event.target.value });
    // setFormIsValid(
    //   event.target.value.trim().length > 6 && emailState.value.includes("@")
    // );
  };

  const validateEmailHandler = () => {
    dispatchEmailState({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    dispatchPasswordState({ type: "INPUT_BLUR" });
  };

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;
  ///can set common validation for both inside useeffect instead of writing redundant code
  useEffect(() => {
    console.log("checking validity");
    const identifier = setTimeout(() => {
      setFormIsValid(passwordIsValid && emailIsValid);
    }, 500);
    return () => {
      console.log("cleanup");
      clearTimeout(identifier);
    };
  }, [passwordIsValid, emailIsValid]);

  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      ctx.onLogin(emailState.value, passwordState.value);
    } else if (!emailIsValid) {
      emailInputRef.current.focus();
    } else {
      passwordInputRef.current.focus();
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          type="email"
          id="email"
          ref={emailInputRef}
          label="E-mail"
          isValid={emailIsValid}
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Input
          type="password"
          id="password"
          ref={passwordInputRef}
          label="Password"
          isValid={passwordIsValid}
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />

        <div className={classes.actions}>
          <Button type="submit">Login</Button>
        </div>
      </form>
    </Card>
  );
};

export default LoginReducer;
