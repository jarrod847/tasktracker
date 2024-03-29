import React, { useState } from "react";
import ActiveList from "./activeList";
import CompletedList from "./completed";
import TodoInputs from "./inputs";
import { data } from "../data";
import { useSelector } from "react-redux";

const Todo = () => {
  const list = useSelector((state) => state.todos.todoList);

  return (
    <div className="each">
      <h2>Todo list</h2>
      <div className="todo">
        <ActiveList list={list} />
        <CompletedList />
        <TodoInputs />
      </div>
    </div>
  );
};

export default Todo;
