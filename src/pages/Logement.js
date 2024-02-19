import logements from  '../data/logements'
import '../styles/Logement.css'

import Slideshow from '../components/slideshow/Slideshow'
import Collapse from '../components/collapse/Collapse'
import Rating from '../components/rating/Rating'
import Error from './Error'
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react'


function Logement(){
    const [slideImage, setSlideImage] = useState([]);
    const { id } = useParams();

    const logementActuel = logements.find(logement => logement.id === id);
    useEffect(() => {
		if (logementActuel) {
			setSlideImage(logementActuel.pictures);
		}
	}, [id, logementActuel]);

	if (!logementActuel) {
		return <Error />;
	}

    const hostname = logementActuel.host.name;
    const hostpicture = logementActuel.host.picture;
	const description = logementActuel.description;
	const equipments = logementActuel.equipments;
    const ratingString = logementActuel.rating;
    const title = logementActuel.title;
    const location = logementActuel.location;
    const tags = logementActuel.tags;

    const [firstName, lastName] = hostname.split(' ');

    return (
        <div className='logement-wrapper'>
        <Slideshow slideImage={slideImage} />
            <main>
                <div className='logement-info'>
                    {/* Partie gauche des infos */}
                    <div className='logement-left-info'>
                        <h1>{title}</h1>
                        <p>{location}</p>
                        <div className='tags'>
                            {tags.map((tag, index) => (
                                <span className='tag' key={index}>{tag}</span> // Mappage des tags, affichage dans une span
                            ))}
                        </div>
                    </div>
                    {/* Partie droite des infos */}
                    <div className='logement-right-info'>
                        <div className='host-div'>
                            <div className='host-name'>
                                <span>{firstName}</span>
                                <span>{lastName}</span>
                            </div>
                            <img src={hostpicture} alt="Hôte du logement" />
                        </div>
                        <div className='rating'>
                            <Rating rating={ratingString}/>
                        </div>
                    </div>
                </div>

                {/* Info Collapse */}
                <div className='logement-collapse'>
                    <div className='description-collapse'>
                        <Collapse title={"Description"} content={description}/>
                    </div>
                    <div className='equipment-collapse'>
                        <Collapse title={"Equipements"} content={equipments}/>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Logement