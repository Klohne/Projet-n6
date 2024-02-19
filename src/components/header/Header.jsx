import { NavLink, useLocation } from 'react-router-dom';
import React from 'react';
import logo from '../../assets/logo.png';
import './Header.css';

function Header(){
    const location = useLocation(); // Obtenir l'URL actuelle. ( Renvoie un objet 'location', ex : pathname)
    const [activePage, setActivePage] = React.useState(location.pathname); // On gère ici l'état local 'activePage' ( URL active ). Sa valeur est 'location.pathname' ( l'URL de notre page )

    React.useEffect(() => {
        setActivePage(location.pathname); // On utilise useEffect pour effectuer une action dès que l'URL ([location]) change. Le state est donc mis à jour (setActivePage) avec le nouveau chemin (location.pathname)
    }, [location]);

    return (
        <header>
            <img src={logo} alt="Logo de Kasa" className='kasa-logo'/>
            <div className='nav-links'>
                <NavLink
                    to="/"
                    onClick={() => setActivePage('/')}
                    className={activePage === '/' ? 'active' : ''}>
                    <li>Accueil</li>
                </NavLink>
                <NavLink
                    to="/About"
                    onClick={() => setActivePage('/About')}
                    className={activePage === '/About' ? 'active' : ''}>
                    <li>A-propos</li>
                </NavLink>
            </div>
        </header>
    );
}

export default Header;
