import React, {useState} from 'react';
import {FlatList, Modal, Pressable, StyleSheet, Text, View} from 'react-native';
import {faAngleDown} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import MainTextInput from './MainTextInput';
import countries from '../data/countries.json';

function MobileNumberSelection(): JSX.Element {
  const [mobileNumber, setMobileNumber] = useState<string>('');
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  const handleCountrySelection = (country: any) => {
    setSelectedCountry(country);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.flagContainer}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.flag}>{selectedCountry.flag}</Text>
        <FontAwesomeIcon icon={faAngleDown} style={{color: '#EDF6FF'}} />
      </Pressable>
      <Text style={styles.countryCode}>{selectedCountry.mobile_code}</Text>
      <MainTextInput
        style={styles.mobileNumber}
        placeholderTextColor={"#979797"}
        value={mobileNumber}
        placeholder="Mobile Number"
        onChangeText={text => setMobileNumber(text)}
      />
      {/* ############################################################################################# */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Select Your Country</Text>
          <FlatList
            data={countries}
            renderItem={({item}) => (
              <Pressable
                style={styles.ListItemContainer}
                onPress={() => handleCountrySelection(item)}>
                <Text style={styles.countryName}>
                  {item.flag + '  ' + item.name}
                </Text>
              </Pressable>
            )}
            keyExtractor={item => item.id}
          />
        </View>
      </Modal>
      {/* ############################################################################################# */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  flagContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  flag: {
    fontSize: 24,
  },
  countryCode: {
    fontSize: 24,
    color:"#EDF6FF"
  },
  mobileNumber: {
    width: 200,
    color:"#EDF6FF",
  },
  modalContainer: {
    position: 'absolute',
    bottom: 0,
    height: 300,
    width: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  ListItemContainer: {
    padding: 10,
  },
  countryName: {
    color: 'black',
    fontSize: 18,
    fontWeight: '700',
  },
  modalTitle: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
  },
});

export default MobileNumberSelection;
