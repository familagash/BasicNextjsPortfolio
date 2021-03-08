import React, { useState } from "react";
import Tablist from "./Tablist";
import TabPanel from "./TabPanel";
import { tabItems } from "../data";

const Tabs = () => {
  const [active, setActive] = useState(0);
  return (
    <div className="tabs__container  py-8 bg-white">
      <h2 className="section-title">Experience</h2>

      <div className="md:flex md:flex-col justify-start tabs__items px-3 bd-container">
        <div className="flex sm:flex-row md:justify-start justify-center mb-4  tabs__list">
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
    </div>
  );
};

export default Tabs;
