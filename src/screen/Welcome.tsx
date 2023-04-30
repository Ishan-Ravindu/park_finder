import {Image, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Badge from '../components/Badge';
import CustomButton from '../components/Button';
import { PRIMARY_GRADIENT_COLOR } from '../utils/colors';

function Welcome(): JSX.Element {
  return (
    <LinearGradient
      colors={[PRIMARY_GRADIENT_COLOR.COLOR_1, PRIMARY_GRADIENT_COLOR.COLOR_2, PRIMARY_GRADIENT_COLOR.COLOR_3]}
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
