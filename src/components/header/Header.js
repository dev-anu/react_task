import React from "react";
import Brand from "../brand/Brand";
import Menu from "../menu/Menu";
import Cart from "../cart/Cart";
import "./header.css";

function Header() {
  return (
    <div className="header">
      <Menu />
      <Brand />
      <Cart />
    </div>
  );
}

export default Header;
