import React, { useState } from "react";
import data from "../data";
import { useSelector, useDispatch } from "react-redux";
import { add } from "../../Redux/slices/todoListSlice";
import { addTask } from "../../Redux/thunks/taskThunk";
const TodoInputs = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState({
    name: "",
    created_at: Date(),
    completed: false,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addTask(value));
    setValue({ name: "", created_at: Date(), completed: false });
  };
  console.log(value);
  return (
    <form className="todoInputs">
      <input
        name="name"
        className="todoInsert"
        type="text"
        value={value.name}
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
