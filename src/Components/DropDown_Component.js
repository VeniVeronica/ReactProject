import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {Dropdown} from 'react-native-material-dropdown'

export default class DropDownComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
      let data=[
          { value:'gopi'},
          { value:'veni'},
          { value:'hema'},
          {value:'meena'},
          {value:'sirisha'}      
    ]
    return (
    <View style={{flex:1, backgroundColor:'green' }}>
      <Dropdown itemColor='blue'
      label="Favourite Names"
      data={data}
      />
      </View>
    );
  }
}
