import React from "react";
const List = props => {
  if (!props.list) return "";
  const list = props.list.map(val => {
    const { id, properties } = val;
    return (
      <li key={id} className={props.className || "list-item"}>
        {id} <span> : </span> {properties.place} <span> : </span>{" "}
        {properties.mag} <span> : </span> {properties.magType}
      </li>
    );
  });
  return <ul>{list}</ul>;
};

export default List;
