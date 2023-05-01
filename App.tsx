import React from 'react';
import { StatusBar} from 'react-native';
import ValidateOTP from './src/screen/ValidateOTP';
import RegisterMobileNumber from './src/screen/RegisterMobileNumber';
import Welcome from './src/screen/Welcome';
import GetUserDetails from './src/screen/GetUserDetails';
import SetUserAvatar from './src/screen/SetUserAvatar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <>
      <StatusBar backgroundColor="#000000" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName='welcome'>
          <Stack.Screen name='welcome' component={Welcome}/>
          <Stack.Screen name='get_user_details' component={GetUserDetails}/>
          <Stack.Screen name='Register_mobile_number' component={RegisterMobileNumber}/>
          <Stack.Screen name='validate_otp' component={ValidateOTP}/>
          <Stack.Screen name="set_user_avatar" component={SetUserAvatar} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
