import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div
        className={`${styles.header_contents} absolute flex flex-col items-start gap-4 max-w-1/2 bottom-[10%] left-[6vw]`}
      >
        <h2 className="font-medium text-white text-7xl">
          Order <br /> your favorite food here
        </h2>
        <p className="text-white text-xl">
          Lorem ipsum dolor sit amet consectetur adip Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Voluptatibus dolorum tempora tenetur
          debitis a quas molestias, obcaecati cum velit necessitatibus deserunt
          inventore perspiciatis sunt sint?
        </p>
        <button className="border-none text-navColor font-normal py-3 px-10 bg-white text-xl rounded-full">
          View Menu
        </button>
      </div>
    </div>
  );
};

export default Header;
