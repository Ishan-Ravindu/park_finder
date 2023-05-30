import {StyleSheet, Text, View,ScrollView, ActivityIndicator} from 'react-native';
import { DRAWER_BACKGROUND_COLOR, PRIMARY_BACKGROUND_COLOR, SECONDARY_GRADIENT_COLOR, WHITE_COLOR } from '../../styles/colors';
import MiniButton from '../../components/MiniButton';
import Button from '../../components/Button';
import Card from '../../components/Card';
import RNAndroidLocationEnabler from 'react-native-android-location-enabler';
import React, { useEffect, useState } from 'react';
import { HomeStackProps } from '../../navigation/types';
import useParkingList from '../../hooks/useParkingCenter';


const Home:React.FC<HomeStackProps> = ({navigation}) => {
  const [locationStatus, setLocationStatus] = useState(false);
  const {parkingList,error,isLoading} = useParkingList();

  useEffect(() => {
    RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({
      interval: 10000,
      fastInterval: 5000,
    })
      .then((data) => {
        if(data === 'enabled') setLocationStatus(true)
        if(data === 'already-enabled') setLocationStatus(true)
        console.log(data)
        // The user has accepted to enable the location services

        // data can be :
        //  - "already-enabled" if the location services has been already enabled
        //  - "enabled" if user has clicked on OK button in the popup
      })
      .catch((err) => {
        setLocationStatus(false)
        console.log(err)
        // The user has not accepted to enable the location services or something went wrong during the process
        // "err" : { "code" : "ERR00|ERR01|ERR02|ERR03", "message" : "message"}
        // codes :
        //  - ERR00 : The user has clicked on Cancel button in the popup
        //  - ERR01 : If the Settings change are unavailable
        //  - ERR02 : If the popup has failed to open
        //  - ERR03 : Internal error
      });

  }, []);
  
  return (
    <ScrollView style={styles.container}>
      {!locationStatus?<View style={styles.locationMessageContainer}>
        <Text style={styles.locationMessage}>
          To find your Parking location automatically, turn on location services
        </Text>
        <MiniButton title='Turn on location'/>
      </View>:null}
      <View>
      <View style={styles.cardContainer}>
        {isLoading?<ActivityIndicator />:(
          <>
          {error?<Text>{error}</Text>:(
            <>
            {parkingList.map((parking,index)=>(
              <Card key={index} title={parking.name} onPress={()=>navigation.navigate("ParkMapView")} />
            ))}
            </>
          )}
          </>
        )}
      </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:PRIMARY_BACKGROUND_COLOR,
  },
  locationMessage: {
    fontSize: 30,
    color:WHITE_COLOR,
    paddingBottom: 20,
  },
  locationMessageContainer: {
    backgroundColor:DRAWER_BACKGROUND_COLOR,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  cardContainer:{
    // paddingHorizontal: 20,
  }
});

export default Home;
