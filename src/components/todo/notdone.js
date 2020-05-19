import React, { useState } from "react";
import Items from "./item";
import { data } from "../data";

const ActiveList = () => {
  const [list, setlist] = useState(data);
  console.log(list);
  return (
    <div className="todoList">
      <h3>Active</h3>
      <div className="list">
        {list.map((todo, index) => (
          <Items key={index} index={index} list={todo} />
        ))}
      </div>
    </div>
  );
};

export default ActiveList;
