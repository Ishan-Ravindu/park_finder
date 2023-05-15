import {View, Text, StyleSheet} from 'react-native';
import {
  PLACEHOLDER_TEXT_COLOR,
  PRIMARY_BACKGROUND_COLOR,
  PRIMARY_TEXT_COLOR,
} from '../../styles/colors';
import Button from '../../components/Button';
import {RegisterMobileNumberStackProps} from '../../navigation/types';
import {useState} from 'react';
import countries from '../../components/CountryCodeSelection/countries';
import CountryCodeSelection from '../../components/CountryCodeSelection';
import MainTextInput from '../../components/MainTextInput';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import ErrorMessage from '../../components/ErrorMessage';
import auth from '@react-native-firebase/auth';
import useStore from '../../zustand/store';

const schema = yup.object({
  mobileNumber: yup
    .string()
    .matches(/^[0-9]{9}$/, 'Invalid mobile number')
    .required('Mobile number is required'),
});

type FormData = yup.InferType<typeof schema>;

const RegisterMobileNumber: React.FC<RegisterMobileNumberStackProps> = ({
  navigation,
}: RegisterMobileNumberStackProps) => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [isLording, setIsLording] = useState(false);
  const setConformationResult = useStore(state => state.setConformationResult);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      mobileNumber: '',
    },
  });
  const onSubmit = async (data: FormData) => {
    setIsLording(true);
    const fullMobileNumber = `${selectedCountry.mobile_code}${data.mobileNumber}`;
    try {
      const confirmation = await auth().signInWithPhoneNumber(fullMobileNumber);
      setConformationResult(confirmation);
      navigation.push('ValidateOTP', {
        mobileNumber: fullMobileNumber,
      });
      setIsLording(false);
    } catch (error) {
      console.log(error);
      setIsLording(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.mobileNumberContainer}>
        <Text style={styles.title}>Enter your mobile number</Text>
        <View style={styles.countryCodeContainer}>
          <CountryCodeSelection
            selectedCountry={selectedCountry}
            setSelectedCountry={setSelectedCountry}
          />
          <View>
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <MainTextInput
                  style={styles.mobileNumber}
                  placeholderTextColor={PLACEHOLDER_TEXT_COLOR}
                  placeholder="Mobile Number"
                  keyboardType="number-pad"
                  autoComplete="tel"
                  autoFocus
                  maxLength={9}
                  value={value}
                  onBlur={onBlur}
                  onChangeText={onChange}
                />
              )}
              name="mobileNumber"
            />
            <ErrorMessage message={errors.mobileNumber?.message} />
          </View>
        </View>
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
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
    color: PRIMARY_TEXT_COLOR,
    marginBottom: 15,
  },
  mobileNumberContainer: {
    flex: 4,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  countryCodeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  mobileNumber: {
    width: 200,
    color: PRIMARY_TEXT_COLOR,
  },
});

export default RegisterMobileNumber;
