import React, { useState, useEffect } from 'react';
import '../styles/Itineraries.css'
import 'react-datepicker/dist/react-datepicker.css';
import Navbar from './Navbar'
import Footer from './Footer'
import AccordionActivity from './AccordionActivity'
import { FaDollarSign, FaUserFriends, FaClock, FaGlobe, FaAngleLeft, FaMoneyBillWave } from "react-icons/fa";
import ReserveActivity from './ReserveActivity';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link as LinkRouter } from 'react-router-dom';

function Itineraries() {


    const [itineraries, setItineraries] = useState({});

    const { id } = useParams();

    async function getItineraries(id) {
        const itineraryDB = await axios.get("https://mairenevillasmil-api-itineraries-crud.onrender.com/api/itineraries/" + id)
        setItineraries(itineraryDB.data.response)
    }

    useEffect(() => {
        getItineraries(id);
    }, []);


    return (
        <div className='bodyItinerary'>
            <Navbar />
            {
                Object.keys(itineraries).length > 0 ?

                    <div>

                        <LinkRouter to={`/CityDetails/${itineraries.idCity}`}>
                            <span className="backCities">
                                <FaAngleLeft fontSize="30px" /> Back to City
                            </span>
                        </LinkRouter>
                        <div>
                            <p className='titleItinerary'>{itineraries.titleActivity}</p>
                        </div>

                        <div className="body">
                            <div className='cont-activity-img'>
                                <div className='containerImg' style={{
                                    backgroundImage: `url(${itineraries.imageItineraryA})`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: '100% 100%',
                                    backgroundSize: 'cover',
                                    borderRadius:'10px'
                                }}>
                                </div>
                                <div className='container-Img' >
                                    <div className='container-Img-' style={{
                                        backgroundImage: `url(${itineraries.imageItineraryB})`,
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center',
                                        backgroundSize: 'cover',
                                        borderRadius:'10px'
                                    }}>

                                    </div>
                                    <div className='container-Img_' style={{
                                        backgroundImage: `url(${itineraries.imageItineraryC})`,
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center',
                                        backgroundSize: 'cover',
                                        borderRadius:'10px'
                                    }}>

                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className='booking-info'>
                            <div className='information'>
                                <div className='about'>
                                    <h3>About</h3>
                                    <span>{itineraries.description}</span> <br />
                                    <br />
                                    <p>
                                        <FaDollarSign size='30px' color='white' />
                                        {Array.from({ length: itineraries.price }, (_, index) => (
                                            <FaMoneyBillWave style={{ margin: '0 5px' }} size='30px' color='white' key={index} />
                                        ))}
                                    </p>
                                    {/* _ no se utiliza pero se pone ya que el mapeo espera recibir un parametro a cambio aunque no lo vayamos a utilizar
                                    solo vamos a utilizar el (index) que se usa como key para cada elemento del array
                                    Array.from crea un nuevo array de la longitud de itineraries.price
                                    utilizamos la función de mapeo para generar un componente FaMoneyBillWave para cada índice del array */}
                                    <p><FaUserFriends size='30px' color='white' /> Ages {itineraries.years}, max 16 people per group</p>
                                    <p><FaClock size='30px' color='white' /> {itineraries.time}</p>
                                    <p><FaGlobe size='30px' color='white' /> English, Spanish</p>
                                </div>
                                <div className='more-information'>
                                    <AccordionActivity />
                                </div>
                            </div>
                            <ReserveActivity />
                        </div>

                    </div>
                    :
                    <div className='loadingI'>
                        <h1>Loading...</h1>
                    </div>
            }
            <Footer />
        </div>
    );
}

export default Itineraries;

