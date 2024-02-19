import Collapse from '../components/collapse/Collapse'
import Banner2 from '../components/banner2/Banner2'
import '../styles/About.css'

function About(){
    // Stockage des textes "a-propos" dans un tableau pour les afficher de façon dynamique dans chacun des collapse
    const aboutText = [
        {
            "id": "1",
            "title": "Fiabilité",
            "content": "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
        },
        {
            "id": "2",
            "title": "Respect",
            "content": "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        },
        {
            "id": "3",
            "title": "Service",
            "content": "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
        },
        {
            "id": "4",
            "title": "Sécurité",
            "content": "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        }
    ];

    return (
        <div className='about'>
            <Banner2 />
            <main className='about-main'> 
            {/* Mappage des textes "a-propos" et affichage dans chaque Collapse */}
                {aboutText.map(data => { 
                    return (
                        <div key={data.id} className="about-main-collapse">
                            <Collapse title={data.title} content={data.content} />
                        </div>
                    );
                })}
            </main>
        </div>
    );
}

export default About;
