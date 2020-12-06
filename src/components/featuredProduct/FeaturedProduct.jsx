import React, { useState } from 'react'
import Image from '../thumbnailImage/Image';
import "./FeaturedProduct.css";
import {images} from "../ImageData/Images";

function FeaturedProduct() {
    const [selectedImage, selectImg] = useState(images[0]);
    

    const selectImage=(img)=>{
        selectImg(img)
    }
    return (
        <div className="container">
            <img src={selectedImage} className="featured" alt="featured"/>
            <Image selectImage={selectImage}/>
            {/* <ColorProducts selectColorImage={selectColorImage}/> */}
        </div>
    )
}

export default FeaturedProduct
