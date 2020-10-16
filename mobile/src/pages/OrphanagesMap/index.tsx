import React, { useState, useEffect } from 'react';

import { Feather } from '@expo/vector-icons';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';

import {
  Container,
  CalloutContainer,
  CalloutText,
  Footer,
  FooterText,
  CreateOrphanageButton,
} from './style';

import mapMarker from '../../images/map-marker.png';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import api from '../../services/api';

interface Orphanage {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
}

export default function OrphanagesMap() {
  const navigation = useNavigation();
  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

  console.log(orphanages);

  useFocusEffect(() => {
    api.get('/orphanages').then(response => {
      setOrphanages(response.data)
    })
  })

  function handleNavigateToOrphanageDetail(id: number) {
    navigation.navigate('OrphanageDetails', { id });
  }

  function handleNavigateToCreateOrphanage() {
    navigation.navigate('SelectMapPosition');
  }


  return (
    <Container>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: -23.3221327,
          longitude: -51.1427032,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}
      >
       
        { orphanages.map(orphanage => {
          return(
            <Marker
            key={orphanage.id}
            icon={mapMarker}
            calloutAnchor={{
              x: 2.5,
              y: 0.8,
            }}
            coordinate={{
              latitude: orphanage.latitude,
              longitude: orphanage.longitude,
            }}
          >
            <Callout tooltip onPress={() => handleNavigateToOrphanageDetail(orphanage.id)}>
              <CalloutContainer>
                <CalloutText>{orphanage.name}</CalloutText>
              </CalloutContainer>
            </Callout>
          </Marker>
          )
        }) }

      </MapView>

      <Footer>
        <FooterText>{orphanages.length} orfanatos encontrados</FooterText>

        <CreateOrphanageButton onPress={handleNavigateToCreateOrphanage}>
          <Feather name="plus" size={20} color="#000" />
        </CreateOrphanageButton>
      </Footer>
    </Container>
  );
}

const styles = StyleSheet.create({

  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
