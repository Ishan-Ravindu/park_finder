import {StyleSheet, Text, View} from 'react-native';
import Avatar from '../../components/Avatar';
import {
  PRIMARY_BACKGROUND_COLOR,
  PRIMARY_TEXT_COLOR,
} from '../../styles/colors';
import Button from '../../components/Button';

const SetUserAvatar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <Avatar />
        <Text style={styles.text}>
          By tapping the arrow below, you agree to ParkFinder’s Terms of Use and
          acknowledge that you have read the Privacy Policy
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Next" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARY_BACKGROUND_COLOR,
  },
  text: {
    fontSize: 20,
    color: PRIMARY_TEXT_COLOR,
    marginTop: 15,
    textAlign: 'center',
  },
  mainContainer: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SetUserAvatar;
