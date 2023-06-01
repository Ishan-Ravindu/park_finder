import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {
  DRAWER_BACKGROUND_COLOR,
  PRIMARY_BACKGROUND_COLOR,
  WHITE_COLOR,
} from '../../styles/colors';
import MiniButton from '../../components/MiniButton';
import Card from '../../components/Card';
import {HomeStackProps} from '../../navigation/types';
import useParkingList from '../../hooks/useParkingCenter';
import useLocationEnabler from '../../hooks/useLocationEnabler';

const Home: React.FC<HomeStackProps> = ({navigation}) => {
  const {parkingList, error, isLoading, fetchParkingList} = useParkingList();
  const {isLocationEnable, handleLocationEnabler} = useLocationEnabler();

  const handleButtonPress = () => {
    if (!isLocationEnable) handleLocationEnabler();
    if (isLocationEnable) fetchParkingList();
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.locationMessageContainer}>
        <Text style={styles.locationMessage}>
          {isLocationEnable
            ? 'To find your Parking location automatically, press on Search Parking'
            : 'To find your Parking location automatically, turn on location services'}
        </Text>
        <MiniButton
          title={isLocationEnable ? 'Search Parking' : 'Turn on location'}
          onPress={handleButtonPress}
        />
      </View>
      <View>
        <View>
          {isLoading ? (
            <ActivityIndicator />
          ) : (
            <>
              {error ? (
                <Text>{error}</Text>
              ) : (
                <>
                  {parkingList.map((parking, index) => (
                    <Card
                      key={index}
                      title={parking.name}
                      onPress={() =>
                        navigation.navigate('ParkMapView', parking)
                      }
                    />
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
  container: {
    flex: 1,
    backgroundColor: PRIMARY_BACKGROUND_COLOR,
  },
  locationMessage: {
    fontSize: 30,
    color: WHITE_COLOR,
    paddingBottom: 20,
  },
  locationMessageContainer: {
    backgroundColor: DRAWER_BACKGROUND_COLOR,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
});

export default Home;
