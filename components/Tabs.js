import React, { useState } from "react";
import Tablist from "./Tablist";
import TabPanel from "./TabPanel";

const tabItems = [
  {
    id: 1,
    title: "IbaTech",
    content: "step 1 content",
    company: "ibatech",
    date: "December 2019",
  },
  {
    id: 2,
    title: "IBA",
    content: "step 2 content",
    company: "iba",
    date: "December 2020",
  },
  {
    id: 3,
    title: "Freelance",
    content: "step 3 content",
    company: "freelance",
    date: "December 2017-2020",
    desc: [
      {
        case1:
          " Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using",
      },
      {
        case1:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,",
      },
      {
        case1:
          "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
      },
    ],
  },
];

const Tabs = () => {
  const [active, setActive] = useState(0);
  return (
    <div className="tabs__container bd-container section">
      <div className="tabs__item">
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
