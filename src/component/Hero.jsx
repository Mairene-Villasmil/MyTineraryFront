import '../styles/Hero.css'
import { Link as LinkRouter } from 'react-router-dom'
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa"
import Navbar from './Navbar'

function Hero() {
    return (
        <>
         <Navbar />
        <div className='pagP'>
            <div className='C-Text'>
                <span className='imgL' />
                <h1 className='textC'>Find your perfect trip designed by insiders who know and love their cities</h1>
                <LinkRouter to={"/Home"}>
                    <p className='animation button'>GET INSPIRED</p>
                </LinkRouter>
            </div>
        </div>
        <section className="iconsHero">
                <ul>
                    <li className="instagram">
                        <FaInstagram />
                    </li>
                    <li className="facebook">
                        <FaFacebook />
                    </li>
                    <li className="twitter">
                        <FaTwitter />
                    </li>
                    <li className="youtube">
                        <FaYoutube />
                    </li>
                </ul>
            </section>
            <div className='copyHero'>
                <p className="copyR-Hero">Copyright&copy; My Itinerary - All rights reserved</p>
            </div>
        </>
    )
}

export default Hero