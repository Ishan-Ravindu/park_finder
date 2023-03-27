import {StyleSheet, Pressable, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowRightLong} from '@fortawesome/free-solid-svg-icons/faArrowRightLong';

function Button(): JSX.Element {
  return (
    <Pressable>
      <LinearGradient
        style={style.button}
        colors={['#1976D2', '#3867EA', '#535AFF']}>
        <Text style={style.text}>Get Started</Text>
        <FontAwesomeIcon
          icon={faArrowRightLong}
          size={25}
          style={{color: '#ffffff'}}
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
    color: '#fff',
    marginRight: 20,
  },
});

export default Button;
