import Link from "next/link";
import { useState } from "react";

const Nav = () => {
  const [isOpen, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!isOpen);
  };
  return (
    <div className="l-header">
      <nav className="nav bd-container ">
        <Link href="/">
          <a className="nav__logo">Logo</a>
        </Link>

        <div className={`nav__menu ${isOpen ? "show-menu" : ""}`} id="nav-menu">
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
          <svg
            className="bx bx-menu"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M4 6H20V8H4zM8 11H20V13H8zM13 16H20V18H13z"></path>
          </svg>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
