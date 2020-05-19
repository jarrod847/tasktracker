import React from "react";
import ActiveList from "./notdone";
import CompletedList from "./completed";
import TodoInputs from "./inputs";

const Todo = () => {
  return (
    <div className="each">
      <h2>Todo list</h2>
      <div className="todo">
        <ActiveList />
        <CompletedList />
        <TodoInputs />
      </div>
    </div>
  );
};

export default Todo;
