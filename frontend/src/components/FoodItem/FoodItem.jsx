import React, { useState } from "react";
import styles from "./FoodItem.module.css";
import { assets } from "../../assets/assets";
import { useContextProvider } from "../../Context/StoreContext";

const FoodItem = ({ item }) => {
  const { _id, name, price, description, image } = item;
  const [itemCount, setItemCount] = useState(0);
  const { cartItem, addToCart, removeFromCart } = useContextProvider();
  return (
    <div className="food_item w-full m-auto rounded-[15px] overflow-hidden transition-all">
      <div className="food_item_image_container relative">
        <img src={image} className="food_item_image w-full" alt={name} />
        {!cartItem[_id] ? (
          <img
            className="add w-9 absolute bottom-4 right-4 cursor-pointer rounded-full"
            onClick={() => addToCart(_id)}
            src={assets.add_icon_white}
            alt=""
          />
        ) : (
          <div className="food_item_counter absolute bottom-4 right-4 flex items-center p-2 gap-4 bg-white rounded-full">
            <img
              onClick={() => removeFromCart(_id)}
              src={assets.remove_icon_red}
              alt=""
              className="cursor-pointer"
            />
            <p>{cartItem[_id]}</p>
            <img
              onClick={() => addToCart(_id)}
              src={assets.add_icon_green}
              alt=""
              className="cursor-pointer"
            />
          </div>
        )}
      </div>
      <div className="food_item_info p-5">
        <div className="food_item_name_rating flex items-center justify-between mb-3">
          <p className="text-xl font-semibold">{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food_item_description text-[#676767] text-sm">
          {description}
        </p>
        <p className="food_item_price text-tomato text-xl font-semibold mt-3">
          ${price}
        </p>
      </div>
    </div>
  );
};

export default FoodItem;
