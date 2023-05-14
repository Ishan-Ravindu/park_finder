import {StyleSheet, Text} from 'react-native';

interface props {
  message?: string;
}

const ErrorMessage = ({message}: props) => {
  return <Text style={styles.text}>{message}</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: 'red',
    fontSize: 12,
    fontWeight: '500',
    marginTop: 5,
  },
});

export default ErrorMessage;
