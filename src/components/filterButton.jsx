import React from "react";

const FilterButton = props => {
  return (
    <div>
      <label>
        <input name={props.name} value={props.value}  onChange = {props.handleChange}/>{" "}
      </label>
      <button onClick={props.handleClick}>{props.btnName}</button>
    </div>
  );
};

export default FilterButton;
