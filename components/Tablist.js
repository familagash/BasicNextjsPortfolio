import React from "react";

const Tablist = ({ title, onItemClicked, isActive = true }) => {
  return (
    <div
      className={isActive ? "tabs__active" : "hvr-underline-from-left"}
      onClick={onItemClicked}
    >
      <ul>
        <li className="tabs__title ml-3 mr-5 text-2xl">
          <a>{title}</a>
        </li>
      </ul>
    </div>
  );
};

export default Tablist;
