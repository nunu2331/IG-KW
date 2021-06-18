import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, Image, TouchableWithoutFeedback } from 'react-native';
import { colors } from '../../config/Colors';
import Feed from '../../components/Feed';
import Stories from '../../components/Stories';
import Icon from 'react-native-vector-icons/FontAwesome';
export class Dashboard extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            style={styles.logoIG}
            source={require('../../assets/images/instagramLogo.png')}
          />
          <View style={styles.headerRightWrapper}>
            <Image
              style={styles.iconHeader}
              source={require('../../assets/images/likeheader.png')}
            />
            <Image
              style={styles.iconHeader}
              source={require('../../assets/images/dm.png')}
            />
          </View>
        </View>
        {/* <View style={styles.storiesWrapper}>
          <Stories />
        </View> */}

        <ScrollView style={styles.feedContainer}
          showsVerticalScrollIndicator={false}>
          <Stories />
          <Feed />
        </ScrollView>
        {/* <View style={styles.footer}>
          <Image
            style={[styles.iconfooter, { borderRadius: 50 }]}
            source={require('../assets/images/homeclick.png')}
          />
          <Image
            style={styles.iconfooter}
            source={require('../assets/images/search.png')}
          />
          <Image
            style={styles.iconfooter}
            source={require('../assets/images/plus.png')}
          />
          <Image
            style={styles.iconfooter}
            source={require('../assets/images/bagshop.png')}
          />
          <Image
            style={[styles.iconfooter, { borderRadius: 50 }]}
            source={require('../assets/images/face.jpeg')}
          />
        </View> */}
      </View>
    );
  }
}

export default Dashboard;

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomColor: colors.gray1,
    borderBottomWidth: 1,
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    bottom: 0,
    justifyContent: 'space-around',
    padding: 3,
    borderTopColor: colors.gray1,
    borderTopWidth: 1,
  },
  feedContainer: {
    display: 'flex',
  },
  icon: {
    width: 30,
    height: 30,
    marginHorizontal: 5,
  },
  iconfooter: {
    display: 'flex',
    width: 30,
    height: 30,
    padding: 5,
    marginVertical: 5,
  },
  logo: {
    width: 150,
    height: '100%',
  },
  logoIG: {
    width: 110,
    height: '100%',
  },
  headerRightWrapper: {
    display: 'flex',
    flexDirection: 'row',
    margin: 5,
  },
  iconHeader: {
    width: 25,
    height: 25,
    marginHorizontal: 10,
  },
  storiesWrapper: {
    backgroundColor: colors.gray1,
    borderBottomColor: colors.gray1,
    borderBottomWidth: 1,
  },
});
