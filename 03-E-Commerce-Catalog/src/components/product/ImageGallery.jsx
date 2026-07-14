import { useState } from "react";
import { motion,  AnimatePresence } from "framer-motion";


function ImageGallery({images, productName}){
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="image-gallery">
            <div className="image-gallery__main">
                <AnimatePresence mode="wait">
                    <motion.img
                    key={activeIndex}
                    src={images[activeIndex]}
                    alt={`${productName} view ${activeIndex +1}`}
                    initial={{opacity: 0}}
                    animate={{opacity:1}}
                    exit={{opacity:0}}
                    transition={{duration:0.25}}
                    />
                </AnimatePresence>
            </div>
            {images.length>1 &&(
                <div className="image-gallery__thumbs">
                    {images.map((img, index)=>(
                        <button
                        key={img}
                        className={`image-gallery__thumb ${
                            index === activeIndex ? 'image-gallery__thumb--active': ''
                        }`}
                        onClick={()=>setActiveIndex(index)}
                        aria-label={`View image ${index+1}`}
                        >
                            <img src={img} alt={`${productName} thumbnail ${index+1}`}/>

                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}

export default ImageGallery;