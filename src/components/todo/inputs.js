import React, { useState } from "react";
import data from "../data";
import { useSelector, useDispatch } from "react-redux";
import { add } from "../../Redux/slices/todoListSlice";
const TodoInputs = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState({
    task: "",
    id: Date(),
    completed: false,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(add(value));
    setValue({ task: "", id: Date.now(), completed: false });
  };
  console.log(value);
  return (
    <form className="todoInputs">
      <input
        name="task"
        className="todoInsert"
        type="text"
        value={value.task}
        onChange={(e) =>
          setValue({ ...value, [e.target.name]: e.target.value })
        }
      />
      <button className="todoAdd" onClick={handleSubmit}>
        Add
      </button>
      <button className="todoRemove">Remove</button>
    </form>
  );
};

export default TodoInputs;
