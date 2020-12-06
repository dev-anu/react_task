import React from 'react'
import Button from "../../button/Button";
function Price() {
    return (
        <div>
            <small><del>$345.00</del></small>
            <span style={{fontWeight:"600", paddingRight:"5px"}}>$223.00</span>
            <Button
             name="Discount"
             background="#f9276a"
             fontSize="10px"
             color="#fff"
      />
        </div>
    )
}

export default Price
