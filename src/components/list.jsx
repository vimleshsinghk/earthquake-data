import React from "react";
const List = props => {
  if (!props.list || props.list.length === 0) return "not found";
  const list = props.list.map(val => {
    const { id, properties } = val;
    return (
      <li key={id} className={props.className || "list-item"}>
        {id} <span> : </span> {properties.place} <span> : </span>{" "}
        {properties.mag} <span> : </span> {properties.magType}
      </li>
    );
  });
  return (
    <ul>
      <li className={props.className || "list-item"}>
        id <span> : </span>place <span> : </span> mag <span> : </span> magType
      </li>
      {list}
    </ul>
  );
};

export default List;
