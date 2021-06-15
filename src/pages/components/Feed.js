import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { colors } from '../config/Colors';
const Feed = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <View style={styles.headerLeftWrapper}>
          <Image
            style={styles.profileCircle}
            source={require('../assets/images/storiescircle.png')}
          />
          <Image
            style={styles.profileThumb}
            source={require('../assets/images/face.jpeg')}
          />
          <Text style={styles.headerTitle}> Catherine</Text>
        </View>
        <Image
          style={styles.icon}
          source={require('../assets/images/dots.jpg')}
        />
      </View>
      <View>
        <Image
          style={styles.feedImage}
          source={require('../assets/images/feedImage.jpg')}
        />
      </View>
      <View style={styles.feedImageFooter}>
        <View style={styles.feddimageFooterLeftWrapper}>
          <Image
            style={styles.icon}
            source={require('../assets/images/heartfeed.jpg')}
          />
          <Image
            style={styles.icon}
            source={require('../assets/images/comment.png')}
          />
          <Image
            style={styles.icon}
            source={require('../assets/images/messagefeed.png')}
          />
        </View>
        <Image
          style={styles.icon}
          source={require('../assets/images/bookmarkfeed.png')}
        />
      </View>
      <View style={styles.underLineWRapper}>
        <View style={styles.underLine} />
      </View>
      <View style={styles.likesAndCommentsWrapper}>
        <Text style={styles.likesTitle}> 1,124 Likes</Text>
        <View style={styles.feedtitle}>
          <Text style={styles.headerTitle}> Catherine</Text>
          <Text style={styles.likesTitle}> Missing Summary </Text>
        </View>

      </View>
    </View>
  );
};

export default Feed;

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
  profileCircle: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  profileThumb: {
    position: 'absolute',
    marginLeft: 5,
    width: 30,
    height: 30,
    borderRadius: 50,
  },
  headerWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 3,
    borderTopColor: colors.gray1,
    borderTopWidth: 1,
    marginTop: 5,
  },
  icon: {
    width: 40,
    height: 40,
    opacity: 0.5,
  },
  headerLeftWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 5,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
  },
  feedImage: {
    width: '100%',
  },
  feedImageFooter: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  feddimageFooterLeftWrapper: {
    flexDirection: 'row',
  },
  underLine: {
    height: 1,
    backgroundColor: colors.gray1,
  },
  underLineWRapper: {
    marginLeft: 10,
    marginRight: 10,
  },
  likesImage: {
    width: 25,
    height: 25,
  },
  likesAndCommentsWrapper: {
    flexDirection: 'column',
    paddingVertical: 5,
    paddingHorizontal: 5,

  },
  likesTitle: {
    fontSize: 17,
    fontWeight: '600',
  },
  feedtitle: {
    flexDirection: 'row',
  }
});
