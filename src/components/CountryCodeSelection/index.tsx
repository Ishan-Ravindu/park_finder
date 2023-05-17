import {useState} from 'react';
import {FlatList, Modal, Pressable, StyleSheet, Text, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faAngleDown} from '@fortawesome/free-solid-svg-icons';
import countries, {Country} from './countries';
import {PRIMARY_ICON_COLOR, PRIMARY_TEXT_COLOR} from '../../styles/colors';

interface props {
  selectedCountry: Country;
  setSelectedCountry: (country: Country) => void;
}

const CountryCodeSelection = ({selectedCountry, setSelectedCountry}: props) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleCountrySelection = (country: Country) => {
    setSelectedCountry(country);
    setModalVisible(false);
  };
  return (
    <>
      <Pressable
        style={styles.flagContainer}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.flag}>{selectedCountry.flag}</Text>
        <FontAwesomeIcon icon={faAngleDown} color={PRIMARY_ICON_COLOR} />
      </Pressable>
      <Text style={styles.countryCode}>{selectedCountry.mobile_code}</Text>
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
    </>
  );
};

const styles = StyleSheet.create({
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
    color: PRIMARY_TEXT_COLOR,
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

export default CountryCodeSelection;
