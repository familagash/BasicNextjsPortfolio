import React, { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!isOpen);
  };

  return (
    <header id="header">
      <div className="l-header ">
        <nav className="nav bd-container ">
          <Link href="/">
            <a className="nav__logo">Logo</a>
          </Link>

          <div
            className={`nav__menu ${isOpen ? "show-menu" : ""}`}
            id="nav-menu"
          >
            <ul className="nav__list">
              <li className="nav__item">
                <Link href="/">
                  <a className="nav__link active-link">Home</a>
                </Link>
              </li>
              <li className="nav__item">
                <Link href="/about">
                  <a className="nav__link">About</a>
                </Link>
              </li>
              <li className="nav__item">
                <Link href="/projects">
                  <a className="nav__link">Projects</a>
                </Link>
              </li>
              <li className="nav__item">
                <Link href="/blog">
                  <a className="nav__link">Blog</a>
                </Link>
              </li>
              <li className="nav__item">
                <Link href="/contact">
                  <a className="nav__link">Contact us</a>
                </Link>
              </li>
            </ul>
          </div>

          <div className="nav__toggle" id="nav-toggle" onClick={handleOpen}>
            <i className="bx bx-menu"></i>
          </div>
        </nav>
      </div>

      <div className="showcase" id="showcase">
        <div className="showcase__container bd-container bd-grid">
          <div className="showcase__data">
            <h1 className="showcase__title">I'am Famil</h1>
            <h2 className="showcase__subtitle">
              Freelance Front-nd Developer <br /> UI/UX Designer.
            </h2>
            <Link href="/contact">
              <a className="button">Contact Me</a>
            </Link>
          </div>
        </div>
        <img src="" alt="showcase image" className="showcase__img" />
      </div>
    </header>
  );
};

export default Header;
