import {View, Text, StyleSheet} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faShield} from '@fortawesome/free-solid-svg-icons/faShield';

function Badge(): JSX.Element {
  return (
    <View style={style.container}>
      <Text style={style.text}>Park with safety</Text>
      <FontAwesomeIcon icon={faShield} style={{color: '#ffffff'}} size={25} />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    width: 250,
    height: 55,
    borderColor: '#ffffff',
    borderWidth: 1.5,
    borderRadius: 16,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
  },
});
export default Badge;
