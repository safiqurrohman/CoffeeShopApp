import React, { Component, useState, useTheme } from '@react-navigation/native'
import { Text, View, StyleSheet, Platform, TouchableOpacity, Dimensions } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Icon from 'react-native-vector-icons/Ionicons'

const {width} = Dimensions.get('window');
const Header = (props) => {
  const goback = () => {
    navigation.replace('MainApp');
  }
  return  (
    <View style={styles.container}>
      <View  style={styles.back} >
        <TouchableOpacity>
          <Icon name="chevron-back-outline" size={30} color="#000000" style={styles.iconBack}/>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
       <Text style={styles.headerText}>{props.tittle}</Text>
      </View>
    </View>
  )
}

export default Header;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 90,
    // borderBottomColor: '#a1a1a1',
    alignItems: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  content: {
    width: width / 2 ,
    height: '100%',
    // backgroundColor: 'yellow',
    justifyContent: 'center'
  },
  headerText: {
    color: '#000000',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 15,
    textAlign: 'center'
  },
  back: {
    width: width / 4.3,
    height: 'auto',
    paddingHorizontal: 15,
    // backgroundColor: 'blue',
    // position: 'absolute',
    paddingTop: 20
  },
})