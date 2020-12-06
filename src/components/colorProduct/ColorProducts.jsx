import React,{useState} from "react";
import "./colorProduct.css";
import {images} from "../ImageData/Images";

function ColorProducts({selectColorImage}) {
  const [selectedImage, selectImg] = useState(images[0]);

  const handleClick=(id)=>{
    selectColorImage(`./img/${id}.png`);
  }
  const circles = [{id: "blue", background: "#018ca7"},{id:"orange",background: "#dc5224"},{id:"pink",background: "#d35aab"},{id:"grey", background: "#909292"}]
  return (
    <div style={{display: "flex", padding:"20px", borderTop:"1px solid #ededed"}}>
      <h3>Color</h3>
      {circles.map(({id,background}) =>
        <div key={id} className="circle" style={{background: `${background}`}}></div>
      )}
    </div>
  );
}

export default ColorProducts;
