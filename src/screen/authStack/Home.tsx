import {View, Text} from 'react-native';
import Button from '../../components/Button';
import auth from '@react-native-firebase/auth';

const Home = () => {
  const signOut = async () => {
    try {
      await auth().signOut();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button onPress={signOut} title="logout" />
    </View>
  );
};

export default Home;
