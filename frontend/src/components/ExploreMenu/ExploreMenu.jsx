import React from "react";
import styles from "./ExploreMenu.module.css";
import { menu_list } from "../../assets/assets";
import { useContextProvider } from "../../Context/StoreContext";
const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="explore_menu flex flex-col gap-5" id="explore_menu">
      <h1 className="text-[#262626] font-medium text-4xl">Explore our menu</h1>
      <p className="explore_menu_text w-3/5 text-[#888]">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
        adipisci vel odit aliquam excepturi facere dolorum delectus accusantium
        quisquam, impedit recusandae itaque molestiae? Eligendi iste magni,
        excepturi soluta voluptatum animi!
      </p>
      <div
        className={`${styles.explore_menu_list} flex justify-between items-center gap-8 text-center my-5 mx-0 overflow-x-scroll`}
      >
        {menu_list.map((curList, index) => (
          <div
            className="explore_menu_list_item"
            key={index}
            onClick={() =>
              setCategory((prev) =>
                prev === curList.menu_name ? "All" : curList.menu_name
              )
            }
          >
            <img
              src={curList.menu_image}
              alt={curList.menu_name}
              className={`${
                category === curList.menu_name
                  ? "p-3 border-tomato border-2"
                  : ""
              } w-[7.5vw] min-w-[80px] cursor-pointer rounded-full transition-all`}
            />
            <p className="mt-3 text-navColor text-2xl">{curList.menu_name}</p>
          </div>
        ))}
      </div>
      <hr className="my-2 h-1 bg-[#e2e2e2] border-none" />
    </div>
  );
};

export default ExploreMenu;
