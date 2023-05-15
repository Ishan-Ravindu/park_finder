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
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {Controller, useForm} from 'react-hook-form';
import ErrorMessage from '../../components/ErrorMessage';
import useStore from '../../zustand/store';
import {ALERT_TYPE, Dialog} from 'react-native-alert-notification';

const schema = yup.object({
  otp: yup
    .string()
    .matches(/^[0-9]{6}$/, 'Enter six digit')
    .required('OTP is required'),
});

type FormData = yup.InferType<typeof schema>;

const ValidateOTP: React.FC<ValidateOTPStackProps> = ({
  route,
  navigation,
}: ValidateOTPStackProps) => {
  const [isLording, setIsLording] = React.useState(false);
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      otp: '',
    },
  });

  const conformationResult = useStore(state => state.conformationResult);
  const mobileNumber = route.params.mobileNumber;

  const onSubmit = async (data: FormData) => {
    setIsLording(true);
    if (conformationResult) {
      try {
        await conformationResult.confirm(data.otp);

        navigation.push('GetUserDetails');
        setIsLording(false);
      } catch (error: any) {
        Dialog.show({
          type: ALERT_TYPE.DANGER,
          title: error.code ? error.code : 'Error',
          button: 'close',
          textBody: error.message
            ? error.message.replace(/\[[^\]]+\]/g, '')
            : 'Something went wrong',
        });

        setIsLording(false);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <Text style={styles.title}>
          Enter the 6-digit code sent to you at{'  '}
          <Text style={styles.mobileNumber}>{mobileNumber}</Text>
        </Text>
        <View style={styles.inputContainer}>
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <MainTextInput
                placeholder="000000"
                keyboardType="number-pad"
                placeholderTextColor={PLACEHOLDER_TEXT_COLOR}
                style={styles.input}
                autoComplete="sms-otp"
                autoFocus
                maxLength={6}
                value={value}
                onBlur={onBlur}
                onChangeText={onChange}
              />
            )}
            name="otp"
          />
        </View>
        {errors.otp?.message && <ErrorMessage message={errors.otp?.message} />}
        <Text style={styles.resend}>Resend Code</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          disabled={isLording}
          onPress={handleSubmit(onSubmit)}
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
    width: '30%',
    textAlign: 'center',
    color: PRIMARY_TEXT_COLOR,
  },
  resend: {
    color: HINT_TEXT_COLOR,
    marginTop: 20,
    fontSize: 18,
  },
  mainContainer: {
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
