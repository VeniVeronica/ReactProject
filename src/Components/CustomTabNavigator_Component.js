import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import RadioButton_Component from './RadioButton_Component';
import DateTime_Component from './DateTime_Component';
//import DateTimePicker from 'react-native-modal-datetime-picker';

class CustomTabNavigator_Component extends Component {
  constructor(props) {
    super(props);
    this.state = {
        initialTabBar:'RadioButton'
    };
  }
  chooseTabBar(getScreen){
        this.setState({initialTabBar:getScreen})
  }

  render() {
    return (
      <View style={{flex:1}}>
       <View style={{flex:0.8, backgroundColor:'green'}}>
       {this.state.initialTabBar === 'RadioButton' ?(
           <View style={{flex:1, backgroundColor:'yellow'}}><RadioButton_Component /></View>
       ):(
        <View style={{flex:1, backgroundColor:'yellow'}}><DateTime_Component /></View>)}
       </View>
       <View style={{flex:0.2, margin:10}}>
       <View style={{flex:1, justifyContent:'space-around',flexDirection: 'row'}}>
       <TouchableOpacity style={{flex:0.5, backgroundColor:'yellow', justifyContent:'center', marginHorizontal:10}} onPress={this.chooseTabBar.bind(this, 'RadioButton')}>
       <Text style={{fontSize:18, color:'black', fontWeight:'bold', justifyContent:'center', textAlign:'center'}}>RadioButton</Text>
       </TouchableOpacity>
       <TouchableOpacity style={{flex:0.5,backgroundColor:'red',justifyContent:'center', marginHorizontal:10}} onPress={this.chooseTabBar.bind(this, 'DateTimePicker')}>
       <Text style={{fontSize:18, color:'black', fontWeight:'bold',textAlign:'center'}}>DateTime</Text>
       </TouchableOpacity>
       </View>
       </View>
      </View>
    );
  }
}

export default CustomTabNavigator_Component;
