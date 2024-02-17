import './Footer.css'
import logo from '../../assets/white-logo.png'

function Footer(){
    return (
        <footer>
            <img src={logo} alt='Logo de Kasa'></img>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer