import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Welcome: undefined;
  GetUserDetails: undefined;
  RegisterMobileNumber: undefined;
  ValidateOTP: {
    mobileNumber: string;
  };
  SetUserAvatar: undefined;
};

export type WelcomeStackProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Welcome'>;
};

export type ValidateOTPStackProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'ValidateOTP'>;
  route: RouteProp<RootStackParamList, 'ValidateOTP'>;
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

export type SetUserAvatarStackProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'SetUserAvatar'>;
};

export type HomeDrawerParamList = {
  HomeStack: undefined;
  Booking: undefined;
  Payment: undefined;
  Setting: undefined;
  Message: undefined;
  SignOut: undefined;
};

export type HomeStackParamList = {
  Home: undefined;
  ParkMapView:undefined;
}

export type HomeStackProps = {
  navigation: NativeStackNavigationProp<HomeStackParamList, 'Home'>;
};