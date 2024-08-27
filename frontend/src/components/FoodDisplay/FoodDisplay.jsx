import React from "react";
import styles from "./FoodDisplay.module.css";
import { useContextProvider } from "../../Context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContextProvider();
  return (
    <div className="food_display mt-8" id="food_display">
      <h2 className="text-3xl font-semibold ">Top Dishes near you</h2>
      <div className="food_display_list grid grid-cols-4 mt-8 gap-y-5 gap-x-8">
        {food_list.map((curElem) => (
          <FoodItem item={curElem} key={curElem._id} />
        ))}
      </div>
    </div>
  );
};

export default FoodDisplay;
