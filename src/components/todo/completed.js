import React, { useState } from "react";

const CompletedList = () => {
  const [done, setDone] = useState([]);
  return (
    <div className="todoList">
      <h3>Completed</h3>
    </div>
  );
};

export default CompletedList;
