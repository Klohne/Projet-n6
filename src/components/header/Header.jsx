import { NavLink } from 'react-router-dom'
import React, { useState } from 'react';
import logo from '../../assets/logo.png'
import './Header.css'

function Header(){
    const [activePage, setActivePage] = useState('Home'); // État pour stocker la page active
        return (
        <header>
            <img src={logo} alt="Logo de Kasa" />
            <div className='nav-links'>
            <NavLink
                to="/"
                className={activePage === 'Home' ? 'active' : ''}
                onClick={() => setActivePage('Home')}>
                <li>Accueil</li>
            </NavLink>
            <NavLink
                to="/About"
                className={activePage === 'About' ? 'active' : ''}
                onClick={() => setActivePage('About')}>
                <li>A-propos</li>
            </NavLink>
            </div>
        </header>
    )
}

export default Header