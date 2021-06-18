import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors } from '../../config/Colors';

const DATA = [
  { id: 'jhgjfhd787', Title: 'Rose', subTitle: 'Lorem Ipum' },
  { id: 'fdgdfgdfgf', Title: 'Janaki', subTitle: 'Lorem Ipum' },
  { id: 'cvbfddffff', Title: 'Renuka', subTitle: 'Lorem Ipum' },
  { id: 'jhgjfhd787', Title: 'Rose', subTitle: 'Lorem Ipum' },
  { id: 'fdgdfgdfgf', Title: 'Janaki', subTitle: 'Lorem Ipum' },
  { id: 'cvbfddffff', Title: 'Renuka', subTitle: 'Lorem Ipum' },
  { id: 'jhgjfhd787', Title: 'Rose', subTitle: 'Lorem Ipum' },
  { id: 'fdgdfgdfgf', Title: 'Janaki', subTitle: 'Lorem Ipum' },
  { id: 'cvbfddffff', Title: 'Renuka', subTitle: 'Lorem Ipum' },
];
export class SearchScreen extends Component {
  renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image
        style={styles.image}
        source={require('../../assets/images/profilePage/face.jpeg')}
      />
      <View style={styles.itemRightWrapper}>
        <Text style={styles.title}>{item.Title}</Text>
        <Text style={styles.subTitle}>{item.subTitle}</Text>
      </View>
    </View>
  );

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerWrapper}>
          <View style={styles.topHeaderWrapper}>
            <View style={styles.headerTopLeftWrapper}>
              <Image
                style={styles.imageHeader}
                source={require('../../assets/images/left-arrow.png')}
              />
              <View style={styles.searchWrapper}>
                <TextInput
                  placeholder={'Search'}
                  onChangeText={text => this.textChanged(text)}
                  style={styles.inputBox}
                />
              </View>

            </View>
          </View>
          <View style={styles.subHeaderWrapper}>
            <TouchableOpacity style={styles.selectedCategoryItem}>
              <Text style={styles.titleSelected}>TOP</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryItem}>
              <Text style={styles.title}>ACCOUNTS</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryItem}>
              <Text style={styles.title}>TAGS</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryItem}>
              <Text style={styles.title}>PLACES</Text>
            </TouchableOpacity>
          </View>
        </View>
        <FlatList
          data={DATA}
          keyExtractor={(item, index) => {
            index.toString();
          }}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

export default SearchScreen;

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
  headerWrapper: {
    display: 'flex',
  },
  topHeaderWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',

    padding: 10,
  },
  headerTopLeftWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  subHeaderWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomColor: colors.gray1,
    borderBottomWidth: 1,
  },
  selectedCategoryItem: {
    display: 'flex',
    flex: 1,
    padding: 5,
    alignItems: 'center',
    borderBottomColor: colors.black,
    borderBottomWidth: 1,
  },
  categoryItem: {
    display: 'flex',
    flex: 1,
    padding: 5,
    alignItems: 'center',
  },
  title: {
    fontWeight: '700',
    color: colors.gray,
  },
  titleSelected: {
    fontWeight: '700',
  },
  itemContainer: {
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 10,
    marginLeft: 15,
    alignItems: 'center',
  },
  image: {
    width: 55,
    height: 55,
    borderRadius: 50,
  },
  imageHeader: {
    width: 30,
    height: 30,
    marginVertical: 5,
    marginLeft: 2,
  },
  itemRightWrapper: {
    marginLeft: 10,
  },
  subTitle: {
    color: colors.gray,
  },
  searchWrapper: {
    marginLeft: 20,
    marginRight: -15,
    width: '85%',
    borderWidth: 0,
    backgroundColor: colors.gray1,
    borderRadius: 10,
  },
  inputBox: {
    padding: 5,
    marginHorizontal: 10,
    fontWeight: '600',
  },
  // footer: {
  //   display: 'flex',
  //   flexDirection: 'row',
  //   bottom: 0,
  //   justifyContent: 'space-around',
  //   padding: 3,
  //   borderTopColor: colors.gray1,
  //   borderTopWidth: 1,
  // },
  // iconfooter: {
  //   display: 'flex',
  //   width: 30,
  //   height: 30,
  //   padding: 5,
  //   marginVertical: 5,
  // },
});
