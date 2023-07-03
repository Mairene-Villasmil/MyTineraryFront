import React from 'react';
import '../styles/Home.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import imgA from '../images/ARGENTINA.svg'
import imgB from '../images/AUSTRALIA.svg'
import imgC from '../images/USA.svg'
import imgD from '../images/SPAIN.svg'
import imgE from '../images/JAPAN.svg'
import imgF from '../images/COLOMBIA.svg'
import imgG from '../images/FRANCE.svg'
import imgH from '../images/UNITED-KINDOM.svg'
import imgI from '../images/CHINA.svg'
import imgJ from '../images/BRAZIL.svg'
import imgK from '../images/ITALY.svg'
import imgL from '../images/VENEZUELA.svg'
import { FaPlaneDeparture } from 'react-icons/fa';
import { Link as LinkRouter } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'


function Home() {
  return (
    <div>
      <Navbar />
      <div className="carousel-container">
        <div id="carouselExample" className="carousel slide" data-bs-ride="carousel" data-bs-interval="4000">
          <h2>Popular MYtineraries</h2>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row">
                <div className="col">
                  <img src={imgA} className="carousel-image" alt="Imagen 1" style={{
                    backgroundSize: '100%',
                    borderRadius: '10px',

                  }} />
                  <p className='name-img'>ARGENTINA</p>
                </div>
                <div className="col">
                  <img src={imgB} className="carousel-image" alt="Imagen 1" style={{
                    backgroundSize: '100%',
                    borderRadius: '10px',

                  }} />
                  <p className='name-img'>AUSTRALIA</p>
                </div>
                <div className="col">
                  <img src={imgC} className="carousel-image" alt="Imagen 1" style={{
                    backgroundSize: '100%',
                    borderRadius: '10px',

                  }} />
                  <p className='name-img'>USA</p>
                </div>
                <div className="col">
                  <img src={imgD} className="carousel-image" alt="Imagen 1" style={{
                    backgroundSize: '100%',
                    borderRadius: '10px',

                  }} />
                  <p className='name-img'>SPAIN</p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col">
                  <img src={imgE} className="carousel-image" alt="Imagen 1" style={{
                    backgroundSize: '100%',
                    borderRadius: '10px',

                  }} />
                  <p className='name-img'>JAPAN</p>
                </div>
                <div className="col">
                  <img src={imgF} className="carousel-image" alt="Imagen 1" style={{
                    backgroundSize: '100%',
                    borderRadius: '10px',

                  }} />
                  <p className='name-img'>COLOMBIA</p>
                </div>
                <div className="col">
                  <img src={imgG} className="carousel-image" alt="Imagen 1" style={{
                    backgroundSize: '100%',
                    borderRadius: '10px',

                  }} />
                  <p className='name-img'>FRANCE</p>
                </div>
                <div className="col">
                  <img src={imgH} className="carousel-image" alt="Imagen 1" style={{
                    backgroundSize: '100%',
                    borderRadius: '10px',

                  }} />
                  <p className='name-img'>UNITED KINGDOM</p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col">
                  <img src={imgI} className="carousel-image" alt="Imagen 1" style={{
                    backgroundSize: '100%',
                    borderRadius: '10px',

                  }} />
                  <p className='name-img'>CHINA</p>
                </div>
                <div className="col">
                  <img src={imgJ} className="carousel-image" alt="Imagen 1" style={{
                    backgroundSize: '100%',
                    borderRadius: '10px',

                  }} />
                  <p className='name-img'>BRAZIL</p>
                </div>
                <div className="col">
                  <img src={imgK} className="carousel-image" alt="Imagen 1" style={{
                    backgroundSize: '100%',
                    borderRadius: '10px',

                  }} />
                  <p className='name-img'>ITALY</p>
                </div>
                <div className="col">
                  <img src={imgL} className="carousel-image" alt="Imagen 1" style={{
                    backgroundSize: '100%',
                    borderRadius: '10px',

                  }} />
                  <p className='name-img'>VENEZUELA</p>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Anterior</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Siguiente</span>
          </button>
        </div>
      </div>
      <div className='CallTo'>
        <h3>Where will your next adventure be?</h3>
        <LinkRouter to={"/Cities"}>
          <button className="animation buttonI">Find out <FaPlaneDeparture /></button>
        </LinkRouter>
      </div>
      <Footer />
    </div>
  );
}

export default Home;