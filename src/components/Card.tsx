import {View, Text, Image, StyleSheet,Pressable} from 'react-native';
import {
  BLACK_COLOR,
  SECONDARY_BACKGROUND_COLOR,
  WHITE_COLOR,
} from '../styles/colors';
import React from 'react';

interface Props extends React.ComponentProps<typeof Pressable> {}

const Card:React.FC<Props> = ({...other}) => {
  return (
    <Pressable {...other} style={styles.container}>
      <View style={styles.leftContainer}>
        <Image
          source={{
            uri: 'https://picsum.photos/200/300',
          }}
          style={styles.image}
        />
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.titleText}>ABC parking center</Text>
        {/* <Text></Text> for ratting  */}
        <View style={styles.detailsContainer}>
          <View style={styles.detailsSection}>
            <Text style={styles.detailsTitle}>Distance</Text>
            <Text>20km</Text>
          </View>
          <View style={styles.detailsSection}>
            <Text style={styles.detailsTitle}>Time</Text>
            <Text>50</Text>
          </View>
          <View style={styles.detailsSection}>
            <Text style={styles.detailsTitle}>Cost</Text>
            <Text>1</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
    backgroundColor: WHITE_COLOR,
    borderRadius: 10,
    flexDirection: 'row',
    flex: 1,
    marginBottom: 10,
    marginTop: 10,
  },
  leftContainer: {
    flex: 1,
    marginRight: 15,
  },
  rightContainer: {
    flex: 2,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  detailsContainer: {
    flexDirection: 'row',
    backgroundColor: SECONDARY_BACKGROUND_COLOR,
    padding: 5,
    borderRadius: 10,
    marginTop: 10,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: BLACK_COLOR,
  },
  detailsSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsTitle: {
    fontSize: 15,
    color: BLACK_COLOR,
    fontWeight: 'bold',
  }
});

export default Card;
