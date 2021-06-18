import React, {Component} from 'react';
import {Text, View, StyleSheet, ScrollView, Image} from 'react-native';

export class Stories extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView horizontal={true} 
        showsHorizontalScrollIndicator={false}>
          <View style={styles.myStoryImageWrapper}>
            <Image
              style={styles.myStoryRound}
              source={require('../assets/images/storiescircle.png')}
            />
            <Image
              style={styles.myStoryImage}
              source={require('../assets/images/face.jpeg')}
            />
            <Text style={styles.profileName}>Catherin</Text>
          </View>
          <View style={styles.otherStoryImageWrapper}>
            <Image
              style={styles.otherStories}
              source={require('../assets/images/face.jpeg')}
            />
            <Image
              style={styles.storyRound}
              source={require('../assets/images/storieslivecircle.png')}
            />
            <Text style={styles.profileName}>Margeret</Text>
          </View>
          <View style={styles.otherStoryImageWrapper}>
            <Image
              style={styles.storyRound}
              source={require('../assets/images/storiescircle.png')}
            />
            <Image
              style={styles.otherStories}
              source={require('../assets/images/face.jpeg')}
            />
            <Text style={styles.profileName}>Seona</Text>
          </View>
          <View style={styles.otherStoryImageWrapper}>
            <Image
              style={styles.storyRound}
              source={require('../assets/images/storiescircle.png')}
            />
            <Image
              style={styles.otherStories}
              source={require('../assets/images/face.jpeg')}
            />
            <Text style={styles.profileName}>Sonia</Text>
          </View>
          <View style={styles.otherStoryImageWrapper}>
            <Image
              style={styles.storyRound}
              source={require('../assets/images/storiescircle.png')}
            />
            <Image
              style={styles.otherStories}
              source={require('../assets/images/face.jpeg')}
            />
            <Text style={styles.profileName}>Sonia</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Stories;

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    marginLeft: 5,
  },
  storiesHeaderWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
  },
  storiesHeaderText: {
    fontSize: 17,
    fontWeight: '700',
  },
  myStoryRound:{
    width: 85,
    height: 85,
    marginTop: 5,
  },
  myStoryImage: {
    position: 'absolute',
    marginLeft: 10,
    marginTop: 14,
    width: 65,
    height: 65,
    borderRadius: 50,
  },
  myStoryImageWrapper: {
  },
  otherStories: {
    position: 'absolute',
    marginLeft: 10,
    marginTop: 14,
    width: 65,
    height: 65,
    borderRadius: 50,
  },
  storyRound: {
    width: 85,
    height: 85,
    marginTop: 5,
  },
  otherStoryImageWrapper: {
  },
  profileName: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: -5,
  },
});
