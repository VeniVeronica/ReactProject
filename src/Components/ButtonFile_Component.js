import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class ButtonFile_Component extends Component {
  constructor(props) {
    super(props);
    this.state = {
        getName:this.props.value
    };
  }

  render() {
    return (
      <View style ={styles.container}>
        <Text style={styles.textStyle}> {this.state.getName} </Text>
      </View>
    );
  }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'yellow'
    },
   
      textStyle: {
        fontSize: 20,
        fontStyle: 'italic',
        fontWeight: 'bold',
        textAlign: 'center',
        color:'black',
        textDecorationLine: 'underline'
      }

})

export default ButtonFile_Component