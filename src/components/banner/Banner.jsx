import banner from '../../assets/banner1.png'
import './Banner.css'

function Banner(){
    return (
        <div className="banner">
            <img src={banner} alt="Bannière de la page d'accueil" />
            <p><span className='first-span'>Chez vous,</span> <span className="second-span">partout et ailleurs</span></p>
        </div>
    )
}

export default Banner