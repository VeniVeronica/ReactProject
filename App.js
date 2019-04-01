/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import ButtonFile_Component from './src/Components/ButtonFile_Component';
import Login_Component from './src/Components/Login_Component';
import Signup_Component from './src/Components/Signup_Component';
import UserSignin_Component from './src/Components/UserSignin_Component';
import Modal_Component from './src/Components/Modal_Component';
import RadioButton_Component from './src/Components/RadioButton_Component';
import DateTime_Component from './src/Components/DateTime_Component';
import SectionGrid_Component_Sample from './src/Components/SectionGrid_Component_Sample';
import FlatGrid_Component from './src/Components/FlatGrid_Component';
import SectionGrid_Component from './src/Components/SectionGrid_Component';
import { Router, Scene } from 'react-native-router-flux';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import CustomTabNavigator_Component from './src/Components/CustomTabNavigator_Component';
import LocalStorage_Component from './src/Components/LocalStorage_Component';
import FlatList_Component from './src/Components/FlatList_Component';
import GeolocationCoordinates_Component from './src/Components/GeolocationCoordinates_Component';
import Splash_Component from './src/Components/Splash_Component';
import SplashScreen_Component from './src/Components/SplashScreen_Component';
import SwiperExample_Component from './src/Components/SwiperExample_Component';
import Snap_Component from './src/Components/Snap_Component';
import Image_Component from './src/Components/Image_Component';
import Audio_Component from './src/Components/Audio_Component';
import Video_Component from './src/Components/Video_Component';
import DropDown_Component from './src/Components/DropDown_Component';
import Youtube_Component from './src/Components/Youtube_Component';


// export default class App extends _Component {
//   constructor(props){
//     super(props);
//     this.state={
//       name:'Hi veni! How are you?'
//     }
//   }
//   render() {
//     return (
//      <Router>
//        <Scene key={'root'} panHandlers={null} hideNavBar={true}>
//        <Scene key='signinpage' initial={true} _Component={UserSignin_Component}/>
//        <Scene key='sectiongrid' _Component={SectionGrid_Component}/>
//        </Scene>
//      </Router>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // backgroundColor: 'blue',
//   }
// });
const AppNavigator = createStackNavigator({
  UserSignin_Component: {
    screen: UserSignin_Component,
  },
  RadioButton_Component:{
    screen:RadioButton_Component
  },
  DateTime:{
      screen:DateTime_Component
  },
  CustomTabNavigator_Component:{
    screen:CustomTabNavigator_Component
  },
  LocalStorage:{
    screen:LocalStorage_Component
  },
  FlatList_Component:{
    screen:FlatList_Component
  },
  GeolocationCoordinates:{
    screen:GeolocationCoordinates_Component
  },
  Splash_Component:{
    screen:Splash_Component
  },
  SplashScreen_Component:{
    screen:SplashScreen_Component
  },
  Signup_Component:{
    screen:Signup_Component
  },
  SwiperExample_Component:{
    screen:SwiperExample_Component
  },
  Snap_Component:{
    screen:Snap_Component
  },
  Image_Component:{
    screen:Image_Component
  },

  Audio_Component:{
    screen:Audio_Component
  },
  Video_Component:{
    screen:Video_Component
  },
  DropDown_Component:{
    screen:DropDown_Component
  },
  Youtube_Component:{
    screen:Youtube_Component
  }
  }, {
    initialRouteName: 'Signup_Component',     // defenitely we will give a key value of _Component
    headerMode:'none'
   
});

const App = createAppContainer(AppNavigator);
export default App
