import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import './Collapse.css';

const chevron = <FontAwesomeIcon icon={faChevronUp} size='2x' />;

function Collapse({ title, content }) {

    // Animation ondulation au clic
    const [toggle, setToggle] = useState(false); // toggle affiche l'état ouvert ou fermé du collapse.
    const [coords, setCoords] = useState({ x: -1, y: -1 }); // Animation de vague au clic sur la flèche
    // Suite animation vague
    const handleClick = (e) => {
        const rect = e.target.getBoundingClientRect();
        setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        setToggle(!toggle);
    };

    return (
        <div className='collapse-container'>
            <div className="collapse ripple-container">
                <h3 className='collapse-title'>{title}</h3>
                {/* Activation de l'animation */}
                {toggle && (
                    <span //animation de vague
                        className="ripple"
                        style={{
                            left: coords.x,
                            top: coords.y
                        }}
                    />
                )}
                <div className={toggle ? 'arrow arrow-down' : 'arrow arrow-up'} alt="show content" onClick={handleClick}> {/* Changement de classe de la flèche avec toggle ( haut / bas) */}
                    {chevron}
                </div>
            </div>
            <div className={toggle ? 'collapse-content' : 'collapse-content-hidden'}> {/* Changement de classe de la div collapse avec toggle (ouvert / fermé) */}
                {/* Vérification que content est un tableau ? Mappage du contenu pour créer un <p> par item*/}
                {Array.isArray(content) ? content.map((item, index) => {
                    return (
                        <p className='collapse-text' key={index}>{item}</p>
                    )
                }) : content}
            </div>
        </div>
    )
}

export default Collapse;
