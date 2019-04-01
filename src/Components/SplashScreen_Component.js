import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

 class SplashScreenComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> HIIIIIIIIIIIII </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
      flex:1,
      backgroundColor:'red'
  }
})
export default SplashScreenComponent