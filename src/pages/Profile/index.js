import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {colors} from '../../config/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';

export class ProfileScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.leftHeaderWrapper}>
            <Text style={styles.headerText}>Catherin</Text>
            <Image style={styles.leftHeaderIcon}
              source={require('../../assets/images/down-arrow.png')}
            />
            
          </View>
          <View style={styles.leftHeaderWrapper}>
            <Image style={styles.rightHeaderIcon}
              source={require('../../assets/images/plus.png')}
            />
            <Image style={styles.rightHeaderIcon}
              source={require('../../assets/images/menu.png')}
            />
          </View>
        </View>
        <ScrollView
          showsVerticalScrollIndicator= {false}>
          <View style={styles.ProfileSectionWrapper}>
            <View style={styles.ImageSection}>
              <Image
                style={styles.instaImageBorder}
                source={require('../../assets/images/profilePage/storiescircle.png')}
              />
              <Image
                style={styles.userImage}
                source={require('../../assets/images/profilePage/face.jpeg')}
              />
              <Text style={styles.userName}>Catherin</Text>
            </View>
            <View style={styles.followersCountSection}>
              <View style={styles.followingCount}>
                <View>
                  <Text style={styles.countTitle}>334</Text>
                  <Text style={styles.countSubTitle}>Posts</Text>
                </View>
                <View>
                  <Text style={styles.countTitle}>211K</Text>
                  <Text style={styles.countSubTitle}>Followers</Text>
                </View>
                <View>
                  <Text style={styles.countTitle}>134</Text>
                  <Text style={styles.countSubTitle}>Following</Text>
                </View>
              </View>
              <View style={styles.buttonWrapper}>
                <TouchableOpacity style={styles.messagesButtonWrapper}>
                  <Text style={styles.mesagesTitle}>Messages</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.ButtonItemWrapper}>
                  <Image
                    style={styles.buttonIcon}
                    source={require('../../assets/images/profilePage/profielbuttonplus.png')}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.ButtonItemWrapper}>
                  <Image
                    style={styles.buttonIcon}
                    source={require('../../assets/images/profilePage/dropdown.png')}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.moreInfoWrapper}>
            <Text style={styles.introText}>
              Discovering Stories Around the world
            </Text>
            <Text style={styles.urlText}>www.catherin.com</Text>
          </View>
          <ScrollView 
          showsHorizontalScrollIndicator= {false} style={styles.storiesWrapper} horizontal={true}>
            <View>
              <Image
                style={styles.storiesImage}
                source={require('../../assets/images/profilePage/face.jpeg')}
              />
              <Text style={styles.storyProfName}>Catherin 1</Text>
            </View>
            <View>
              <Image
                style={styles.storiesImage}
                source={require('../../assets/images/profilePage/face.jpeg')}
              />
              <Text style={styles.storyProfName}>Catherin 2</Text>
            </View>

            <View>
              <Image
                style={styles.storiesImage}
                source={require('../../assets/images/profilePage/face.jpeg')}
              />
              <Text style={styles.storyProfName}>Catherin 3</Text>
            </View>

            <View>
              <Image
                style={styles.storiesImage}
                source={require('../../assets/images/profilePage/face.jpeg')}
              />
              <Text style={styles.storyProfName}>Catherin 4</Text>
            </View>

            <View>
              <Image
                style={styles.storiesImage}
                source={require('../../assets/images/profilePage/face.jpeg')}
              />
              <Text style={styles.storyProfName}>Catherin 5</Text>
            </View>

            <View>
              <Image
                style={styles.storiesImage}
                source={require('../../assets/images/profilePage/face.jpeg')}
              />
              <Text style={styles.storyProfName}>Catherin 6</Text>
            </View>
          </ScrollView>

          <View style={styles.viewIconsWrapper}>
            <Image
            style={styles.iconheader}
              source={require('../../assets/images/pixels.png')}
            />
            <Image
            style={styles.iconheader}
              source={require('../../assets/images/user.png')}
            />
          </View>

          <ScrollView 
          showsVerticalScrollIndicator= {false}>
            <View style={styles.imagesWrapper}>
              <Image
                style={styles.galleryIMage}
                source={require('../../assets/images/profilePage/1.jpg')}
              />
              <Image
                style={styles.galleryIMage}
                source={require('../../assets/images/profilePage/2.jpg')}
              />
              <Image
                style={styles.galleryIMage}
                source={require('../../assets/images/profilePage/4.jpg')}
              />
            </View>
            <View style={styles.imagesWrapper}>
              <Image
                style={styles.galleryIMage}
                source={require('../../assets/images/profilePage/5.jpg')}
              />
              <Image
                style={styles.galleryIMage}
                source={require('../../assets/images/profilePage/6.jpg')}
              />
              <Image
                style={styles.galleryIMage}
                source={require('../../assets/images/profilePage/7.jpg')}
              />
            </View>
          </ScrollView>
        </ScrollView>
        {/* <View style={styles.footer}>
            <Image
              style={styles.iconfooter}
              source={require('../../assets/images/homeclick.png')}
              resizeMode='contain'
            />
            <Image
              style={styles.iconfooter}
              source={require('../../assets/images/search.png')}
            />
            <Image
              style={styles.iconfooter}
              source={require('../../assets/images/plus.png')}
            />
            <Image
              style={styles.iconfooter}
              source={require('../../assets/images/bagshop.png')}
            />
            <Image
              style={[styles.iconfooter, {borderRadius: 50}]}
              source={require('../../assets/images/face.jpeg')}
            />
        </View> */}
      </View>
    );
  }
}

