import React from 'react';
import {StatusBar} from 'react-native';
import ValidateOTP from './src/screen/ValidateOTP';
import RegisterMobileNumber from './src/screen/RegisterMobileNumber';
import Welcome from './src/screen/Welcome';
import GetUserDetails from './src/screen/GetUserDetails';
import SetUserAvatar from './src/screen/SetUserAvatar';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  PLACEHOLDER_TEXT_COLOR,
  PRIMARY_BACKGROUND_COLOR,
} from './src/styles/colors';
import {RootStackParamList} from './src/navigation/types';

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): JSX.Element {
  return (
    <>
      <StatusBar backgroundColor="#000000" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Welcome"
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
    </>
  );
}

export default App;
