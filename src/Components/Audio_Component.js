import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ToastAndroid } from 'react-native';
import SoundPlayer from 'react-native-sound';
 var whoosh=null;

//  alert('song' +typeof(whoosh));
export default class AudioComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pause:false
    };
  }

playTrack1() {  
  whoosh = new SoundPlayer('mahanati_song.mp3', SoundPlayer.MAIN_BUNDLE, (error) => {
    if(error)
    //ToastAndroid.show('Error when init SoundPlayer:(((', ToastAndroid.SHORT);
    alert('Error when init SoundPlayer')
    else{
      whoosh.play()
    // whoosh.play((success) => {
    //   if (!success) 
    //     //ToastAndroid.show('Error when play a SoundPlayer:(((', ToastAndroid.SHORT);
    //     alert('Error when play SoundPlayer')
    //  });
  }
});
}

playTrack2() {
  if(whoosh!= null){
    if(this.state.pause)
    whoosh.play((success) => {
      // if (!success) 
      //  // ToastAndroid.show('Error when play a SoundPlayer:(((', ToastAndroid.SHORT);
      //  alert('Error when play SoundPlayer')
      });
       else 
        whoosh.pause();
        this.setState({pause:!this.state.pause});
       
      }
    }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.buttons} onPress={this.playTrack1.bind(this)}>
        <Text style={{color:'white', fontSize:16, textAlign:'center'}}>Play Song</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttons} onPress={this.playTrack2.bind(this)}>
        <Text style={{color:'white', fontSize:16, textAlign:'center'}}>{this.state.pause?'Resume':'Pause'}</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity style={styles.buttons} onPress={this.playTrack2.bind(this)}>
        <Text style={{color:'white', fontSize:16, textAlign:'center'}}>Stop Song</Text>
      </TouchableOpacity> */}
      </View>
    );
  }
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'blue'
  },
  buttons: {
    borderWidth: 1,
    borderColor: 'green',
    marginHorizontal: 20,
    padding: 10,
    marginVertical: 20,
},
})