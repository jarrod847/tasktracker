import React, { useState } from "react";
import Items from "./item";

const ActiveList = ({ list }) => {
  console.log(list);
  return (
    <div className="todoList">
      <h3>Active</h3>
      <div className="list">
        {list.map((todo, index) => (
          <Items key={index} list={todo} />
        ))}
      </div>
    </div>
  );
};

export default ActiveList;
