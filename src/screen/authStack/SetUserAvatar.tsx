import {StyleSheet, Text, View} from 'react-native';
import Avatar from '../../components/Avatar';
import {
  PRIMARY_BACKGROUND_COLOR,
  PRIMARY_TEXT_COLOR,
} from '../../styles/colors';
import Button from '../../components/Button';
import {launchImageLibrary} from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
import {firebase} from '@react-native-firebase/auth';
import React, {useState} from 'react';
import {SetUserAvatarStackProps} from '../../navigation/types';
import auth from '@react-native-firebase/auth';
import useStore from '../../zustand/store';
import {ALERT_TYPE, Dialog} from 'react-native-alert-notification';

const SetUserAvatar: React.FC<SetUserAvatarStackProps> = () => {
  const [imageUri, setImageUri] = useState<string>('');
  const [isLording, setIsLording] = useState(false);
  const setUser = useStore(state => state.setUser);

  const handleAvatarPress = async () => {
    setIsLording(true);

    const result = await launchImageLibrary({
      mediaType: 'photo',
      selectionLimit: 1,
    });
    if (result.didCancel) {
      setImageUri(
        'https://firebasestorage.googleapis.com/v0/b/parkfinder-b40d1.appspot.com/o/noImageAvatar.png?alt=media&token=fae7d2d9-b16c-476c-a1f6-f7f1db7ef6e8',
      );
      setIsLording(false);
    }
    if (result && result.assets) {
      console.log('pass');
      const userId = firebase.auth().currentUser?.uid;
      const reference = storage().ref(`${userId}/avatar.jpg`);
      const pathToFile = result.assets[0].uri;
      if (pathToFile) {
        const task = reference.putFile(pathToFile);
        task.on('state_changed', taskSnapshot => {
          console.log(
            `${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`,
          );
        });

        task.then(async () => {
          const url = await reference.getDownloadURL();
          setImageUri(url);
          console.log(imageUri);
          setIsLording(false);
        });
      }
    }
  };

  const handlePress = async () => {
    setIsLording(true);
    try {
      await firebase.auth().currentUser?.updateProfile({photoURL: imageUri});
      auth().onAuthStateChanged(user => {
        if (user) {
          setUser(user);
        }
      });
      setIsLording(false);
    } catch (error: any) {
      Dialog.show({
        closeOnOverlayTap: false,
        type: ALERT_TYPE.DANGER,
        title: error.code ? error.code : 'Error',
        button: 'close',
        textBody: error.message
          ? error.message.replace(/\[[^\]]+\]/g, '')
          : 'Something went wrong',
      });
      setIsLording(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <Avatar
          loading={isLording}
          avatarUrl={
            imageUri
              ? imageUri
              : 'https://firebasestorage.googleapis.com/v0/b/parkfinder-b40d1.appspot.com/o/noImageAvatar.png?alt=media&token=fae7d2d9-b16c-476c-a1f6-f7f1db7ef6e8'
          }
          handleAvatarPress={handleAvatarPress}
        />
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
