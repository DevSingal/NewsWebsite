import React, { Fragment } from "react";
import { FaFacebook, FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import Line from "./Line";

const SideNav = () => {
  

  function closeSideNavBar() {
    let right = "-10cm"
  }

  return (
    <Fragment>
      <div className="sideNav" id="sideNavbar">
        <div className="closeBtn" id="closeButton" onClick={closeSideNavBar}>
          Close <ImCross />
        </div>
        <Line />
        <div className="categories">
          <h3>Catagories</h3>
          <ul>
            <li>General</li>
            <li>Sports</li>
            <li>Business</li>
            <li>Entertainment</li>
            <li>Health</li>
            <li>Science</li>
            <li>Technology</li>
          </ul>
        </div>
        <Line />
        <div className="newsletter">
          <h3>SIGN UP FOR OUR NEWSLETTER</h3>
          <input type="email" name="email" />
          <button>Sign Up</button>
        </div>
        <Line />
        <div className="followUS">
          <h3>FOLLOW US</h3>
          <FaInstagram />
          <FaFacebook />
          <FaYoutube />
          <FaTwitter />
        </div>
      </div>
    </Fragment>
  );
};

export default SideNav;
