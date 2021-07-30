import React, { useState } from "react";

const AddFood = () => {
  const [food, setFood] = useState({
    name: "",
    protein: "",
    Carbs: "",
    Trans_Fat: "",
    Sugar: "",
    Calories: "",
    Sodium: "",
  });
  return (
    <div>
      <div>
        <label>Name: </label>
        <input />
      </div>
      <div>
        <label>Protein: </label>
        <div>
          <input />
          <label>g</label>
        </div>
      </div>
      <div>
        <label>Carbs: </label>
        <div>
          <input />
          <label>g</label>
        </div>
      </div>
      <div>
        <label>Trans Fat: </label>
        <div>
          <input />
          <label>g</label>
        </div>
      </div>
      <div>
        <label>Sugar: </label>
        <div>
          <input />
          <label>g</label>
        </div>
      </div>
      <div>
        <label>Calories: </label>
        <div>
          <input />
          <label>g</label>
        </div>
      </div>
      <div>
        <label>Sodium: </label>
        <div>
          <input />
          <label>g</label>
        </div>
      </div>
    </div>
  );
};

export default AddFood;
