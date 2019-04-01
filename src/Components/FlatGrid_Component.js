import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import {localData} from '../config';

class SectionGridComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    
    return (
      <FlatGrid itemDimension={130} 
      items={localData.items}
      style ={styles.gridView}

      renderItem={({ item, index }) => (
        <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemCode}>{item.code}</Text>
        </View>
      )}

      />
    );
  }
}

const styles = StyleSheet.create({
  gridView:{
    marginTop:20,
    flex:1
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  itemName: {
    fontSize: 16,
    color: 'white',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: 'white',
  },
})

export default SectionGridComponent;
