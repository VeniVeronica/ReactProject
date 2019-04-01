import React, { Component } from 'react';
import { View, Text, TouchableOpacity, AsyncStorage } from 'react-native';

class LocalStorageComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
        title:'Hello Veni'
    };
  }
  localStorageMethod=()=>{
    var userData={email:'veni.kairos@gmail.com', id:1123}
    var getFormate=JSON.stringify(userData);
    var getTitle = this.state.title
    AsyncStorage.setItem('userDetails', getFormate)
    AsyncStorage.setItem('particularText', getTitle)
    //alert('Login:' +userData)
    //alert('email:'+userDetails.email+'id:'+userData.id)
    alert('Login:' +getFormate)
  }

  render() {
    return (
      <View style={{flex:1, backgroundColor:'grey', justifyContent:'center', alignItems: 'center',}}>
        <TouchableOpacity style={{height:40, backgroundColor:'green'}} onPress={this.localStorageMethod.bind(this)} >
        <Text>{this.state.title}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default LocalStorageComponent;

