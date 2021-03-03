import Link from "next/link";
import React from "react";

const TabPanel = ({ id, content, active, desc, date, company }) => {
  return active === id ? (
    <div className="flex flex-col justify-center  px-5 mx-4">
      <h2 className=" text-2xl font-bold my-2">{content}</h2>
      <div>
        <span className="  font-bold text-gray-600 bg-gray-400 rounded-sm  px-0.5 py-0.5">
          {company}
        </span>
      </div>
      <h3 className=" text-gray-700 my-2 text-2xl">{date}</h3>
      <ul className="w-full">
        <div className="flex my-1">
          <svg
            className="w-6 h-6 my-auto mx-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 5l7 7-7 7M5 5l7 7-7 7"
            ></path>
          </svg>
          <li className=" text-justify ">{desc[0]}</li>
        </div>
        <div className="flex justify-center ">
          <svg
            className="w-8 h-6 my-auto mx-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 5l7 7-7 7M5 5l7 7-7 7"
            ></path>
          </svg>
          <li className=" text-justify ">{desc[1]}</li>
        </div>
        <div className="flex">
          <svg
            className="w-8 h-6 my-auto mx-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 5l7 7-7 7M5 5l7 7-7 7"
            ></path>
          </svg>
          <li className=" text-justify mt-2">{desc[2]}</li>
        </div>
      </ul>
      <Link href="/about">
        <div className="mx-auto my-1">
          <a className="hover:bg-gray-700 rounded-full py-2 px-3 font-semibold hover:text-white bg-gray-400 text-gray-100">
            See more
          </a>
        </div>
      </Link>
    </div>
  ) : (
    ""
  );
};

export default TabPanel;
