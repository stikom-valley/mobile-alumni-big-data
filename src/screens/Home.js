import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LandingPage from './LandingPage/LandingPage';
import Alumni from './Alumni/Alumni';
import Bantuan from './Bantuan/Bantuan';
import Profile from './Profile/Profile';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default class BottomNav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      // <View><Text>AWOEKAOW</Text></View>
      <Tab.Navigator
        tabBarOptions={{
        //   labelStyle: styles.nunito12,
          tabStyle: {
            marginBottom: 10,
            paddingTop: 5,
          },
          style: {
            height: 60,
          },
          activeTintColor: '#54C5AB',
        }}>
        <Tab.Screen
          name="LandingPage"
          component={LandingPage}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({tintColor, focused}) => (
              <Icon
                name="home-outline"
                size={20}
                color={focused ? '#54C5AB' : '#4F4D64'}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Alumni"
          component={Alumni}
          options={{
            tabBarLabel: 'Alumni',
            tabBarIcon: ({tintColor, focused}) => (
              <Icon
                name="search-outline"
                size={20}
                color={focused ? '#54C5AB' : '#4F4D64'}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Bantuan"
          component={Bantuan}
          options={{
            tabBarLabel: 'Bantuan',
            tabBarIcon: ({tintColor, focused}) => (
              <Icon
                name="help-circle-outline"
                size={20}
                color={focused ? '#54C5AB' : '#4F4D64'}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({tintColor, focused}) => (
              <Icon
                name="person-outline"
                size={20}
                color={focused ? '#54C5AB' : '#4F4D64'}
              />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
}

const LStyle = StyleSheet.create({});
