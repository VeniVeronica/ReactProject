import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';

export default class SwiperExample_Component extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <Swiper style={styles.container} showsButtons={true}>
        <View style={styles.container}>
        <Text style={styles.textStyle}> Swiper component </Text>
      </View>
      <View style={styles.container1}>
        <Text style={styles.textStyle}> First component </Text>
      </View>
      <View style={styles.container2}>
        <Text style={styles.textStyle}>Second component </Text>
      </View>
      </Swiper>
    );
  }
}

const styles =StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'green'
    },
    container1:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'blue'
    },
    container2:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'magenta'
    },
    textStyle:{
        color:'white',
        fontSize:26
    }
})
