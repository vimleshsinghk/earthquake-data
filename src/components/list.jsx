import React from "react";

const List = props => {
  return (
    <li className={props.className || "list-item"}>
      {props.id} <span> : </span> {props.place} <span> : </span> {props.mag}{" "}
      <span> : </span> {props.magType}
    </li>
  );
};

export default List;
