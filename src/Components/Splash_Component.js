import React, { Component } from 'react';
import { View, Text, StyleSheet, BackHandler } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import SplashScreen_Component from './SplashScreen_Component';

class Splash_Component extends Component {
    constructor(props) {
        super(props);
        this.state = {
      };
     }
      componentDidMount() {       
        setTimeout(() => {          
          this.splash_Hide();
          }, 2500);             
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);   
           
      }      
    
      splash_Hide() {
        SplashScreen.hide();    //using third party module this line will be used
        this.props.navigation.push('SignupComponent')  // without third party module this line used
      }

  render() {  
         return (
      <View style={styles.container}>
        <Text> WELCOME PAGE </Text>        
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'green'
    }
})

export default Splash_Component;

