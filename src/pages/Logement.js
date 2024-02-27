import logements from  '../data/logements'
import '../styles/Logement.css'

import Slideshow from '../components/slideshow/Slideshow'
import Collapse from '../components/collapse/Collapse'
import Rating from '../components/rating/Rating'
import Error from './Error'
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react'


function Logement(){
    const [slideImage, setSlideImage] = useState([]); // useState permet de définir l'image actuelle dans le slider.
    const { id } = useParams();

    const logementActuel = logements.find(logement => logement.id === id); // On cherche dans la BDD un id de logement qui correspond à l'id de l'URL
    useEffect(() => {
		if (logementActuel) { // Si on l'a trouvé, on appelle setSlideImage qui va venir modifier l'image présentée dans le slider avec les pictures de la BDD
			setSlideImage(logementActuel.pictures);
		}
	}, [id, logementActuel]);

	if (!logementActuel) {
		return <Error />;
	}

    // stockage des infos de la BDD dans des variables
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
        <Slideshow slideImage={slideImage} /> {/* On affiche le slider en lui donnant comme prop l'image actuelle du slider */}
            <main>
                <div className='logement-info'>
                    {/* Partie gauche des infos */}
                    <div className='logement-left-info'>
                        <h1>{title}</h1>
                        <p>{location}</p>
                        <div className='tags'>
                            {tags.map((tag, index) => ( // Mappage des tags, affichage dans une span chacun
                                <span className='tag' key={index}>{tag}</span> 
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
                            <Rating rating={ratingString}/> {/* Affichage de la note en donnant comme prop la string 'rating' de la BDD*/}
                        </div>
                    </div>
                </div>

                {/* Info Collapse */}
                <div className='logement-collapse'>
                    <div className='description-collapse'>
                        <Collapse title={"Description"} content={description}/> {/* On affiche les collapse avec une prop qui correspond à leur contenu, qui vient de la BDD */}
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