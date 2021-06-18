import * as React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator,keyboardHidesTabBar } from '@react-navigation/bottom-tabs';
import Dashboard from '../pages/Dashboard';
import ProfileScreen from '../pages/Profile';
import SearchHomeScreen from '../pages/Search/SearchHomeScreen';
import SearchScreen from '../pages/Search/SearchScreen';
import Camera from '../pages/Camera';
import MarketScreen from '../pages/Market';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from '../config/Colors';

const Tab = createBottomTabNavigator();

const MyTabs=()=> {
  return (
    <Tab.Navigator
    tabBarOptions={{
      keyboardHidesTabBar: true
   }} >
      <Tab.Screen
        name="Home"
        component={Dashboard}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Image
              style={styles.bottomTabIcon}
              source={focused==true?require('../assets/images/homeclick.png'):require('../assets/images/homedefault.png')
              } />
          ),
          tabBarLabel: ''
        }}
      />
      <Tab.Screen name="Search" component={SearchHomeScreen} options={{
          tabBarIcon: ({ color, focused }) => (
            <Image
              style={styles.bottomTabIcon}
              source={focused==true?require('../assets/images/searchOn.png'):require('../assets/images/search.png')
              } />
          ),
          tabBarLabel: ''
        }} />
      <Tab.Screen name="Camera" component={Camera} options={{
          tabBarIcon: ({ color, focused }) => (
            <Image
              style={styles.bottomTabIcon}
              source={focused==true?require('../assets/images/addOn.png'):require('../assets/images/add.png')
              } />
          ),
          tabBarLabel: ''
        }} />
      <Tab.Screen name="Market" component={MarketScreen} options={{
          tabBarIcon: ({ color, focused }) => (
            <Image
              style={styles.bottomTabIcon}
              source={focused==true?require('../assets/images/shopOn.png'):require('../assets/images/shop.png')
              } />
          ),
          tabBarLabel: ''
        }}/>
      <Tab.Screen name="Profile" component={ProfileScreen}options={{
          tabBarIcon: ({ color, focused }) => (
            <Image
            style={[styles.bottomTabIcon, { borderRadius: 50, borderWidth: focused==true?2:0, borderColor: colors.black }]}
            source={focused==true?require('../assets/images/face.jpeg'):require('../assets/images/face.jpeg')
              } />
          ),
          tabBarLabel: ''
        }} />
    </Tab.Navigator>
  );
}

export default MyTabs

export const styles = StyleSheet.create({

  bottomTabIcon: {
    display: 'flex',
    width: 30,
    height: 30,
    padding: 5,
    marginVertical: 5,
    marginTop: 15,
  },
});