import React from 'react';

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
import { useNavigation } from '@react-navigation/native';

export default function OrphanagesMap() {
  const navigation = useNavigation();

  function handleNavigateToOrphanageDetail() {
    navigation.navigate('OrphanageDetails');
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
        <Marker
          icon={mapMarker}
          calloutAnchor={{
            x: 2.5,
            y: 0.8,
          }}
          coordinate={{
            latitude: -23.3221327,
            longitude: -51.1427032,
          }}
        >
          <Callout tooltip onPress={handleNavigateToOrphanageDetail}>
            <CalloutContainer>
              <CalloutText>Lar dos Garotos</CalloutText>
            </CalloutContainer>
          </Callout>
        </Marker>
      </MapView>

      <Footer>
        <FooterText>2 orfanatos encontrados</FooterText>

        <CreateOrphanageButton onPress={() => {}}>
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