export default ProfileScreen;

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: colors.white
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    // borderBottomColor: colors.gray1,
    // borderBottomWidth: 1,
  },
  leftHeaderWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftHeaderIcon:{
    width: 10,
    height: 10,
    marginLeft: 10,
    marginTop: 5,
  },
  rightHeaderIcon:{
    width: 25,
    height: 25,
    marginVertical: 5,
    marginHorizontal: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: '700',
    marginLeft: 10,
  },
  ProfileSectionWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  ImageSection: {
    display: 'flex',
    flex: 1,
    paddingHorizontal: 5,
  },
  followersCountSection: {
    display: 'flex',
    flex: 2,
  },
  instaImageBorder: {
    width: 105,
    height: 105,
  },
  userImage: {
    position: 'absolute',
    width: 95,
    height: 95,
    borderRadius: 70,
    marginVertical: 5,
    marginLeft: 10,
  },
  followingCount: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  buttonWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  messagesButtonWrapper: {
    borderRadius: 5,
    borderWidth: 2,
    borderColor: colors.gray1,
    width: '60%',
    padding: 4,
  },
  ButtonItemWrapper: {
    borderRadius: 5,
    borderWidth: 2,
    borderColor: colors.gray1,

    padding: 4,
  },
  buttonIcon: {
    width: 25,
    height: 25,
  },
  mesagesTitle: {
    fontWeight: '700',
    textAlign: 'center',
  },
  countTitle: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
  },
  countSubTitle: {
    color: colors.gray,
    textAlign: 'center',
  },
  userName: {
    fontSize: 19,
    fontWeight: '600',
    textAlign: 'center',
  },
  moreInfoWrapper: {
    marginLeft: 15,
  },
  introText: {
    fontSize: 16,
  },
  urlText: {
    color: colors.blue,
  },
  storiesImage: {
    borderRadius: 70,
    width: 70,
    height: 70,
    borderColor: colors.gray1,
    borderWidth: 3,
    marginRight: 10,
  },
  storiesWrapper: {
    padding: 15,
    borderBottomWidth: 2,
    borderBottomColor: colors.gray1,
  },
  storyProfName: {
    textAlign: 'center',
  },
  viewIconsWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
  },
  iconheader:{

    height: 25,
    width: 25,
  },
  imagesWrapper: {
    flexDirection: 'row',
  },
  galleryIMage: {
    display: 'flex',
    flex: 1,
    height: 120,
    margin: 1,
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
  
  iconfooter: {
    display: 'flex',
    width: 30,
    height: 30,
    padding: 5,
    marginVertical: 5,
  },
});
