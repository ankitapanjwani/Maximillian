import React from "react";

import classes from "./Button.module.css";

const Button = ({ type, disabled, children ,onClick}) => {
  return (
    <button
      type={type || "button"}
      className={classes.button}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
