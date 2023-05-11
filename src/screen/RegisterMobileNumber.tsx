import {View, Text, StyleSheet} from 'react-native';
import MobileNumberSelection from '../components/MobileNumberSelection';
import {PRIMARY_BACKGROUND_COLOR, PRIMARY_TEXT_COLOR} from '../styles/colors';
import Button from '../components/Button';
import {RootStackParamList} from '../../App';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type RegisterMobileNumberProps = {
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    'RegisterMobileNumber'
  >;
};

const RegisterMobileNumber: React.FC<RegisterMobileNumberProps> = ({
  navigation,
}: RegisterMobileNumberProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.mobileNumberContainer}>
        <Text style={styles.title}>Enter your mobile number</Text>
        <MobileNumberSelection />
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
    fontSize: 30,
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
});

export default RegisterMobileNumber;
