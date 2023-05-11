import {StyleSheet, Text, View} from 'react-native';
import MainTextInput from '../components/MainTextInput';
import {
  PLACEHOLDER_TEXT_COLOR,
  PRIMARY_BACKGROUND_COLOR,
  PRIMARY_TEXT_COLOR,
} from '../styles/colors';
import Button from '../components/Button';
import {BOTTOM_BUTTON_BOTTOM, BOTTOM_BUTTON_LEFT} from '../styles/positions';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';

type GetUserDetailsProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'GetUserDetails'>;
};

const GetUserDetails: React.FC<GetUserDetailsProps> = ({
  navigation,
}: GetUserDetailsProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <Text style={styles.title}>What’s your name?</Text>
        <View style={styles.inputContainer}>
          <MainTextInput
            placeholder="First"
            placeholderTextColor={PLACEHOLDER_TEXT_COLOR}
            style={styles.input}
          />
          <MainTextInput
            placeholder="Last"
            placeholderTextColor={PLACEHOLDER_TEXT_COLOR}
            style={styles.input}
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          onPress={() => {
            navigation.push('SetUserAvatar');
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
  },
  title: {
    fontSize: 24,
    color: PRIMARY_TEXT_COLOR,
    marginBottom: 15,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    width: '45%',
    color: PRIMARY_TEXT_COLOR,
  },
  mainContainer: {
    flex: 4,
    paddingHorizontal: 20,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default GetUserDetails;
