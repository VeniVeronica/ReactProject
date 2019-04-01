import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';

class RadioButton_Component extends Component {
  constructor(props) {
    super(props);
    this.state = {
       radioButtons_Array:['male', 'female', 'other'],
       initialCheckedValue:0,
       showParticularText:'',
    };
  }
  handleRadioClick(index){
    if(index == 0){
      alert('male')
    }else if(index == 1){
      alert('female')
    }
    else {
      alert('selected other')
      
    }
    this.setState({initialCheckedValue:index})
    alert('index:' +index)
    //this.props.navigation.getParam({UUUUUUU:this.state.getUserDetails})
    //this.props.navigation.navigate('DateTime')   
  }
    
  render() {
    let radioButtons =this.state.radioButtons_Array.map((resdata, i) => {
    return (
      <View key ={i}> 
        {this.state.initialCheckedValue == i ? (
        <TouchableOpacity style={styles.btn} onPress ={this.handleRadioClick.bind(this, i, resdata)}>
        <Image style= {styles.img} source = {require('../Assets/images/radio_button_checked_1.png')} />
        <Text style={{marginLeft:10}}> {resdata}</Text>
        </TouchableOpacity>
        ) : (
        <TouchableOpacity style={styles.btn} onPress ={this.handleRadioClick.bind(this, i, resdata)}>
        <Image style={styles.img} source = {require('../Assets/images/radio_button_unchecked_1.png')} />
        <Text style={{marginLeft:10}}>{resdata}</Text>
        </TouchableOpacity>)}
        </View>
    )
    })
    return (
      <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'green' }}>
          <View style={{ flex: 0.2, flexDirection: 'row', justifyContent: 'space-between', padding: 10, margin: 10, }}>
              {radioButtons}
          </View>
          </View>
          );
  }
}

const styles = StyleSheet.create({
        container: {
            flex:1,
            backgroundColor:'yellow'
        },
        img: {
          height: 20,
          width: 20
      },
      btn: {
          flexDirection: 'row',
          padding: 4,
      }
       
  });

export default RadioButton_Component;
