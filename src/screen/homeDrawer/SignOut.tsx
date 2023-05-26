import {useEffect} from 'react';
import {Text, View} from 'react-native';
import auth from '@react-native-firebase/auth';

const SignOut = () => {
  useEffect(() => {
    signOut();
  }, []);

  const signOut = async () => {
    try {
      await auth().signOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <Text>Sign Out</Text>
    </View>
  );
};

export default SignOut;
