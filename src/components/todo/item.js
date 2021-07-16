import React from "react";

const Items = ({ list }) => {
  const todoDate = list.id.split(" ");
  console.log(todoDate);
  return (
    <div className="todo">
      <p>{list.task}</p>
      <p>
        {todoDate[1]} &nbsp;
        {todoDate[2]} &nbsp;
        {todoDate[3]}
      </p>
    </div>
  );
};

export default Items;
