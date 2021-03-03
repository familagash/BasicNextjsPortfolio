import React, { useState } from "react";
import Tablist from "./Tablist";
import TabPanel from "./TabPanel";

const tabItems = [
  {
    id: 1,
    title: "IbaTech",
    content: "Front-end Engineer",
    company: "ibatech",
    date: "December 2019",
    desc: [
      " Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using",

      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,",

      "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
    ],
  },
  {
    id: 2,
    title: "IBA",
    content: "Software Developer",
    company: "iba",
    date: "December 2020",
    desc: [
      " Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using",

      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,",

      "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
    ],
  },
  {
    id: 3,
    title: "Freelance",
    content: "Front-end developer & UI/UX Designer",
    company: "freelance",
    date: "December 2017-2019",
    desc: [
      " Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using",

      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,",

      "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
    ],
  },
];

const Tabs = () => {
  const [active, setActive] = useState(0);
  return (
    <div className="tabs__container bd-container section">
      <h2 className="section-title ">Featured Projects</h2>
      <div className="tabs__item ">
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
