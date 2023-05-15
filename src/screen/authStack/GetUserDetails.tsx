import {StyleSheet, Text, View} from 'react-native';
import MainTextInput from '../../components/MainTextInput';
import {
  PLACEHOLDER_TEXT_COLOR,
  PRIMARY_BACKGROUND_COLOR,
  PRIMARY_TEXT_COLOR,
} from '../../styles/colors';
import Button from '../../components/Button';
import {GetUserDetailsStackProps} from '../../navigation/types';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {Controller, useForm} from 'react-hook-form';
import ErrorMessage from '../../components/ErrorMessage';
import {firebase} from '@react-native-firebase/auth';
import {useState} from 'react';

const schema = yup.object({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
});

type FormData = yup.InferType<typeof schema>;

const GetUserDetails: React.FC<GetUserDetailsStackProps> = ({
  navigation,
}: GetUserDetailsStackProps) => {
  const [isLording, setIsLording] = useState(false);
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      firstName: '',
      lastName: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsLording(true);
    const update = {
      displayName: `${data.firstName} ${data.lastName}`,
    };
    try {
      await firebase.auth().currentUser?.updateProfile(update);
      navigation.navigate('SetUserAvatar');
      setIsLording(false);
    } catch (error) {
      console.log(error);
      setIsLording(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <Text style={styles.title}>What’s your name?</Text>
        <View style={styles.inputContainer}>
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <MainTextInput
                placeholder="First"
                placeholderTextColor={PLACEHOLDER_TEXT_COLOR}
                style={styles.input}
                value={value}
                onBlur={onBlur}
                onChangeText={onChange}
              />
            )}
            name="firstName"
          />
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <MainTextInput
                placeholder="Last"
                placeholderTextColor={PLACEHOLDER_TEXT_COLOR}
                style={styles.input}
                value={value}
                onBlur={onBlur}
                onChangeText={onChange}
              />
            )}
            name="lastName"
          />
        </View>
        <ErrorMessage
          message={errors.firstName?.message || errors.lastName?.message}
        />
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
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    width: '45%',
    color: PRIMARY_TEXT_COLOR,
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

export default GetUserDetails;
