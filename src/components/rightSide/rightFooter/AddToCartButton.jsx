import React from "react";
import Button from "../../button/Button";

function AddToCartButton() {
  return (
    <div style={{marginTop:"30px"}}>
      <Button
        name="ADD TO CART"
        background="rgb(27, 193, 224)"
        color="#fff"
        fontSize="20px"
        padding="10px"
        boxShadow="5px 10px 6px #17abd1"
      />
    </div>
  );
}

export default AddToCartButton;
