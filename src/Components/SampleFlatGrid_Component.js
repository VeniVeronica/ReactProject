import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {localData} from '../config';
import { FlatGrid } from 'react-native-super-grid';

class GridComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <FlatGrid itemDimension={130} items ={[1,2,3,4,5,6]} 
      renderItem={({item}) => (<Text>{item}</Text>) }
      />
    );
  }
}

export default GridComponent;
