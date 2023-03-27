import {Image, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Badge from '../components/Badge';
import CustomButton from '../components/Button';

function Welcome(): JSX.Element {
  return (
    <LinearGradient
      colors={['#1976D2', '#3867EA', '#535AFF']}
      style={style.container}>
      <Image
        source={require('../assets/logo.png')}
        style={{width: 180, height: 180}}
      />
      <View style={style.badgeContainer}>
        <Badge />
      </View>
      <View style={style.buttonContainer}>
        <CustomButton />
      </View>
    </LinearGradient>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  badgeContainer: {
    marginTop: 20,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 62,
  },
});

export default Welcome;
