import React, { useState, useContext } from 'react';
import { Link } from "react-router-dom";
import { Map, TileLayer } from 'react-leaflet';
import {FiPlus, FiMoon, FiArrowLeft } from 'react-icons/fi';
import { ThemeContext } from 'styled-components'
import mapMarkerImg from '../../Images/map-marker.svg';
// import './styles.css';
import { PageMap, BackToHome, CreateOrphanage } from './styles'
import 'leaflet/dist/leaflet.css'


const OrphanagesMap: React.FC = () => {
    const { title } = useContext(ThemeContext)

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
        <PageMap>
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

                    <BackToHome to="/" >
                        <FiArrowLeft size={32} color="#1E1C1C"/>
                    </BackToHome>
            </aside>    
          
            <Map 
                center={[-23.2882176,-51.1868928]}
                zoom={15}
                style={{ width: '100%', height: '100%' }}
            >
                <TileLayer 
                    url={`https://api.mapbox.com/styles/v1/mapbox/${title}-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />
            </Map>

            {/* <button className="dark-theme" onClick={toggleMapTheme}>
                <FiMoon  size={32} color="#fff"/>
            </button> */}


            <CreateOrphanage to="">
                <FiPlus size={32} color="#1E1C1C"/>
            </CreateOrphanage>
        </PageMap>
    );
}

export default OrphanagesMap;