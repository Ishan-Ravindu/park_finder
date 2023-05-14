import {StatusBar} from 'react-native';
import AuthStack from './src/navigation/AuthStack';
import {useEffect, useState} from 'react';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import Home from './src/screen/Home';

function App(): JSX.Element | null {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  function onAuthStateChanged(user: FirebaseAuthTypes.User | null) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) return null;

  if (!user) {
    return (
      <>
        <StatusBar backgroundColor="#000000" />
        <AuthStack />
      </>
    );
  }

  return (
    <>
      <StatusBar backgroundColor="#000000" />
      <Home />
    </>
  );
}

export default App;
