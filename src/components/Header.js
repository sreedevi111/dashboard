import React from "react";
import "./Header.css";
import shoppingCart from "../assets/shopping-cart-empty-side-view.svg";
import search from "../assets/loupe (4).svg";
import bell from "../assets/bell.svg";
import logo from "../assets/LOGO FINAL.svg";

function Header() {
  return (
    <div className="navbar">
      <img src={logo} alt="Logo" />
      <div className="nav-menu">
        <span>About</span>
        <span>Teach with Us</span>
        <span>Categories </span>

        <img id="search-icon" src={search} alt="Search" />
        <img id="shopping-icon"src={shoppingCart} alt="Shopping Cart" />
        <img id="bell-icon"src={bell} alt="bell" />
      </div>
    </div>
  );
}

export default Header;
