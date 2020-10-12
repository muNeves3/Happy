import React from 'react';
import { Link } from "react-router-dom";
import {FiPlus, FiMoon } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';

import mapMarkerImg from '../../Images/map-marker.svg';
import './styles.css';
import 'leaflet/dist/leaflet.css'

function OrphanagesMap() {
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
            </aside>
          
            <Map 
                center={[-23.2882176,-51.1868928]}
                zoom={15}
                style={{ width: '100%', height: '100%' }}
            >
                <TileLayer 
                    url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />
            </Map>

            <button className="dark-theme">
                <FiMoon  size={32} color="#fff"/>
            </button>


            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#fff"/>
            </Link>
        </div>
    );
}

export default OrphanagesMap;