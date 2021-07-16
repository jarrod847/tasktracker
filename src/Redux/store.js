import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slices/todoListSlice";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});
