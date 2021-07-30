import React from "react";

const Items = ({ list }) => {
  const todoDate = list.created_at.split(" ");

  return (
    <div className="todo">
      <p>{list.name}</p>
      <p>
        {todoDate[1]} &nbsp;
        {todoDate[2]} &nbsp;
        {todoDate[3]}
      </p>
    </div>
  );
};

export default Items;
