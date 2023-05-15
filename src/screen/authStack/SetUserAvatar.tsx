import {StyleSheet, Text, View} from 'react-native';
import Avatar from '../../components/Avatar';
import {
  PRIMARY_BACKGROUND_COLOR,
  PRIMARY_TEXT_COLOR,
} from '../../styles/colors';
import Button from '../../components/Button';
import {
  launchImageLibrary,
  ImagePickerResponse,
} from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
import {firebase} from '@react-native-firebase/auth';
import React, {useState} from 'react';
import {SetUserAvatarStackProps} from '../../navigation/types';

const SetUserAvatar: React.FC<SetUserAvatarStackProps> = ({navigation}) => {
  const [pickedImage, setPickedImage] = useState<ImagePickerResponse | null>(
    null,
  );
  const [isLording, setIsLording] = useState(false);

  const handleAvatarPress = async () => {
    const result = await launchImageLibrary({
      mediaType: 'photo',
      selectionLimit: 1,
    });
    setPickedImage(result);
  };

  const handlePress = () => {
    setIsLording(true);
    if (pickedImage && pickedImage.assets) {
      const userId = firebase.auth().currentUser?.uid;
      const reference = storage().ref(`${userId}/avatar.jpg`);
      const pathToFile = pickedImage.assets[0].uri;

      if (pathToFile) {
        const task = reference.putFile(pathToFile);

        task.on('state_changed', taskSnapshot => {
          console.log(
            `${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`,
          );
        });

        task.then(async () => {
          console.log('Image uploaded to the bucket!');
          const url = await reference.getDownloadURL();
          try {
            await firebase.auth().currentUser?.updateProfile({photoURL: url});
            navigation.push('Home');
            setIsLording(false);
          } catch (error) {
            console.log(error);
            setIsLording(false);
          }
        });
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <Avatar handleAvatarPress={handleAvatarPress} />
        <Text style={styles.text}>
          By tapping the button below, you agree to ParkFinder’s Terms of Use
          and acknowledge that you have read the Privacy Policy
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button disabled={isLording} title="Next" onPress={handlePress} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARY_BACKGROUND_COLOR,
  },
  text: {
    fontSize: 20,
    color: PRIMARY_TEXT_COLOR,
    marginTop: 15,
    textAlign: 'center',
  },
  mainContainer: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SetUserAvatar;
