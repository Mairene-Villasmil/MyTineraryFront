import React, { useState, useEffect } from 'react';
import '../styles/CityDetails.css';
import { FaAngleDown, FaAngleLeft, FaGlobe, FaDollarSign, FaUsers, FaAngleUp } from "react-icons/fa";
import { useParams } from 'react-router-dom';
import axios from 'axios'
import { Link as LinkRouter } from 'react-router-dom'
import CardItinerary from './CardItinerary'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Mousewheel, Keyboard } from 'swiper/modules';

function CityDetails() {
    const [isExpanded, setIsExpanded] = useState(false);
    const [city, setCity] = useState([]);
    const [itineraries, setItineraries] = useState([]);

    const { id } = useParams();

    async function getCity(id) {
        const cityDB = await axios.get("https://mairene-api-citi-crud.onrender.com/api/cities/" + id);
        setCity(cityDB.data.response);
    }

    async function getItineraries(idCity) {
        const itinerariesDB = await axios.get("https://mairenevillasmil-api-itineraries-crud.onrender.com/api/itineraries/cities/" + idCity);
        setItineraries(itinerariesDB.data.response);
    }
    useEffect(() => {
        getCity(id);
        getItineraries(id);
    }, [id]);

    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <>
            {
                city.length > 0 ?
                    < div
                        className="containerCity"
                        style={{
                            backgroundImage: `url(${city[0].image})`,
                            backgroundAttachment: 'fixed',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: '100% 100%',
                            backgroundSize: 'cover',
                        }} id='upDitails'>
                        <div className="overlayDitails">
                            <LinkRouter to='/Cities'>
                                <span className='backCities' onClick={handleToggle}>
                                    <FaAngleLeft fontSize='30px' /> Back to cities
                                </span>
                            </LinkRouter>
                            <p className='title'>{city[0].name}</p>
                            <div className='details'>
                                <span className='buttonDetails' onClick={handleToggle}>
                                    <FaAngleDown />
                                </span>
                            </div>
                        </div>
                        {isExpanded && (
                            <div className="Details overlayDitails">
                                <section className='sectionInf'>
                                    <div className='items'>
                                        <p><FaGlobe /> {city[0].language}</p>
                                        <p><FaDollarSign /> {city[0].currency}</p>
                                        <p><FaUsers /> {city[0].population}</p>
                                    </div>
                                    <div className='description'>
                                        <p>{city[0].description}</p>
                                    </div>
                                </section>
                                <section className='activities'>
                                    <div>
                                        <p className='titleActivities'>Itineraries</p>
                                    </div>
                                    {
                                        itineraries.length > 0 ?
                                            <Swiper
                                                cssMode={true}
                                                navigation={true}
                                                pagination={true}
                                                mousewheel={true}
                                                keyboard={true}
                                                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                                                className="mySwiper"
                                            >
                                                {itineraries.map((itinerary) => (

                                                    <SwiperSlide key={itinerary._id}>
                                                        <CardItinerary itinerary={itinerary} />
                                                    </SwiperSlide>
                                                ))}
                                            </Swiper>
                                            : <div className='zeroResult'>
                                                <h3 className='animationR'>Very soon you will find the itineraries available for this city</h3>
                                            </div>
                                    }
                                    <div className='up'>
                                        <a href="#upDitails" className='buttonUp'><FaAngleUp /></a>
                                    </div>
                                </section>

                            </div>
                        )}
                    </div >
                    :
                    <h1> </h1>
            }
        </>
    );
}

export default CityDetails;