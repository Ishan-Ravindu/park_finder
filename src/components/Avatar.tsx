import {ActivityIndicator, Image, Pressable, StyleSheet} from 'react-native';
import {SECONDARY_BACKGROUND_COLOR} from '../styles/colors';

interface props {
  handleAvatarPress: () => void;
  avatarUrl: string;
  loading: boolean;
}

const Avatar = ({handleAvatarPress, avatarUrl, loading = false}: props) => {
  return (
    <Pressable onPress={handleAvatarPress} style={styles.container}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Image
          style={styles.image}
          source={{
            uri: avatarUrl,
          }}
        />
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: SECONDARY_BACKGROUND_COLOR,
  },
  image: {
    width: 140,
    height: 140,
    borderRadius: 70,
  },
});

export default Avatar;
