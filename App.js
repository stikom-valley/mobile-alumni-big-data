/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import OnBoard from './src/screens/OnBoard/OnBoard';
import Login from './src/screens/Login/Login';
import Register from './src/screens/Register/Register';
import LandingPage from './src/screens/LandingPage/LandingPage';
import Alumni from './src/screens/Alumni/Alumni';
import DetailAlumni from './src/screens/Alumni/DetailAlumni';
import Bantuan from './src/screens/Bantuan/Bantuan';
import Profile from './src/screens/Profile/Profile';
import EditProfile from './src/screens/Profile/EditProfile';
import Kuisioner from './src/screens/Kuisioner/Kuisioner';
import Kuisioner2 from './src/screens/Kuisioner/Kuisioner2';
import Kuisioner3 from './src/screens/Kuisioner/Kuisioner3';
import Kuisioner4 from './src/screens/Kuisioner/Kuisioner4';
import Home from './src/screens/Home';

const Stack = createStackNavigator();

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="OnBoard" component={OnBoard} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="LandingPage" component={LandingPage} />
          <Stack.Screen name="Alumni" component={Alumni} />
          <Stack.Screen name="DetailAlumni" component={DetailAlumni} />
          <Stack.Screen name="Bantuan" component={Bantuan} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="EditProfile" component={EditProfile} />
          <Stack.Screen name="Kuisioner" component={Kuisioner} />
          <Stack.Screen name="Kuisioner2" component={Kuisioner2} />
          <Stack.Screen name="Kuisioner3" component={Kuisioner3} />
          <Stack.Screen name="Kuisioner4" component={Kuisioner4} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
