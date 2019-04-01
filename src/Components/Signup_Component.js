import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';

export default class SignupComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  handlePress = () => {
}

  render() {
    return (
        <View style = { styles.container }>
        <View style ={styles.container1}>
        <Text style ={{fontSize:40, fontWeight:'bold', fontFamily: 'castellar', fontStyle: 'italic', textAlign:'center'}}> USER LOGIN  </Text>
        <Text style ={{fontSize:20, fontWeight:'bold', fontFamily: 'Arial', fontStyle: 'italic', textAlign:'center'}}>Welcome to the website </Text>
        </View>

        <View style={styles.container2}>        
        {/* <TextInput style = {{borderColor:'green', borderWidth:3, margin:50, textAlign:'center',fontFamily:'times new roman', fontSize:20, fontStyle:'italic'}} placeholder='USER NAME' />
        <TextInput style ={{borderColor:'green', borderWidth:3, margin:50, textAlign:'center',fontFamily:'times new roman', fontSize:20, fontStyle:'italic'}} placeholder='PASSWORD'/> */}
        <View style={styles.button}>
       <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBst9KH17BEUDi0l-A68QsM8BDOQRVA7FiqfV7P-dUwiWZX2-bAQ',}}
                  style={styles.ImageStyle}  />
          <TextInput style={{fontSize:18}}  placeholder='Email' placeholderTextColor='white'/>
          </View>
          <View style={styles.button}>
          <Image source={{uri:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQkAAAC+CAMAAAARDgovAAAAYFBMVEX///80mNtGouEgktnF3vPS5vcRj9n5/f8Ykdrd7fvp8/sultorldokk9nC3vXu9v2Jv+pnruR7t+eZx+3f7vpaqOKVxey82vOhy+4+nd6Cu+iv0vBUpuFrsOSt0fD0+v4IMQkYAAAEpElEQVR4nO2d7XKrLBRGDyESEqQxH8Y0Js393+VreoZ3WlA35kSN22fN9E8HO7CKfMmGP38AAAAAAAAAAAAAAAAAAAAAAAAAMBzbpDxcbrt8d7ucymQ7dnZG4l7shZbWpuZBaq3UZl/Oz0aRq8qB+E3lQ13L1dh5G5DtSUrfwv82rM7mUjFWmbINGv5i1eU+diaHoJTtHr5d6K+xs9k791ySHh7IK/NXJJFplIiqvdDLsTPbJ6VqaihrUOexs9sfBxXvoUJnY2e4Lw66kwi+KspuNeJbBcsXJOkuomorGDabq2BsHVcr+HWmt9ju8zcmHzvjr2bZ1FoaW81Cqx/TUGV0MXbWX4yoK2g127K701fxUZSnW6ptbZp07Ky/lrJmjG2kOax/pDkeRN0M1fLqPz7DIqYirPeFCGdnvCpFErYSqn7UVDMMlR8D57ZPLkHH0Ti/SnSwknUbNK/9ErQSOmlMewzqj+aznrf2C9faNS79F0TyGWh+ee1g2l7f/XfJHgbKZ//svaKpTWvyu1eFGDUU19+NoNkR6T1z5nOQXA6BN8C0JZG+8N4mOUguh8DrOmRzx/EXv4Xl03l4JvSaSL9ha8IvGEzABEw4YMIBEw6YcMCEAyYcMOGACQdMOGDCARMOmHDAhAMmHDDhgAkHTDhgwgETDphwwIQDJhww4YAJB0w4YMIBEw6vYOS2wsT/uM7VhD0R6c+WqwnvX2wEkd7f0asHyWWPbM47oZVSwQZL8/htC8HW5u/0Znc+jl2kp9jsVGOowlMYY1U+QRfnLgGR8TbU5PZmXrrGAcai92MXrRunvkRUffBl7MJ14ak4wFgmFS9YE9jyOowZu3jxNIa/vQY5nSC5W59VYlKRk3FHTDzPZEbf/lTy9Saoyey7UBP/1ohJrX4ga4NFG5hMEFC8iVSLrFhvttt1kX3q6HhrdiaMuv2Mb1jvYwfo3EzYhT+d2sQe58PLhKpbrzlHDU55mVD1w6MgRJK9iQYRcSo4mWhZyjzTbQUnE4uWx3OyB2FkonWQuCHfDz4miNBZP+SYsQniSLsgIJ+vCeqUkdpDbTiaSKlF2Yx4PdiYsNQxoH5cOVsTZEH++Q+8C1RByIWW8ICWuZqgFr34mKBOXZhNnei8k4StCfL8Nv+EH7Ymup5Tw9cE+b2CmpfzMUEc2fMxHxPEsUwLaoGCjwkh2yrFB/04HxNCtlzGQG/O4mSi5XP3jv4UxsmEsE0z8yzi4w8rE0LWq4jaqcbLhEgX4aHi95y+5YSfCWGUPxM7Rn4i5mYinIlFP8jfROS2JJiACZiAidmZsP4eiuVsTfibKPz4r9mYCJYpFnHP8TMh9Mdzz/EzYcyvBc3oWAh+JoRZ/FCRz3eP7kOFcLOw5DP+ciiOJoTRi/NynXxdgwtM5maiwspuO/knZKL/+I7JxM8+dzFeBxNjFzAachvhv0F+V30fOjYUXdETuhbr2uvrMaUrXo69xhBTW3Leiiful41lavfQ9nPogmgIFXprlhFX1XfHTvG60VWm5UsHFiaV+tLyjf2NWRVZvngdeVZMJYoaAAAAAAAAAAAAAAAAAAAAAAAAmAL/AbTrRKSLa0pQAAAAAElFTkSuQmCC'}}
           style={styles.ImageStyle} />
          <TextInput style={{fontSize:18}} secureTextEntry={true}  placeholder='Password' placeholderTextColor='white'/>
        </View>
        <TextInput style ={{fontSize:20, textAlign:'center'}} value="remember me"/>
        <TouchableOpacity onPress={this.handlePress}>
        <TextInput style ={{fontSize:20, textAlign:'center'}} value="LOGIN"/>
        </TouchableOpacity>
        </View>

        <View style ={styles.container3}>
        <Text style={{fontSize:20, textAlign:'center',textDecorationLine:'underline'}} >Forgot password?</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
        container: {
            flex:1
        },
        container1:{
            flex:0.3,
            justifyContent: 'center'
    },
    button: {
        flexDirection: 'row',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius:20,
        fontSize: 24,
        fontWeight: 'bold',
        padding: 5,
        textAlign:'center',
        margin:10,
        marginRight:50,
        marginLeft:50
      },
    container2:{
        flex:0.5,
        backgroundColor:'red',
        justifyContent: 'center',
        borderBottomLeftRadius:80 ,
        borderTopLeftRadius: 80,
        marginLeft: 20,
    },
    container3:{
        flex:0.2,
        justifyContent:'center',
    },
      ImageStyle: {
          padding: 10,
          margin: 5,
          height: 35,
          width: 35,
          resizeMode: 'contain',
          alignItems: 'center',
        }
  });
