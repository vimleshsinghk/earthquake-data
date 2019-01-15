import React from "react";
const Button = props => {
  return (
    <button className={props.className || "btn"} onClick={props.onClick}>
      {props.btnName}
    </button>
  );
};

export default Button;
