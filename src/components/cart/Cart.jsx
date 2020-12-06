import React,{useState} from 'react'
import Quantity from '../quantity/Quantity';

function Cart() {
    const [quantity,setQuantity] = useState(sessionStorage.getItem('qnty'));

    const handleChange=()=>{
       setQuantity(sessionStorage.getItem('qnty'));
    }
    return (
        <div style={{padding:"15px"}}>
            <span style={{color: "#494949", fontWeight:"600", paddingRight:"10px"}}>MY ACCOUNT</span>
            <i class="fa fa-shopping-cart"></i>
            <span style={{height:"50px",color:"#fff", padding:"5px",width:"50px", borderRadius:"50%", background:"blue"}}>
            {quantity}
            </span>
            <button id="qt-btn" onClick={handleChange} style={{display:"none"}}></button>
        </div>
    )
}

export default Cart
