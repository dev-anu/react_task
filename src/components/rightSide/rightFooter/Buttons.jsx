import React from 'react'
import AddToCartButton from './AddToCartButton'
import AddToWishlist from './AddToWishlist'

function Buttons() {
    return (
        <div style={{display: "flex", borderBottom:"1px solid #ededed", borderTop:"1px solid #ededed"}}>
            <AddToCartButton/>
            <AddToWishlist/>
        </div>
    )
}

export default Buttons
