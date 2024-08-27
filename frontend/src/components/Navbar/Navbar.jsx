import React from "react";
import styles from "./Navbar.module.css";
import { assets } from "../../assets/assets";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={`navbar py-5 flex justify-between items-center`}>
      <img src={assets.logo} alt="" className={`logo w-36`} />
      <ul className={`navbar_menu flex gap-5 text-navColor text-lg`}>
        <li>Home</li>
        <li>Menu</li>
        <li>Mobile-App</li>
        <li>Contact Us</li>
      </ul>
      <div className={`navbar_right flex items-center gap-10`}>
        <img src={assets.search_icon} alt="" />
        <div className={`navbar_search_icon relative`}>
          <img src={assets.basket_icon} alt="" />
          <div
            className={`dot absolute w-3 h-3 bg-tomato rounded-full -top-2 -right-2`}
          ></div>
        </div>
        <button
          className={`bg-transparent text-base text-navColor border border-tomato py-2 px-7 rounded-md hover:bg-white`}
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Navbar;
