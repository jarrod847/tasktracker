import React from "react";
import FoodList from "./foodList";

const FoodTracker = () => {
  return (
    <div className="each">
      <h2>Food Tracker</h2>
      <div className="todo">
        <FoodList />
      </div>
    </div>
  );
};

export default FoodTracker;
