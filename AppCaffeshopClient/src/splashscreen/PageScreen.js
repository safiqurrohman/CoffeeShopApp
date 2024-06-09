import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../auth/Login';

const {width, height} = Dimensions.get('screen');

class PageScreen extends Component  {
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        return (
          <View style={Styles.container}>
            <Image source={require('../assets/landingPage/pagescreen.jpeg')} style={Styles.imagebanner}/>
            <View style={Styles.content}>
                <View style={Styles.box}>
                    <Text style={Styles.title}>Good coffee</Text>
                    <Text style={Styles.title}>Good friends</Text>
                    <Text style={Styles.title}>let it blends</Text>
                    <Text style={Styles.text}>The best grain, the finest roast, the most powerful flavor.</Text>
                </View>
                <TouchableOpacity 
                    onPress={() => this.props.navigation.navigate('Login')} 
                    style={Styles.getbotton}
                    >
                    <Text style={{color: '#ffff', fontSize: 20, fontWeight: 'bold'}}>Get Started</Text>
                </TouchableOpacity>
            </View>
          </View>
        )
    }
}

export default PageScreen;

const Styles = StyleSheet.create({
    container: {
        flex: 1
    },
    imagebanner: {
        width: width,
        height: height,
        position: 'static'
    },
    content: {
        position: 'absolute',
        width: width,
        height: height,
        bottom: '60%',
        top: '40%',
        alignItems: 'center',
    },
    box: {
        width: width,
        // backgroundColor: 'red',
        paddingHorizontal: 40,
        alignItems: 'center'
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        fontFamily: 'poppins'
    },
    text: {
        justifyContent: 'center',
        fontSize: 15,
        color: 'white',
        marginTop: 20,
        textAlign: 'center'
    },
    getbotton: {
        width: 300,
        height: 70,
        marginTop: 80,
        backgroundColor: '#846046',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        elevation: 1
    }
})