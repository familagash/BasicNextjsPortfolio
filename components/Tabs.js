import React, { useState } from "react";
import Tablist from "./Tablist";
import TabPanel from "./TabPanel";
import { tabItems } from "../data";

const Tabs = () => {
  const [active, setActive] = useState(0);
  return (
    <div className="tabs__container bd-container py-8 bg-white">
      <h2 className="section-title">Experience</h2>
      <div className="flex flex-row justify-center mb-4">
        {tabItems.map(({ id, title }) => (
          <Tablist
            key={title}
            title={title}
            onItemClicked={() => setActive(id)}
            isActive={active === id}
          />
        ))}
      </div>
      <div className="tabs__content">
        {tabItems.map(({ id, content, desc, date, company }) => (
          <TabPanel
            key={id}
            id={id}
            content={content}
            active={active}
            company={company}
            desc={desc}
            date={date}
          />
        ))}
      </div>
    </div>
  );
};

export default Tabs;
