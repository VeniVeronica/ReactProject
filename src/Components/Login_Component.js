import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Dimensions } from 'react-native';
import { SocialIcon } from 'react-native-elements'

var DeviceHeight = Dimensions.get('window').height;
var DeviceWidth = Dimensions.get('window').width;

class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentWillMount() {
        alert(DeviceHeight * 0.03)
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 0.2, backgroundColor: 'grey' }}>
                <SocialIcon title='instagram' button type='instagram'/>
                </View>
                <View style={{ flex: 0.5, justifyContent: 'flex-start', marginVertical: 20 }}>
                    <TextInput style={{ height: 45, borderWidth: 1, borderColor: 'green', borderRadius: 5, padding: 5, margin: 15 }}
                        placeholder="Enter your Email" />
                    <TextInput style={{ height: 45, borderWidth: 1, borderColor: 'green', borderRadius: 5, padding: 5, margin: 15 }}
                        placeholder="Enter your Password" />
                    <Text style={{ borderBottomColor: 'black', textAlign: 'right', margin: 15, borderBottomWidth: 1 }}> Forgot Password? </Text>
                </View>
                <View style={ {flex: 0.3, margin:20, alignItems:'center' }}>
                    <Text> You are already Signup. Please SignIn </Text>
                </View> 
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    underLine: {
        textDecorationLine: "underline",
        textDecorationStyle: "solid",
        textDecorationColor: "#000"
    }
})

export default LoginComponent;
