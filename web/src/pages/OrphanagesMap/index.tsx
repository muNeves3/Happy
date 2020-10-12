import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import {FiPlus, FiMoon, FiArrowLeft } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';

import mapMarkerImg from '../../Images/map-marker.svg';
import './styles.css';
import 'leaflet/dist/leaflet.css'
import light from '../../Styles/themes/light';
import { map } from 'leaflet';

function OrphanagesMap() {
    var [mapTheme, setMapTheme] = useState('light')

   function toggleMapTheme() {
        if(mapTheme === "light") {
            setMapTheme("dark")
        }
        else {
            setMapTheme("light")
        }
   }
    
    return(
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt=""/>

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando sua visita :{")"}</p>
                </header>

                    <footer>
                        <strong>Londrina</strong>
                        <span>Paraná</span>
                    </footer>

                    <Link to="/" className="back-to-home">
                        <FiArrowLeft size={32} color="#fff"/>
                    </Link>
            </aside>    
          
            <Map 
                center={[-23.2882176,-51.1868928]}
                zoom={15}
                style={{ width: '100%', height: '100%' }}
            >
                <TileLayer 
                    url={`https://api.mapbox.com/styles/v1/mapbox/${mapTheme}-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />
            </Map>

            <button className="dark-theme" onClick={toggleMapTheme}>
                <FiMoon  size={32} color="#fff"/>
            </button>


            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#fff"/>
            </Link>
        </div>
    );
}

export default OrphanagesMap;