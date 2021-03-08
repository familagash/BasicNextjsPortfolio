import React from "react";

const Tablist = ({ title, onItemClicked, isActive = true }) => {
  return (
    <div
      className={isActive ? "tabs__active" : "hvr-underline-from-left"}
      onClick={onItemClicked}
    >
      <ul className=" sm:mx-4">
        <li className="tabs__title pl-3 pr-3 mx-2  text-xl ">
          <a>{title}</a>
        </li>
      </ul>
    </div>
  );
};

export default Tablist;
