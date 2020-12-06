import React from "react";
import RightHeader from "./rightHeader/RightHeader";
import RightBody from "./rightBody/RightBody";
import ColorProduct from "../colorProduct/ColorProducts";
import Quantity from "../quantity/Quantity";
import FooterMenu from "./rightFooter/FooterMenu";
import Buttons from "./rightFooter/Buttons";
import Price from "./rightHeader/Price";
import StarRatings from "./rightHeader/StarRatings";

function RightMain() {
  return (
    <div className="rightMain">
      <RightHeader />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0 20px",
        }}
      >
        <Price />
        <StarRatings />
      </div>
      <RightBody />
      <ColorProduct />
      <Quantity />
      <Buttons />
      <FooterMenu />
    </div>
  );
}

export default RightMain;
