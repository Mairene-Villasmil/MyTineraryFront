import { useEffect, useState } from 'react';
import '../styles/Cities.css';
import Footer from './Footer';
import { FaMapPin, FaHeart, FaStar, FaAngleUp } from 'react-icons/fa';
import axios from 'axios';
import { Link as LinkRouter } from 'react-router-dom';
import Navbar from './Navbar';
import zeroResults from '../images/_zero-results.gif'


function Cities() {
  const [cities, setCities] = useState([]);
  const [filter, setFilter] = useState({ country: '', search: '' }); // vamos a usar filter para filtrar nuestras ciudades en las 2 busquedas, country en el select y search en el input

  async function getData() {
    const citiesDB = await axios.get("http://localhost:5000/api/cities");
    setCities(citiesDB.data.response.cities);
  }

  useEffect(() => {
    getData();
  }, []);

  function applyFilters(city) { // esta funcion nos ayuda a verificar si la ciudad cumple con los filtros de busqueda y pais es decir si coincide con el select y el input
    const cityNameNormalized = city.name
      .normalize('NFD') //convierte en cadena
      .replace(/[\u0300-\u036f]/g, '') //omite acentos
      .trim()//quita espacios
      .toLowerCase(); // lleva todo a minuscula
    const filterSearchNormalized = filter.search
      .normalize('NFD') //convierte en cadena
      .replace(/[\u0300-\u036f]/g, '') //omite acentos
      .trim()//quita espacios
      .toLowerCase(); // lleva todo a minuscula

      if (filter.search && !cityNameNormalized.includes(filterSearchNormalized)) {
        return false; // Si filter.search tiene un valor y el nombre de la ciudad no coincide, se devuelve false
      }else
      if (filter.country && city.country !== filter.country) {
        return false; // Si filter.country tiene un valor y el país de la ciudad no coincide, también se devuelve false para excluir esa ciudad del resultado.
      }else
      if (!filter.search && !filter.country) {
        return true; // Mostrar todas las ciudades si no hay filtros
      }else
      return true;
    }

  function renderCities() {  //renderizamos las ciudades filtradas
    const filteredCities = cities.filter(applyFilters); // obtenemos las ciudades que cumplen con los filtros aplicados en la funcion applyFilters

    if (filteredCities.length > 0) { // verificamos si hay ciudades filtradas con la condicion > 0, si hay nos imprime en pantalla las tarjetas que coinciden con la busqueda
      return (
        <div className="Country">
          {filteredCities.map((city, index) => (
            <LinkRouter key={index} to={'/CityDetails/' + city._id}>
              <div
                className="cardCities"
                style={{
                  backgroundImage: `url(${city.image})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: '100% 100%',
                  backgroundSize: 'cover',
                }}
              >
                <div className="overlay">
                  <div className='punctuation'><FaStar color='#ffff29' /> 4.8</div>
                  <div className="likeButton"><FaHeart /></div>
                  <div className="infCountry">
                    <p className="titleLocation">{city.name}</p>
                    <p className="nameCountry"><FaMapPin /> {city.country}</p>
                  </div>
                </div>
              </div>
            </LinkRouter>
          ))}
        </div>
      );
    } else { //de lo contrario si no obtenemos ninguna coincidencia nos enseña el mensaje (cero resultado)
      return (
        <div className='zeroResults'>
          <img src={zeroResults} className='imgNoResults' alt="No Results" />
        </div>
      );
    }
  }

  return (
    <>
      <Navbar />
      <div className='bodyCountry'>
        <div className="searchFilters">
          <div className='select'>
            <select
              name="format"
              id="format"
              value={filter.country} //se le da el value de filter.country en onChange para que filtre segun el pais seleccionado segun indique el value
              onChange={(e) => setFilter({ ...filter, country: e.target.value })}>
              <option value="">Choose the country you want to visit</option>
              <option value="Argentina">Argentina</option>
              <option value="Australia">Australia</option>
              <option value="Brazil">Brazil</option>
              <option value="China">China</option>
              <option value="Colombia">Colombia</option>
              <option value="France">France</option>
              <option value="Germany">Germany</option>
              <option value="Italy">Italy</option>
              <option value="Japan">Japan</option>
              <option value="Spain">Spain</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="United States">United States</option>
              <option value="Venezuela">Venezuela</option>
            </select>
          </div>
          <div>
            <input
              type="search"
              placeholder="Find your destiny"
              value={filter.search} //filtramos por filter.sarch el cual va filtrando el texto que se va ingresando en el input y va comparando datos
              onChange={(e) => setFilter({ ...filter, search: e.target.value })}
            />
          </div>
        </div>
        <div>
          {cities.length > 0 ? renderCities()  // verificamos si hay ciudades cargadas en (cities), si hay se llama a la funcion renderCities, si no las hay se muestra (LOADING), tambien funciona para mostrar el mensaje de (LOADING) mientras esperamos respues de la api y se cargan als tarjetas
          : <div className='loading'><h3>LOADING...</h3></div>}
        </div> 
      </div>
      <div className='up'>
        <a href="#UP" className='buttonUp'><FaAngleUp /></a>
      </div>
      <Footer />
    </>
  );
}

export default Cities;







