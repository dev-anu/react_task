import React,{useState} from 'react'
import {images} from "../ImageData/Images";
import "./thumbnailImage.css";

function Image({selectImage}) {
    const [selectedImage, setSelectedImage]= useState(images[0]);
    
    const handleEnter=(img)=>{
        setSelectedImage(img);
        selectImage(img);
    }
    return (
        <div>
            {images.map((img,index) =>{
                return <img key={index} className={selectedImage === img ? "thumbnail active": "thumbnail"} src={img} alt="thumbnail"
                onMouseEnter={()=>handleEnter(img)}/>
            })}
        </div>
    )
}

export default Image
