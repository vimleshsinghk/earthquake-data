import React from "react";
import Button from "./button";
import Input from "./input";

const FilterButton = props => {
  return (
    <div>
      <Input
        name={props.name}
        value={props.value}
        onChange={props.handleChange}
      />
      <Button onClick={props.handleClick} btnName={props.btnName} />
    </div>
  );
};

export default FilterButton;
