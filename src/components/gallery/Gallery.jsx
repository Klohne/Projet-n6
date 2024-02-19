import './Gallery.css'
import Card from '../card/Card'
import logements from '../../data/logements'

function Gallery(){
    return (
        <main className="gallery">
            {/* Mappage des logements // création des props grâce à id, title, cover */}
            {logements.map(logement => {
                return (
                    <Card
                        key={logement.id}
                        id={logement.id}
                        title={logement.title}
                        cover={logement.cover}
                    />
                )
            })}
        </main>
    )
}

export default Gallery