import React from 'react';
import {StatusBar} from 'react-native';
import ValidateOTP from './src/screen/ValidataOTP';
import RegisterMobileNumber from './src/screen/RegisterMobileNumber';
import Welcome from './src/screen/Welcome';
import GetUserDetails from './src/screen/GetUserDetails';

function App(): JSX.Element {
  return (
    <>
      <StatusBar backgroundColor="#000000" />
      {/* <Welcome /> */}
      {/* <RegisterMobileNumber /> */}
      {/* <ValidateOTP mobileNumber='+94 75549689'/> */}
      <GetUserDetails/>
    </>
  );
}

export default App;
