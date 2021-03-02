import React from "react";

const TabPanel = ({ id, content, active, desc, date, company }) => {
  return active === id ? (
    <>
      <h2>{content}</h2>
      <p>{company}</p>
    </>
  ) : (
    ""
  );
};

export default TabPanel;
