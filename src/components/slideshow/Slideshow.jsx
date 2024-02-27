import { useState } from 'react'
import { IoChevronBackSharp, IoChevronForwardSharp } from "react-icons/io5";
import './Slideshow.css'

function Slideshow({slideImage}){
    // On définit l'image présente (index) sur le slider avec currentIndex, setCurrentIndex met cette valeur à jour
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextImage = () => {
        setCurrentIndex((currentIndex + 1) % slideImage.length); //Met current index à jour en y ajoutant 1. Modulo pour faire boucler le slider : Si currentIndex est égal à 3 et qu'il y a 4 images dans le slider, (3 + 1) % 4 équivaut à 0, donc currentIndex = 0
    }

    const prevImage = () => {
        setCurrentIndex((currentIndex - 1 + slideImage.length) % slideImage.length);
    }
    return (
        <section className='slider'>
            <div className='slide-container'>
                <img src={slideImage[currentIndex]} alt={`Slide ${currentIndex}`} /> {/* Source à partir de l'index */}
            </div>
            {slideImage.length > 1 &&  // Vérifie qu'il y plus d'une image dans le slider
                <>
                    <IoChevronForwardSharp className='slider-arrow slider-arrow-right' onClick={nextImage} />
                    <IoChevronBackSharp className='slider-arrow slider-arrow-left' onClick={prevImage}/>
                    <p className='slideCount'>{currentIndex + 1} / {slideImage.length}</p> {/* Affiche l'index */}
                </>
            } 
        </section>
    )
}

export default Slideshow