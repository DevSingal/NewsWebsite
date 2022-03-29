import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { FaNewspaper } from "react-icons/fa";
import Search from "./Search";
import { FaBars } from "react-icons/fa";

const NavigationBar = () => {
  const btnStyle = {
    background: "none",
    border: "none",
    outline: "none",
    height: "auto",
    width: "auto",
  };

  return (
    <Fragment>
      <nav>
        <Link to="/">
          <div className="logo">
            <FaNewspaper className="news_icon" />
            NEWS
          </div>
        </Link>
        <div className="links">
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/about">ABOUT</Link>
            </li>
            <li className="link_icon">
              <button style={btnStyle}>
                <FaBars />
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </Fragment>
  );
};

export default NavigationBar;
