import React from 'react'
import {Link } from 'react-router-dom'

 const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">Food App</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav">
                    <li>
                        <Link to="/"  className="nav-link">Accueil</Link>
                    </li>
                    <li>
                        <Link to="about"  className="nav-link">A Propos</Link>
                    </li>
                    <li>
                        <Link to="menu"  className="nav-link">Menus</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
