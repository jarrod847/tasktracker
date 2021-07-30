import React from "react";
import "./scss/App.scss";
import FoodTracker from "./components/foodTracker/foodTracker";
import Todo from "./components/todo/todo";

function App() {
  return (
    <div className="App">
      <h1 className="title">Personal Tracker</h1>
      <div className="container">
        <Todo />
        <FoodTracker />
      </div>
    </div>
  );
}

export default App;
