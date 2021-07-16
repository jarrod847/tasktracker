import React, { useState } from "react";
import ActiveList from "./notdone";
import CompletedList from "./completed";
import TodoInputs from "./inputs";
import { data } from "../data";

const Todo = () => {
  const [list, setlist] = useState(data);
  const addTodo = (taskName) => {
    const newTodos = { task: taskName, id: Date.now(), completed: false };
    setlist(...list, newTodos);
  };

  return (
    <div className="each">
      <h2>Todo list</h2>
      <div className="todo">
        <ActiveList list={list} />
        <CompletedList />
        <TodoInputs addTodo={addTodo} />
      </div>
    </div>
  );
};

export default Todo;
