import React from "react";
import List from "./list";

const ListData = props => {
  if (!props.list || props.list.length === 0) return "not found";
  const list = props.list.map(val => {
    const {
      id,
      properties: { place, magType, mag }
    } = val;
    return <List key={id} place={place} id={id} magType={magType} mag={mag} />;
  });
  return (
    <ul>
      <List id="id" place="place" mag="mag" magType="magType" />
      {list}
    </ul>
  );
};

export default ListData;
