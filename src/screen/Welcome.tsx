import {Image, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Badge from '../components/Badge';
import Button from '../components/Button';
import {PRIMARY_ICON_COLOR, SECONDARY_GRADIENT_COLOR} from '../styles/colors';
import {faArrowRightLong} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {BOTTOM_BUTTON_BOTTOM} from '../styles/positions';
import {RootStackParamList} from '../../App';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type WelcomeProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Welcome'>;
};

const Welcome: React.FC<WelcomeProps> = ({navigation}: WelcomeProps) => {
  return (
    <LinearGradient
      colors={[
        SECONDARY_GRADIENT_COLOR.COLOR_1,
        SECONDARY_GRADIENT_COLOR.COLOR_2,
        SECONDARY_GRADIENT_COLOR.COLOR_3,
      ]}
      style={style.container}>
      <Image
        source={require('../assets/logo.png')}
        style={{width: 180, height: 180}}
      />
      <View style={style.badgeContainer}>
        <Badge />
      </View>
      <View style={style.buttonContainer}>
        <Button
          onPress={() => {
            navigation.push('RegisterMobileNumber');
          }}
          title="Get Started"
          icon={
            <FontAwesomeIcon
              icon={faArrowRightLong}
              size={25}
              style={{color: PRIMARY_ICON_COLOR}}
            />
          }
          gradientColors={[
            SECONDARY_GRADIENT_COLOR.COLOR_1,
            SECONDARY_GRADIENT_COLOR.COLOR_2,
            SECONDARY_GRADIENT_COLOR.COLOR_3,
          ]}
        />
      </View>
    </LinearGradient>
  );
};

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
    bottom: BOTTOM_BUTTON_BOTTOM,
  },
});

export default Welcome;
