import React, { useContext, useEffect, useState } from 'react';

import { Map, TileLayer, Marker } from 'react-leaflet';
import { FiPlus, FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { ThemeContext } from 'styled-components';
import { Link } from 'react-router-dom';
import { PageMap, BackToHome, CreateOrphanage, StyledPop } from './styles';

import mapMarkerImg from '../../Images/map-marker.svg';
import MapIcon from '../../utils/mapIcon';
import api from '../../services/api';

interface Orphanage {
  id: number;
  latitude: number;
  longitude: number;
  name: string;
}

const OrphanagesMap: React.FC = () => {
  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

  console.log(orphanages);

  useEffect(() => {
    api.get('orphanages').then(response => {
      setOrphanages(response.data);
    });
  }, []);

  const { title } = useContext(ThemeContext);

  return (
    <PageMap>
      <aside>
        <header>
          <img src={mapMarkerImg} alt="" />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando sua visita :{')'}</p>
        </header>

        <footer>
          <strong>Londrina</strong>
          <span>Paraná</span>
        </footer>

        <BackToHome to="/">
          <FiArrowLeft size={32} color="#1E1C1C" />
        </BackToHome>
      </aside>

      <Map
        center={[-23.2882176, -51.1868928]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/${title}-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />

        {orphanages.map(orphanage => {
          return (
            <Marker 
            key={orphanage.id}
            icon={MapIcon} 
              position={[orphanage.latitude, orphanage.longitude]}
            >
              <StyledPop closeButton={false} minWidth={240} maxWidth={240}>
                {orphanage.name}
                <Link to={`/orphanages/${orphanage.id}`}>
                  <FiArrowRight size={20} color="#1E1C1C" />
                </Link>
              </StyledPop>
            </Marker>
          );
        })}
      </Map>

      <CreateOrphanage to="/orphanages/create">
        <FiPlus size={32} color="#1E1C1C" />
      </CreateOrphanage>
    </PageMap>
  );
};

export default OrphanagesMap;
