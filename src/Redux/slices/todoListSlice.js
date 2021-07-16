import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
};

export const todoListSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    add: (state, action) => {
      state.todoList.push(action.payload);
    },
  },
});

export const { add } = todoListSlice.actions;

export default todoListSlice.reducer;
