import React,{useState, useContext} from 'react'

function Quantity() {
    const[qnty, setqnty]=useState(0);

    const handleAdd=()=>{
        setqnty(()=> qnty + 1);
        sessionStorage.setItem('qnty', qnty+1);
        document.getElementById("qt-btn").click();
    }
    const handleSubtract=()=>{
        if(qnty > 0){
            setqnty(()=> qnty - 1);
            sessionStorage.setItem('qnty', qnty-1);
            document.getElementById("qt-btn").click();
        }
    }


    return (
        <div style={{paddingLeft:"20px", display: "flex", borderBottom:"1px solid #ededed"}}>
            <h3>Quantity</h3>
            <img src="../img/up.png" alt="up" style={{paddingLeft:"20px",paddingTop:"20px", width:"30px", height:"30px", cursor:"pointer"}}
            onClick={handleAdd}/>
           <span style={{border:"1px solid grey", borderRadius:"10px", width:"100px",margin:"10px",textAlign:"center", fontSize:"30px"}}>{qnty}</span>
            <img src="../img/down.png" alt="up" style={{paddingTop:"20px", width:"30px", height:"30px",}}
            onClick={handleSubtract}/>
        </div>
    )
}

export default Quantity
