import 'react-native-gesture-handler';
import {StatusBar} from 'react-native';
import AuthStack from './src/navigation/AuthStack';
import {useEffect, useState} from 'react';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {RootStackParamList} from './src/navigation/types';
import useStore from './src/zustand/store';
import {AlertNotificationRoot} from 'react-native-alert-notification';
import HomeDrawer from './src/navigation/HomeDrawer';

function App(): JSX.Element | null {
  const [initializing, setInitializing] = useState(true);
  const {setUser, user} = useStore(state => state);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(userData => {
      setUser(userData as FirebaseAuthTypes.User);
      if (initializing) setInitializing(false);
    });
    return subscriber;
  }, []);

  if (initializing) return null;

  if (user && user.displayName && user.photoURL) {
    return (
      <>
        <StatusBar backgroundColor="#000000" />
        <HomeDrawer />
      </>
    );
  }

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
        <AlertNotificationRoot theme="light">
          <AuthStack initialRouteName={initialRouteName} />
        </AlertNotificationRoot>
      </>
    );
  }

  return (
    <>
      <StatusBar backgroundColor="#000000" />
      <HomeDrawer />
    </>
  );
}

export default App;
