import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import './Rating.css'

function Rating(ratingString){
  // Conversion de la string "rating" en entier.
    const ratingValue = parseInt(ratingString.rating) ; // On transforme la string en entier

    const stars = [];

    const starIcon = <FontAwesomeIcon icon={faStar} size='2x' />;

    // Boucle pour générer les icônes d'étoiles
    for (let i = 0; i < 5; i++) {
        if (i < ratingValue) {
          // Si l'index est inférieur à la valeur de notation, afficher une étoile pleine
          stars.push(<span className='orangeStar Star' key={i}>{starIcon}</span>);
        } else {
          // Sinon, afficher une étoile vide
          stars.push(<span className='emptyStar Star' key={i}>{starIcon}</span>);
        }
      }
  
      return stars;
      
}

export default Rating