import {View, Text, StyleSheet} from 'react-native';
import MobileNumberSelection from '../components/MobileNumber';

function RegisterMobileNumber(): JSX.Element {
  return (
    <View>
      <Text style={styles.title}>Enter your mobile number</Text>
      <MobileNumberSelection />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: '500',
  },
});

export default RegisterMobileNumber;
