import React from "react";
import "./footerMenu.css";
function FooterMenu() {
  return (
    <div className="footerMenu">
      <ul>
        <li>
          <a className="act" href="/">Detail</a>
        </li>
        <li>
          <a href="/">Features</a>
        </li>
        <li>
          <a href="/">Shipping</a>
        </li>
        <li>
          <a href="/">Care Instruction</a>
        </li>
      </ul>
    </div>
  );
}

export default FooterMenu;
