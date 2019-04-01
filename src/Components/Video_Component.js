import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Video from 'react-native-video';

export default class VideoComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repeat:true,
      rate:1,
      volume:1,
      muted:false,
      resizeMode:'contain',
      duration:0.0,
      currentTime:0.0,
      paused:true,
      rateText:'1.0',
      pausedText:'Play',
      hideControls:'false',
    };
    this.video=Video;
  }
  onLoad=(data)=>{
    this.setState({duration:data.duration});
  }
  onProgress=(data)=>{
    this.setState({currentTime:data.currentTime});
  }
  onEnd=()=>{
    this.setState({pausedText:'Play', paused:true});
    //this.video.seek(0);
  }

  render() {
    return (
        <View style={styles.container}>
        <TouchableOpacity style={styles.video} onPress={()=> this.setState({paused:!this.state.paused})}>
        <Video 
          //ref={(ref:Video)=> {this.video=ref}}
          source={require('../Assets/Videos/sample_video.mp4')}
          repeat={this.state.repeat}
          rate={this.state.rate}
          volume={this.state.volume}
          muted={this.state.muted}
          resizeMode={this.state.resizeMode}
          paused={this.state.paused}
          onLoad={this.onLoad}
          onProgress={this.onProgress}
          onEnd={this.onEnd}          
          style={styles.video}
        />
        </TouchableOpacity>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});



    
