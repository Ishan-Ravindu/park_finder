import {View, Text, StyleSheet} from 'react-native';
import MobileNumberSelection from '../components/MobileNumberSelection';

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
    backgroundColor: '#1A1A1A',
  },
  title: {
    fontSize: 30,
    fontWeight: '500',
    color:"#EDF6FF"
  },
});

export default RegisterMobileNumber;
