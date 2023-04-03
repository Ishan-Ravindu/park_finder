import {StyleProp, StyleSheet, TextInput, TextStyle} from 'react-native';

interface props {
  style?: StyleProp<TextStyle>;
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
}

function MainTextInput({
  style,
  placeholder,
  value,
  onChangeText,
}: props): JSX.Element {
  return (
    <TextInput
      style={[styles.input, style]}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    width: '100%',
    borderBottomWidth: 1,
    borderColor: '#979797',
    color: '#979797',
    fontSize: 24,
  },
});

export default MainTextInput;
