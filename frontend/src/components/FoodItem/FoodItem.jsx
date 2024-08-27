import React from "react";
import styles from "./FoodItem.module.css";
import { assets } from "../../assets/assets";

const FoodItem = ({ item }) => {
  const { _id, name, price, description, image } = item;
  return (
    <div className="food_item w-full m-auto rounded-[15px] overflow-hidden transition-all">
      <div className="food_item_image_container">
        <img src={image} className="food_item_image w-full" alt={name} />
      </div>
      <div className="food_item_info p-5">
        <div className="food_item_name_rating flex items-center justify-between mb-3">
          <p className="text-xl font-semibold">{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food_item_description">{description}</p>
        <p className="food_item_price">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
