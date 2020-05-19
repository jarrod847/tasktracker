import React, { useState } from "react";
import data from "../data";

const TodoInputs = () => {
  const [task, addTask] = useState({
    newTask: "",
    id: Date.now(),
    completed: false,
  });

  const handleChanges = (e) => {
    addTask({ newTask: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({ ...addTask, newTask: "" });
  };
  return (
    <div className="todoInputs" onSubmit={handleSubmit}>
      <input className="todoInsert" handleChanges={handleChanges} />
      <button className="todoAdd" background="green">
        Add
      </button>
      <button className="todoRemove" background="red">
        Remove
      </button>
    </div>
  );
};

export default TodoInputs;
