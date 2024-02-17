import { useState } from 'react'
import { IoChevronBackSharp, IoChevronForwardSharp } from "react-icons/io5";
import './Slideshow.css'

function Slideshow(slideImage){
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextImage = () => {
        setCurrentIndex((currentIndex + 1) % slideImage.slideImage.length);
                if(currentIndex === slideImage.length - 1)
            setCurrentIndex(0)
    }

    const prevImage = () => {
        setCurrentIndex((currentIndex - 1 + slideImage.slideImage.length) % slideImage.slideImage.length);
                if(currentIndex === 0)
            setCurrentIndex(slideImage.slideImage.length - 1)
    }
    return (
        <section className='slider'>
            <div className='slide-container'>
                <img src={slideImage.slideImage[currentIndex]} alt={`Slide ${currentIndex}`} />
            </div>
            {slideImage.slideImage.length > 1 && 
                <>
                    <IoChevronForwardSharp className='slider-arrow slider-arrow-right' onClick={nextImage} />
                    <IoChevronBackSharp className='slider-arrow slider-arrow-left' onClick={prevImage}/>
                    {document.body.clientWidth > 768 && <p className='slideCount'>{currentIndex + 1} / {slideImage.slideImage.length}</p>}
                </>
            } 
        </section>
    )
}

export default Slideshow