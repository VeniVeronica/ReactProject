import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Alert, Dimensions, Image, ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';
import {createNavigationContainer} from 'react-navigation';
import RadioButton_Component from './RadioButton_Component';

var DevHeight = Dimensions.get('window').height;
var DevWidth = Dimensions.get('window').width;

class UserSignin_Component extends Component {
  constructor(props) {
    super(props);
    this.state = {
        userDetails:{email:'', password:''}
    };
    this.inputs={};
    this.focusNextField = this.focusNextField.bind(this);
  }

  focusNextField(id){
      this.inputs[id].focus();
  }


  // handlePress(){
    //     alert("Login Successfully")
    // }

    // modification will be updated by this function
    handleChange = (name, e) => {
        //alert(name);
       
        var user = this.state.userDetails;
        var strValue = e;
        user[name] = strValue
        // alert(user[name]);
        this.setState({ userDetails: user })
    }
    validationMail(email) {
        var reg = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])/;
        return reg.test(email);
    }
    loginMethod() {
        let { email, Password } = this.state.userDetails;
        if (email == '' || email == null || email == undefined) {
            Alert.alert('Email', 'please enter your email correctly')
        }
        else if(!this.validationMail(email)){
            Alert.alert('Email', 'please enter your email correctly')
        }
        else if (Password == '' || Password == null || Password == undefined) {
            Alert.alert('Password', 'please enter your Password correctly')
        }
        else {
            // alert("Log in successfully:email:"+email+"password:"+Password)
        //    Actions.sectiongrid({email:email, password:Password});
        //    alert('Login:' +email +password)
        this.props.navigation.navigate('RadioButton_Component',{userDetails:{email:email, password:Password}});
        alert("LOGIN DETAILS:" +email +Password)

        }
    }
    

    render() {
        return (
            <View style={styles.container}>  
             <ImageBackground style={ styles.backImage} source={require('../Assets/images/download.jpg')}>             
            <Image style={styles.imageStyles} source={require('../Assets/images/KairosLogo_1.png')} />

                <TextInput style={styles.buttons}
                    placeholder="email" placeholderTextColor="blue" value={this.state.userDetails.email} maxLength={50}
                    keyboardType='email-address'
                    ref={input =>{this.inputs["one"] = input;}}
                    onSubmitEditing={()=>this.focusNextField("two")}
                    onChangeText={this.handleChange.bind(this, 'email')}
                    returnKeyType='next' />

                <TextInput style={styles.buttons}
                    placeholder="Password" 
                    placeholderTextColor="blue" 
                    value={this.state.userDetails.Password}
                    maxLength={12} 
                    secureTextEntry={true}
                    ref={input=>{this.inputs["two"]=input;}}
                    onSubmitEditing={()=> this.loginMethod()}
                    onChangeText={this.handleChange.bind(this, 'Password')}
                    keyboardType='default'
                    returnKeyType='done' />
                <TouchableOpacity style={[styles.buttons, { backgroundColor: 'blue' }]}
                    onPress={this.loginMethod.bind(this)} >
                    <Text style={styles.textLogin}>LOGIN</Text>
                </TouchableOpacity>      
                </ImageBackground>
            </View>
               

        );
    }
}
 
const styles =StyleSheet.create({   
        container: {
            flex:1
            
        },
        buttons: {
            borderWidth: 1,
            borderColor: 'green',
            marginHorizontal: 20,
            padding: 10,
            marginVertical: 20,
        },
        textLogin: {
            fontWeight: '700',
            fontWeight: 'bold',
            textAlign: 'center',
            fontSize: 20,
            color: 'white'
    
        },
        imageStyles: {
            width: 150,
            height: 150,
            resizeMode: 'contain',
            marginRight: 100,
            marginLeft: 130,
        },
        backImage:{
            height:DevHeight,
            width:DevWidth,
            resizeMode: 'contain',
        }
});

export default UserSignin_Component;
