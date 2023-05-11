import {StatusBar} from 'react-native';
import AuthStack from './src/navigation/AuthStack';

function App(): JSX.Element {
  return (
    <>
      <StatusBar backgroundColor="#000000" />
      <AuthStack />
    </>
  );
}

export default App;
