import {StatusBar} from 'react-native';
import AuthStack from './src/navigation/AuthStack';
import {useEffect, useState} from 'react';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import Home from './src/screen/Home';
import {RootStackParamList} from './src/navigation/types';

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

  if (!user || !user.displayName || !user.photoURL) {
    let initialRouteName: keyof RootStackParamList = 'Welcome';
    if (user && !user?.displayName) {
      initialRouteName = 'GetUserDetails';
    }
    if (user && user?.displayName && !user?.photoURL) {
      initialRouteName = 'SetUserAvatar';
    }
    return (
      <>
        <StatusBar backgroundColor="#000000" />
        <AuthStack initialRouteName={initialRouteName} />
      </>
    );
  }

  return <Home />;
}

export default App;
