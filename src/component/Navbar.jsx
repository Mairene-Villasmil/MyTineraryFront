import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
 import logoMI from '../images/logo.png'
import '../styles/Navbar.css'
import { FaUserCircle } from "react-icons/fa"
import { Link as LinkRouter } from 'react-router-dom'


function Navbar() {

    const NavLinks = [
        {
            name: <FaUserCircle size='50px' color='white' />,
            path: "LogIn"
        },
        {
            name: "Cities",
            path: "/Cities"
        },
    ]

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" id='UP'>
                <div className="container-fluid">
                    <div className="logo">
                    <LinkRouter to={"/Home"}><img src={logoMI} className='logoNav' alt="logo" /></LinkRouter>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <ul className="navbar-nav">
                            {NavLinks.map((Link, index) => (
                                <LinkRouter to={Link.path} key={index}>
                                    <li className="nav-link active">{Link.name}</li>
                                </LinkRouter>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
