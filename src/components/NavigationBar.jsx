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
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/business">Business</Link>
            </li>
            <li>
              <Link to="/entertainment">Entertainment</Link>
            </li>
            <li>
              <Link to="/health">Health</Link>
            </li>
            <li>
              <Link to="/science">Science</Link>
            </li>
            <li>
              <Link to="/sports">Sports</Link>
            </li>
            <li>
              <Link to="/technology">Technology</Link>
            </li>
            <li>
              <Link to="/international">International</Link>
            </li>
            <li>
              <Link to="/national">National</Link>
            </li>
          </ul>
        </div>
      </nav>
    </Fragment>
  );
};

export default NavigationBar;
