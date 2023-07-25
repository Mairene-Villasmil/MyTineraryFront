import React, { useRef, useState, useEffect } from "react";
import { FaAngleLeft, FaAngleRight, FaPlaneDeparture } from 'react-icons/fa';
import "../styles/Home.css";
import Navbar from './Navbar';
import Footer from './Footer'
import { Link as LinkRouter } from 'react-router-dom'
import img1 from '../images/alemania.png'
import img2 from '../images/argentina.png'
import img3 from '../images/australia.png'
import img4 from '../images/china.png'
import img5 from '../images/colombia.png'
import img6 from '../images/eeuu.png'
import img7 from '../images/espana.png'
import img8 from '../images/francia.png'
import img9 from '../images/italia.png'
import img10 from '../images/japon.png'
import img11 from '../images/reino-unido.png'
import img12 from '../images/venezuela.png'

function HomeTEST() {
    const slideRef = useRef(null);
    const [loadingProgress, setLoadingProgress] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);

    const data = [
        {
            id: 1,
            imgUrl:"https://firebasestorage.googleapis.com/v0/b/mytinerary-efdaf.appspot.com/o/VENEZUELA.gif?alt=media&token=ca0f3d5e-f554-4bf2-a0ce-37372fcbca9d",
            desc: "VENEZUELA",
            name: "Popular My Itineraries",
            flag: <img src={img12} className="flag" alt="flag" />
        },
        {
            id: 2,
            imgUrl:"https://firebasestorage.googleapis.com/v0/b/mytinerary-efdaf.appspot.com/o/-UnitedKingdom.gif?alt=media&token=663b1987-7fe4-478a-8dd2-be98210c0edf",
            desc: "UNITED KINGDON",
            name: "Popular My Itineraries",
            flag: <img src={img11} className="flag" alt="flag" />
        },
        {
            id: 3,
            imgUrl:"https://firebasestorage.googleapis.com/v0/b/mytinerary-efdaf.appspot.com/o/JAPAN.gif?alt=media&token=b12e8499-10dc-4b6b-a6a4-22e336f1778a",
            desc: "JAPAN",
            name: "Popular My Itineraries",
            flag: <img src={img10} className="flag" alt="flag" />
        },
        {
            id: 4,
            imgUrl:"https://firebasestorage.googleapis.com/v0/b/mytinerary-efdaf.appspot.com/o/ARGENTINA.gif?alt=media&token=e712f759-4b00-4f3a-85b6-b2906850432f",
            desc: "ARGENTINA",
            name: "Popular My Itineraries",
            flag: <img src={img2} className="flag" alt="flag" />
        },
        {
            id: 5,
            imgUrl:"https://firebasestorage.googleapis.com/v0/b/mytinerary-efdaf.appspot.com/o/CHINA.gif?alt=media&token=cdb5fda5-8c66-45ca-af97-b6dab2f6572d",
            desc: "CHINA",
            name: "Popular My Itineraries",
            flag: <img src={img4} className="flag" alt="flag" />
        },
        {
            id: 6,
            imgUrl:"https://firebasestorage.googleapis.com/v0/b/mytinerary-efdaf.appspot.com/o/FRANCE.gif?alt=media&token=892c686b-2b1f-44e1-8460-c7f6548dd9e6",
            desc: "FRANCE",
            name: "Popular My Itineraries",
            flag: <img src={img8} className="flag" alt="flag" />
        },
        {
            id: 7,
            imgUrl:"https://firebasestorage.googleapis.com/v0/b/mytinerary-efdaf.appspot.com/o/ITALY.gif?alt=media&token=0fb04fab-96a7-4040-ad51-a04af9a0f23c",
            desc: "ITALY",
            name: "Popular My Itineraries",
            flag: <img src={img9} className="flag" alt="flag" />
        },
        {
            id: 8,
            imgUrl:"https://firebasestorage.googleapis.com/v0/b/mytinerary-efdaf.appspot.com/o/GERMANY.gif?alt=media&token=b82714c7-dc9c-4aaf-b3d6-36cdb9b59ac3",
            desc: "GERMANY",
            name: "Popular My Itineraries",
            flag: <img src={img1} className="flag" alt="flag" />
        },
        {
            id: 9,
            imgUrl:"https://firebasestorage.googleapis.com/v0/b/mytinerary-efdaf.appspot.com/o/AUSTRALIA.gif?alt=media&token=7b710da8-4a15-4f1d-9190-8af502876cb5",
            desc: "AUSTRALIA",
            name: "Popular My Itineraries",
            flag: <img src={img3} className="flag" alt="flag" />
        },
        {
            id: 10,
            imgUrl:"https://firebasestorage.googleapis.com/v0/b/mytinerary-efdaf.appspot.com/o/USA.gif?alt=media&token=038be7d1-87ff-43ff-91a5-9cdb2d69dbdd",
            desc: "UNITED STATES",
            name: "Popular My Itineraries",
            flag: <img src={img6} className="flag" alt="flag" />
        },
        {
            id: 11,
            imgUrl:"https://firebasestorage.googleapis.com/v0/b/mytinerary-efdaf.appspot.com/o/COLOMBIA.gif?alt=media&token=893aa334-0271-41fa-b64c-878620eff251",
            desc: "COLOMBIA",
            name: "Popular My Itineraries",
            flag: <img src={img5} className="flag" alt="flag" />
        },
        {
            id: 12,
            imgUrl:"https://firebasestorage.googleapis.com/v0/b/mytinerary-efdaf.appspot.com/o/SPAIN.gif?alt=media&token=c9e00564-480b-4ba8-93e0-945ecf44e5d1",
            desc: "Spain",
            name: "Popular My Itineraries",
            flag: <img src={img7} className="flag" alt="flag" />
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            handleClickNext();
        }, 5000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    const handleClickNext = () => {
        let items = slideRef.current.querySelectorAll('.item');
        slideRef.current.appendChild(items[0]);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    };

    const handleClickPrev = () => {
        let items = slideRef.current.querySelectorAll('.item');
        slideRef.current.prepend(items[items.length - 1]);
        setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
    };


    return (
        <>
            <Navbar />
            <div className="bodyHome">
                <div className='CallTo'>
                    <h4>Where will your next adventure be?</h4>
                    <LinkRouter to={"/Cities"}>
                        <button className="animationI buttonI">Find out <FaPlaneDeparture /></button>
                    </LinkRouter>
                </div>
                <div className="container" style={{overflow:'hidden'}}>
                    <div className="loadbar" style={{ width: `${loadingProgress}%` }}></div>
                    <div id="slide" ref={slideRef}>
                        {data.map((item) => (
                            <div
                                key={item.id}
                                className="item"
                                style={{ backgroundImage: `url(${item.imgUrl})` }}
                            >
                                <div className="overlayHome">
                                    <div className="content">
                                    <div className="name">{item.name}</div>
                                    <div className="des">{item.flag}{item.desc}</div>

                                </div>
                                </div>
                                
                            </div>
                        ))}
                    </div>
                    <div className="buttons">
                        <button id="prev" onClick={handleClickPrev}>
                            <FaAngleLeft />
                        </button>
                        <button id="next" onClick={handleClickNext}>
                            <FaAngleRight />
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default HomeTEST;