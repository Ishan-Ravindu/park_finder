import {StyleSheet, Pressable, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowRightLong} from '@fortawesome/free-solid-svg-icons/faArrowRightLong';
import { PRIMARY_GRADIENT_COLOR, PRIMARY_ICON_COLOR, PRIMARY_TEXT_COLOR } from '../utils/colors';

function Button(): JSX.Element {
  return (
    <Pressable>
      <LinearGradient
        style={style.button}
        colors={[PRIMARY_GRADIENT_COLOR.COLOR_1, PRIMARY_GRADIENT_COLOR.COLOR_2, PRIMARY_GRADIENT_COLOR.COLOR_3]}>
        <Text style={style.text}>Get Started</Text>
        <FontAwesomeIcon
          icon={faArrowRightLong}
          size={25}
          style={{color: PRIMARY_ICON_COLOR}}
        />
      </LinearGradient>
    </Pressable>
  );
}

const style = StyleSheet.create({
  button: {
    flexDirection: 'row',
    width: 340,
    height: 60,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text: {
    fontSize: 20,
    fontWeight: '700',
    color: PRIMARY_TEXT_COLOR,
    marginRight: 20,
  },
});

export default Button;
