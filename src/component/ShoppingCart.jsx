import '../styles/ShoppingCart.css'
import React from 'react';
import Navbar from './Navbar'
import Footer from './Footer'
import imgUC from '../images/UC.png'

function ShoppingCart() {

    return (
        <>
            <Navbar />
                <div className='shoppingCart'>
                    <p className='animationC'>SHOPPING CART UNDER CONSTRUCTION</p>
                    <img src={imgUC} className='imgUC' alt="" />
                </div>
            <Footer />
        </>
    );
}

export default ShoppingCart