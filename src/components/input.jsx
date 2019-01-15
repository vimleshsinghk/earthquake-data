import React from "react";
const Input = props => {
  return (
    <label>
      <input name={props.name} value={props.value} onChange={props.onChange} />{" "}
    </label>
  );
};

export default Input;
