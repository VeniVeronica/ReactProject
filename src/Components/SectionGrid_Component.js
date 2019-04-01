import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { SectionGrid } from 'react-native-super-grid';

class SectionGrid_Component extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <SectionGrid itemDimension={50}
      sections={[
        {
          title:'Numbers',
          data: [1,2,3,4,5,6],
        },
        {
          title:'Alphabets',
          data:['A','B','C']
        }
      ]} 
      renderItem={({item}) => (<Text>{item}</Text>)}
      renderSectionHeader={({section}) => (<Text style={{fontSize:30}}>{section.title}</Text>)}
      
      />
    );

  }
}

export default SectionGrid_Component;
