import React from "react";
import ConsumedList from "./consumedList";
import FoodList from "./foodList";

const FoodTracker = () => {
  return (
    <div className="each">
      <h2>Food Tracker</h2>
      <div className="todo">
        <FoodList />
        <ConsumedList />
      </div>
    </div>
  );
};

export default FoodTracker;
