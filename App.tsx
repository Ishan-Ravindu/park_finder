import React from 'react';
import {StatusBar} from 'react-native';
import RegisterMobileNumber from './src/screen/RegisterMobileNumber';
import Welcome from './src/screen/Welcome';

function App(): JSX.Element {
  return (
    <>
      <StatusBar backgroundColor="#000000" />
      {/* <Welcome /> */}
      <RegisterMobileNumber />
    </>
  );
}

export default App;
