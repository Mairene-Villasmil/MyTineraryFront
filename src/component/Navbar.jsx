import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import logoMI from '../images/logo.png'
import '../styles/Navbar.css'
import { FaUserCircle } from "react-icons/fa"
import { Link as LinkRouter } from 'react-router-dom'


function Navbar() {

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" id='UP'>
                <div className="container-fluid">
                    <div className="logo">
                        <LinkRouter to={"/Home"}>
                            <img src={logoMI} className='logoNav' alt="logo" />
                        </LinkRouter>
                    </div>
                    <div className='cities'>
                        <LinkRouter to="/Cities">
                            <p>Cities</p>
                        </LinkRouter>
                    </div>
                    <div className='user'>
                        <LinkRouter to='/SignIn'>
                            <span><FaUserCircle color='white' size='40px' /></span>
                        </LinkRouter>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
