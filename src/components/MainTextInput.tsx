import {StyleProp, StyleSheet, TextInput, TextInputProps, TextStyle} from 'react-native';
import { PRIMARY_BORDER_COLOR } from '../styles/colors';

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
    borderColor: PRIMARY_BORDER_COLOR,
    fontSize: 24,
  },
});

export default MainTextInput;
