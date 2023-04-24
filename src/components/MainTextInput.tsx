import {StyleProp, StyleSheet, TextInput, TextInputProps, TextStyle} from 'react-native';

interface props extends TextInputProps {
  style?: StyleProp<TextStyle>;
}
const MainTextInput: React.FC<props> =({style,...other}): JSX.Element => {
  return(
  <TextInput
  style={[styles.input, style]}
  {...other}
/>
  )
}

const styles = StyleSheet.create({
  input: {
    width: '100%',
    borderBottomWidth: 1,
    borderColor: '#979797',
    fontSize: 24,
  },
});

export default MainTextInput;
