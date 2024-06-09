import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, Image, Dimensions, StatusBar } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const {width, height} = Dimensions.get('screen');
const Splashscreen = ({ navigation }) => {
    const [animating, setAnimating] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setAnimating(false);
            AsyncStorage.getItem('username' && 'useremail').then((value)=> {
                value === null ? (
                    navigation.replace('Login')
                ) : (
                    navigation.replace('MainApp') 
                )
            })
        }, 2000);
    }, []);

    return (
        <View style={styles.container}>
            <Image source={require('../assets/auth/logo.png')} style={styles.imageBanner}/>
            <ActivityIndicator
            animating={animating}
            color="#333"
            size="200"
            style={styles.ActivityIndicator}
            />
        </View>
    )
}

export default Splashscreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageBanner: {
        width: 140, 
        height: 140,
        justifyContent: 'center'
    },
    ActivityIndicator: {
        alignItems: 'center',
        justifyContent: 'center',
        top: '50%',
        left: 0,
        right: 0,
        position: 'absolute'
        
    }
})
