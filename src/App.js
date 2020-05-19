import React from "react";
import "./App.scss";
import Tracker from "./components/tracker/tracker";
import Todo from "./components/todo/todo";

function App() {
  return (
    <div className="App">
      <h1 className="title">Personal Tracker</h1>
      <div className="container">
        <Todo />
        <Tracker />
      </div>
    </div>
  );
}

export default App;
