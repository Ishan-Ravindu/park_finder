import {View, Text, StyleSheet} from 'react-native';
import {
  PLACEHOLDER_TEXT_COLOR,
  PRIMARY_BACKGROUND_COLOR,
  PRIMARY_TEXT_COLOR,
} from '../../styles/colors';
import Button from '../../components/Button';
import {RegisterMobileNumberStackProps} from '../../navigation/types';
import {useState} from 'react';
import countries from '../../components/CountryCodeSelection/countries';
import CountryCodeSelection from '../../components/CountryCodeSelection';
import MainTextInput from '../../components/MainTextInput';

const RegisterMobileNumber: React.FC<RegisterMobileNumberStackProps> = ({
  navigation,
}: RegisterMobileNumberStackProps) => {
  const [mobileNumber, setMobileNumber] = useState<string>('');
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  return (
    <View style={styles.container}>
      <View style={styles.mobileNumberContainer}>
        <Text style={styles.title}>Enter your mobile number</Text>
        <View style={styles.countryCodeContainer}>
          <CountryCodeSelection
            selectedCountry={selectedCountry}
            setSelectedCountry={setSelectedCountry}
          />
          <MainTextInput
            style={styles.mobileNumber}
            placeholderTextColor={PLACEHOLDER_TEXT_COLOR}
            value={mobileNumber}
            placeholder="Mobile Number"
            onChangeText={text => setMobileNumber(text)}
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          onPress={() => {
            navigation.push('ValidateOTP');
          }}
          title="Next"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARY_BACKGROUND_COLOR,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
    color: PRIMARY_TEXT_COLOR,
    marginBottom: 15,
  },
  mobileNumberContainer: {
    flex: 4,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  countryCodeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  mobileNumber: {
    width: 200,
    color: PRIMARY_TEXT_COLOR,
  },
});

export default RegisterMobileNumber;
