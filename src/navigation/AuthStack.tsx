import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcome from '../screen/authStack/Welcome';
import GetUserDetails from '../screen/authStack/GetUserDetails';
import RegisterMobileNumber from '../screen/authStack/RegisterMobileNumber';
import ValidateOTP from '../screen/authStack/ValidateOTP';
import SetUserAvatar from '../screen/authStack/SetUserAvatar';
import {
  PLACEHOLDER_TEXT_COLOR,
  PRIMARY_BACKGROUND_COLOR,
} from '../styles/colors';
import {RootStackParamList} from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

interface props {
  initialRouteName: keyof RootStackParamList;
}

const AuthStack = ({initialRouteName}: props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={initialRouteName}
        screenOptions={{
          headerStyle: {
            backgroundColor: PRIMARY_BACKGROUND_COLOR,
          },
          headerTintColor: PLACEHOLDER_TEXT_COLOR,
          headerShadowVisible: false,
          animation: 'slide_from_right',
          headerTitle: '',
        }}>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="GetUserDetails" component={GetUserDetails} />
        <Stack.Screen
          name="RegisterMobileNumber"
          component={RegisterMobileNumber}
        />
        <Stack.Screen name="ValidateOTP" component={ValidateOTP} />
        <Stack.Screen name="SetUserAvatar" component={SetUserAvatar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthStack;
