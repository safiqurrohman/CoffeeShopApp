import { Text, View, Dimensions } from 'react-native'
import React, { Component } from 'react'
const {width} = Dimensions.get('window');

export default class Garis extends Component {
  render() {
    return (
      <View style={{width: width, height: 1, backgroundColor: '#000000'}}>
      </View>
    )
  }
}