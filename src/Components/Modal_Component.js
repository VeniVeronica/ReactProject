import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Modal, TouchableHighlight } from 'react-native';
import Toast, {DURATION} from 'react-native-easy-toast'

export default class ModalComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false
    };
  }
  handlePress = () => {
  }
  modalMethod(visible) {
    this.setState({ modalVisible: visible })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container1}>
          <Text style={{ fontSize: 40, fontWeight: 'bold', fontFamily: 'castellar', fontStyle: 'italic', textAlign: 'center' }}> USER LOGIN  </Text>
          <Text style={{ fontSize: 20, fontWeight: 'bold', fontFamily: 'Arial', fontStyle: 'italic', textAlign: 'center' }}>Welcome to the website </Text>
        </View>

        <View style={styles.container2}>
          {/* <TextInput style = {{borderColor:'green', borderWidth:3, margin:50, textAlign:'center',fontFamily:'times new roman', fontSize:20, fontStyle:'italic'}} placeholder='USER NAME' />
        <TextInput style ={{borderColor:'green', borderWidth:3, margin:50, textAlign:'center',fontFamily:'times new roman', fontSize:20, fontStyle:'italic'}} placeholder='PASSWORD'/> */}

          <TextInput style={styles.button} placeholder='User name' placeholderTextColor='white' />
          <TextInput secureTextEntry={true} style={styles.button} placeholder='Password' placeholderTextColor='white' />

          <Text style={styles.textStyle}>remember me</Text>

          <TouchableOpacity onPress={()=>{this.refs.toast.show('hello world!')}}>
            {/* <TextInput style={{ fontSize: 20, textAlign: 'center' }} value="LOGIN" /> */}
            <Text style={styles.textStyle}>go to Login</Text>
            </TouchableOpacity>
            <Toast
                    ref="toast"
                    style={{backgroundColor:'green'}}
                    position='top'
                    positionValue={200}
                    textStyle={{color:'blue'}}
                />
            {/* <Toast ref="toast" /> */}
          
        </View>
        
        <Modal animationType="slide" transparent={false} visible={this.state.modalVisible}>
          <View style={styles.modal}>
            {/* same work also done by this line <TouchableOpacity onPress={()=>{this.modalMethod(false)}}> */}
            <TouchableOpacity style={styles.button} onPress={() => { this.modalMethod(!this.state.modalVisible) }}>
              <Text style={styles.textStyle}>Hello</Text>
            </TouchableOpacity>            
          </View>

        </Modal>

        <View style={styles.container3}>
          <TouchableOpacity onPress={() => { this.modalMethod(true) }}>
            <Text style={[styles.textStyle, {color:'black'}]} >Forgot password?</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  container1: {
    flex: 0.3,
    justifyContent: 'center'
  },
  button: {
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 20,
    fontSize: 24,
    fontWeight: 'bold',
    padding: 12,
    textAlign: 'center',
    margin: 10,
    marginRight: 50,
    marginLeft: 50
  },
  container2: {
    flex: 0.5,
    backgroundColor: 'red',
    justifyContent: 'center',
    borderBottomLeftRadius: 80,
    borderTopLeftRadius: 80,
    marginLeft: 20,
  },
  container3: {
    flex: 0.2,
    justifyContent: 'center',

  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',

  },
  textStyle: {
    fontSize: 20,
    fontStyle: 'italic',
    fontWeight: 'bold',
    textAlign: 'center',
    color:'black',
    textDecorationLine: 'underline'
  }
});
