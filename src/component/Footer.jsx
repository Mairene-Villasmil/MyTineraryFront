import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../styles/Footer.css';
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube, FaMobile, FaEnvelopeOpen, FaUser } from "react-icons/fa"
import { Link as LinkRouter } from 'react-router-dom'

function Footer() {
  const NavLinks = [
    {
      name: <FaUser />,
      path: "LogIn"
    },
    {
      name: "Cities",
      path: "/Cities"
    }
  ]

  return (
    <section className='footer'>
      <section className='navDos'>
        {NavLinks.map((Link, index) => (
          <LinkRouter to={Link.path} key={index}>
            <p className="link">{Link.name}</p>
          </LinkRouter>
        ))}
      </section>
      <section className='Footer'>
        <section className='footer-Responsive'>
          <section className='contact'>
            <p>Contact Us</p>
            <p><FaMobile /> 123456789</p>
            <p><FaEnvelopeOpen /> mytinerary@gmail.com</p>
          </section>
          <section className="politics">
            <p>Privacy Policy</p>
            <p>Terms and Conditions</p>
            <p>Legal Warning</p>
          </section>
        </section>
        <section className="icons">
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
      </section>
      <div className='copy'>
        <p className="copyR">Copyright&copy; My Itinerary - All rights reserved</p>
      </div>
    </section>
  );
}

export default Footer;
