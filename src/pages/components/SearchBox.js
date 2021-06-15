import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors } from '../config/Colors';
export class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
    };
  }
  textChanged = text => {
    this.setState({ searchText: text });
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.contentContainer}>
            <View style={styles.iconWrapper}>
              <Icon
                name="search"
                style={styles.icon}
                size={18}
                color={colors.gray}
              />

            <TextInput
              placeholder={'Search'}
              onChangeText={text => this.textChanged(text)}
              style={styles.inputBox}
            />
            </View>
{/* 
          <View style={styles.inputWrapper}>
            <TextInput
              placeholder={'Search'}
              onChangeText={text => this.textChanged(text)}
              style={styles.inputBox}
            />
          </View> */}
          </View>
        </View>
      </View>
    );
  }
}

export default SearchBox;

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },
  // header: {
  //   display: 'flex',
  //   flexDirection: 'row',
  //   height: 50,
  //   // width: '110%',
  //   borderBottomWidth: 1,
  //   padding: 20,
  // },\

  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomColor: colors.gray1,
    borderBottomWidth: 1,
  },
  contentContainer: {
    // // flexDirection: 'row',
    height: 35,
    width: '95%',
    borderWidth: 0,
    marginLeft: 5,
    paddingHorizontal: 5,
    backgroundColor: colors.gray1,
    borderRadius: 10,
  },
  iconWrapper: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    marginVertical: 3,
    marginLeft: 3,
  },
  inputWrapper: {
    marginLeft: 40,
  },
  inputBox: {
    padding: 5,
    width: '100%',
    fontWeight: '600',
  },
  icon: {
    padding: 5,
  },
});
