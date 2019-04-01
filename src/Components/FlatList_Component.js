import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

var listData=[
  {name: 'veni', location:'vizag'},
  {name: 'hema', location:'tanuku'},
  {name: 'meena', location:'relangi'}      
]

class FlatListComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:listData
    };
  }
  _renderItem=(data)=>{
    let{item, index} = data;
    return(
      <View key={index} style={styles.container}>
      <Text style={styles.textStyle}>userName:{item.name}</Text>
      <Text style={styles.textStyle}>userName:{item.location}</Text>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList 
        data={this.state.data}
        extraData={this.state}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'magenta',
        padding:10,
        justifyContent:'center'
    },
    
    textStyle:{
      fontSize:18,
      fontStyle: 'italic',
      fontWeight: 'bold',
      textAlign:'left'
    }
})

export default FlatListComponent;
