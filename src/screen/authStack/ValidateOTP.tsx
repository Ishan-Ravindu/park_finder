import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MainTextInput from '../../components/MainTextInput';
import {
  HINT_TEXT_COLOR,
  PLACEHOLDER_TEXT_COLOR,
  PRIMARY_BACKGROUND_COLOR,
  PRIMARY_TEXT_COLOR,
} from '../../styles/colors';
import Button from '../../components/Button';
import {ValidateOTPStackProps} from '../../navigation/types';

const ValidateOTP: React.FC<ValidateOTPStackProps> = ({
  navigation,
}: ValidateOTPStackProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.maincontainer}>
        <Text style={styles.title}>
          Enter the 4-digit code sent to you at{'  '}
          <Text style={styles.mobileNumber}>+94 758964855</Text>
        </Text>
        <View style={styles.inputContainer}>
          <MainTextInput
            placeholder="0"
            placeholderTextColor={PLACEHOLDER_TEXT_COLOR}
            style={styles.input}
          />
          <MainTextInput
            placeholder="0"
            placeholderTextColor={PLACEHOLDER_TEXT_COLOR}
            style={styles.input}
          />
          <MainTextInput
            placeholder="0"
            placeholderTextColor={PLACEHOLDER_TEXT_COLOR}
            style={styles.input}
          />
          <MainTextInput
            placeholder="0"
            placeholderTextColor={PLACEHOLDER_TEXT_COLOR}
            style={styles.input}
          />
        </View>
        <Text style={styles.resend}>Resend Code</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          onPress={() => {
            navigation.push('GetUserDetails');
          }}
          title="Next"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARY_BACKGROUND_COLOR,
  },
  title: {
    fontSize: 24,
    color: PRIMARY_TEXT_COLOR,
    marginBottom: 15,
  },
  mobileNumber: {
    fontSize: 20,
    color: PRIMARY_TEXT_COLOR,
  },
  inputContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  input: {
    width: '15%',
    textAlign: 'center',
    color: PRIMARY_TEXT_COLOR,
  },
  resend: {
    color: HINT_TEXT_COLOR,
    marginTop: 20,
    fontSize: 18,
  },
  maincontainer: {
    flex: 4,
    paddingHorizontal: 20,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ValidateOTP;
