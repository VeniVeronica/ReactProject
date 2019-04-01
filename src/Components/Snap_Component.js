import React, { Component } from 'react';
import { View, Text, sliderWidth, itemWidth } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { styles } from '../config';

export default class SnapComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  _renderItem=()=>{
      <View style={styles.slide}>
      <Text style={styles.title}>{DataTransferItem.title}</Text>
      </View>
  }

  render() {
    return (
      <Carousel 
        ref ={(c) => {this._carousel =c;}}
        data = {this.state.entries}
        renderItem ={this._renderItem}
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
      
      />
    );
  }
}
