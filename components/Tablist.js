import React from "react";

const Tablist = ({ title, onItemClicked, isActive = false }) => {
  return (
    <div
      className={isActive ? "tabs__active" : "hvr-underline-from-left"}
      onClick={onItemClicked}
    >
      <ul>
        <li className="tabs__title ">
          <a>{title}</a>
        </li>
      </ul>
    </div>
  );
};

export default Tablist;
