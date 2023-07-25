import '../styles/Hero.css'
import { Link as LinkRouter } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import imgHero from '../images/hero.svg'

function Hero() {
    return (
        <div style={{
            backgroundImage: `url(${imgHero})`,
            backgroundRepeat: 'no-repeat',

            backgroundSize: 'cover',
          }}>
            <div className='overlayHero' >
                <Navbar/>
            <div className='pagP'>
                <div className='C-Text'>
                    <span className='imgL' />
                    <h1 className='textC'>Find your perfect trip designed by insiders who know and love their cities</h1>
                    <LinkRouter to={"/Home"}>
                        <p className='animation button'>GET INSPIRED</p>
                    </LinkRouter>
                </div>
            </div>
            <div >
                 <Footer/>
            </div>
            
            </div>
           
        </div>

    )
}

export default Hero