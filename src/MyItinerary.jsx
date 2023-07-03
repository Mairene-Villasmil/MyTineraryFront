import React from 'react';
import Home from './component/Home'
import Hero from './component/Hero';
import Cities from './component/Cities'
import CityDetails from './component/CityDetails';
import 'bootstrap/dist/css/bootstrap.css';
import { Routes, Route } from 'react-router-dom';

function MyItinerary() {
  return (
      <div>
        <Routes>
        <Route path='*' element={<Home />}></Route>
          <Route path='' element={<Hero />}></Route>
          <Route path='/Home' element={<Home />}></Route>
          <Route path='/Cities' element={<Cities />}></Route>
          <Route path='/CityDetails/:id' element={<CityDetails />}></Route>
        </Routes>
      </div>
  );
}

export default MyItinerary;

