import React from 'react';
import {StatusBar} from 'react-native';
import Welcome from './src/screen/Welcome';

function App(): JSX.Element {
  return (
    <>
      <StatusBar backgroundColor="#000000" />
      <Welcome />
    </>
  );
}

export default App;
