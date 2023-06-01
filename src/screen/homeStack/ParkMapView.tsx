import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE, Polyline} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {googleMapsApiKey} from '@env';
import useLocation from '../../hooks/useLocation';
import {ParkMapViewStackProps} from '../../navigation/types';

const ParkMapView: React.FC<ParkMapViewStackProps> = ({route}) => {
  const [googleMapsApiKeyState] = useState<string>(googleMapsApiKey);
  const {location} = useLocation();
  const parkCenter = route.params;

  return (
    <View style={styles.container}>
      <MapView
        style={styles.maps}
        initialRegion={{
          latitude: location?.coords.latitude || 0,
          longitude: location?.coords.longitude || 0,
          latitudeDelta: 0.0622,
          longitudeDelta: 0.0121,
        }}>
        <MapViewDirections
          origin={location?.coords}
          destination={{
            latitude: parkCenter.latitude,
            longitude: parkCenter.longitude,
          }}
          apikey={googleMapsApiKeyState}
          strokeWidth={4}
          strokeColor="#111111"
        />
        <Marker
          coordinate={{
            latitude: location?.coords.latitude || 0,
            longitude: location?.coords.longitude || 0,
          }}
        />
        <Marker
          coordinate={{
            latitude: location?.coords.latitude || 0,
            longitude: location?.coords.longitude || 0,
          }}
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    //   height: 400,
    //   width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  maps: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default ParkMapView;
