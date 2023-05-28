import { useState } from "react";
import { View,Text, StyleSheet } from "react-native"
import MapView, { Marker, PROVIDER_GOOGLE, Polyline } from 'react-native-maps';
import MapViewDirections from "react-native-maps-directions";
import {googleMapsApiKey} from "@env"

const ParkMapView= ()=>{
  const [googleMapsApiKeyState, setGoogleMapsApiKeyState] = useState<string>(googleMapsApiKey);
    const [coordinates] = useState([
        {
          latitude: 48.8587741,
          longitude: 2.2069771,
        },
        {
          latitude: 48.8323785,
          longitude: 2.3361663,
        },
      ]);  return (
        <View style={styles.container}>
          <MapView
            style={styles.maps}
            initialRegion={{
              latitude: coordinates[0].latitude,
              longitude: coordinates[0].longitude,
              latitudeDelta: 0.0622,
              longitudeDelta: 0.0121,
            }}>
            <MapViewDirections
              origin={coordinates[0]}
              destination={coordinates[1]}
              apikey={googleMapsApiKeyState}
              strokeWidth={4}
              strokeColor="#111111"
            />
            <Marker coordinate={coordinates[0]} />
            <Marker coordinate={coordinates[1]} />
          </MapView>
        </View>
      );
}

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