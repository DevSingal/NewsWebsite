import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import {FaNewspaper} from "react-icons/fa"
import Search from "./Search";
import SideNav from "./SideNav";

const NavigationBar = () => {
  return (
    <Fragment>
    <nav>
      <div className="logo"><FaNewspaper className="news_icon"/>NEWS</div>
      <div className="links">
        <ul>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/about">ABOUT</Link></li>
          <li className="link_icon"><Search/></li>
          <li className="link_icon"><SideNav/></li>
        </ul>
      </div>
    </nav>
    </Fragment>
  );
};

export default NavigationBar;
