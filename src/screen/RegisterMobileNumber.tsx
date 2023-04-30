import {View, Text, StyleSheet} from 'react-native';
import MobileNumberSelection from '../components/MobileNumberSelection';
import { PRIMARY_BACKGROUND_COLOR, PRIMARY_TEXT_COLOR } from '../utils/colors';

function RegisterMobileNumber(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter your mobile number</Text>
      <MobileNumberSelection />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARY_BACKGROUND_COLOR,
  },
  title: {
    fontSize: 30,
    fontWeight: '500',
    color:PRIMARY_TEXT_COLOR
  },
});

export default RegisterMobileNumber;
