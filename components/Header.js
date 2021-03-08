import React, { useState } from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header id="header">
      <div className="showcase lg:flex justify-center " id="showcase">
        <div className="showcase__container bd-container bd-grid md:justify-start items-center lg:flex lg:flex-row lg:justify-around">
          <div className="showcase__data ">
            <h1 className="showcase__title">I'am Famil</h1>
            <h2 className="showcase__subtitle">
              Freelance Front-nd Developer <br /> UI/UX Designer.
            </h2>
            <Link href="/contact">
              <a className="button">Contact Me</a>
            </Link>
          </div>
          <img
            src="../assets/img/avatar.png"
            alt="showcase image "
            className="showcase__img lg:block w-100 h-100 "
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
