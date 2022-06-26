import React from "react";
import "./Footer.css";
import logo from "../assets/Group 3177.svg";

function Footer() {
  return (
    <div className="footer">
      <div className="box1">
        <div className="contents">
          <div className="footer-left">
            <div className="col1">
              <span>About</span>
              <span>Teach with Us</span>
              <span>Contact</span>
              <span>Help and support</span>
            </div>
            <div className="col2">
              <span>Contact Us</span>
              <span>Terms</span>
              <span>Privacy policy</span>
              <span>Sitemap</span>
            </div>
          </div>
          <div className="footer-right">
            <img src={logo} alt="" />
          </div>
        </div>
      </div>
      <div className="box2">© 2021All Rights Reserved - Curiosify</div>
    </div>
  );
}

export default Footer;
