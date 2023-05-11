import {Image, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Badge from '../components/Badge';
import Button from '../components/Button';
import {PRIMARY_ICON_COLOR, SECONDARY_GRADIENT_COLOR} from '../styles/colors';
import {faArrowRightLong} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {WelcomeStackProps} from '../navigation/types';

const Welcome: React.FC<WelcomeStackProps> = ({
  navigation,
}: WelcomeStackProps) => {
  return (
    <LinearGradient
      colors={[
        SECONDARY_GRADIENT_COLOR.COLOR_1,
        SECONDARY_GRADIENT_COLOR.COLOR_2,
        SECONDARY_GRADIENT_COLOR.COLOR_3,
      ]}
      style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/logo.png')}
          style={{width: 180, height: 180}}
        />
        <View style={styles.badgeContainer}>
          <Badge />
        </View>
      </View>
      <View style={styles.buttonContainer}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeContainer: {
    marginTop: 30,
  },
});

export default Welcome;
