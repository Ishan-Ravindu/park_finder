import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Welcome: undefined;
  GetUserDetails: undefined;
  RegisterMobileNumber: undefined;
  ValidateOTP: undefined;
  SetUserAvatar: undefined;
};

export type WelcomeStackProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Welcome'>;
};

export type ValidateOTPStackProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'ValidateOTP'>;
};

export type RegisterMobileNumberStackProps = {
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    'RegisterMobileNumber'
  >;
};


export type GetUserDetailsStackProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'GetUserDetails'>;
};
