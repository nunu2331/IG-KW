import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
  Image,
} from 'react-native';
import { colors } from '../../config/Colors';
import SearchBox from '../../components/SearchBox';
import Icon from 'react-native-vector-icons/FontAwesome';
import Tags from '../../components/Tags';

const width = Dimensions.get('window').width;

const tags = [
  { tagName: 'Toko' },
  { tagName: 'Pilihan Editor' },
  { tagName: 'Koleksi' },
  { tagName: 'Panduan' },
  { tagName: 'Video' },
];
export class MarketScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerWrapper}>
          <View style={styles.tokoHeader}>
            <Text style={styles.toko}>Toko</Text>
            <View style={styles.headerRightWrapper}>
              <Image
                style={styles.iconHeader}
                source={require('../../assets/images/wishlist.png')}
              />
              <Image
                style={styles.iconHeader}
                source={require('../../assets/images/dm.png')}
              />
            </View>
          </View>
          <View style={styles.header}>
            <SearchBox />
            {/* <Icon style={styles.qrCode} size={30} name="qrcode" /> */}
          </View>
          <ScrollView horizontal={true} style={styles.tagWrapper}>
            <Tags tags={tags} />
          </ScrollView>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}>
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
          </View><View style={styles.imagesWrapper}>
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
          </View><View style={styles.imagesWrapper}>
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
            style={[styles.iconfooter, { borderRadius: 50 }]}
            source={require('../../assets/images/face.jpeg')}
          />
        </View> */}
      </View>
    );
  }
}

export default MarketScreen;

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: colors.white,
  },
  headerWrapper: {
    // backgroundColor: colors.gray,
  },
  tokoHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    paddingTop: 10,
    marginHorizontal: 10,
  },
  toko: {

    fontSize: 22,
    fontWeight: '700',
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
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  qrCode: {
    padding: 10,
  },
  tagWrapper: {
    padding: 10,
  },
  videoContainer: {
    backgroundColor: colors.black,
    height: 240,
    width: 240,
  },
  videoContainerRight: {
    backgroundColor: colors.black,
    height: 240,
    width: 240,
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
  imagesWrapper: {
    flexDirection: 'row',
  },
  galleryIMage: {
    display: 'flex',
    flex: 1,
    height: 120,
    width: 120,
    margin: 1,
  },
});
