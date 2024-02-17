import banner from '../../assets/banner1.png'
import './Banner.css'

function Banner(){
    return (
        <div className="banner">
            <img src={banner} alt="Bannière de la page d'accueil" />
            <p>Chez vous, partout et ailleurs</p>
        </div>
    )
}

export default Banner