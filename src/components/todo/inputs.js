import React, { useState } from "react";
import data from "../data";

const TodoInputs = ({ addTodo }) => {
  const [value, setValue] = useState({
    task: "",
    id: Date.now(),
    completed: false,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo(value);
    setValue({ task: "" });
  };
  console.log({ value });
  return (
    <form className="todoInputs">
      <input
        className="todoInsert"
        type="text"
        value={value.task}
        onChange={(e) => setValue(e.target.value)}
      />
      <button className="todoAdd" onSubmit={handleSubmit}>
        Add
      </button>
      <button className="todoRemove">Remove</button>
    </form>
  );
};

export default TodoInputs;
