import React, { Component } from 'react'
import { Text, Image, View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'

import { Header } from '../../component'

const {width} = Dimensions.get('window');
const FavoritContent =(props)=>{
    return (
        <View style={styles.container}>
          <View style={styles.gambarfavorit}>
            <TouchableOpacity>
              <Image source={props.gambar}style={{width: 90, height: 92, borderRadius: 15 }} />
            </TouchableOpacity>
          </View>
          <View style={styles.textfavorit}>
            <Text style={{color: '#000000', fontSize: 18, fontWeight: 700}}>{props.menu}</Text>
            <Text style={{color: '#8B8688', fontSize: 9}}>{props.des}</Text>
            <Text style={{color: '#8B8688'}}>{props.status}</Text>
          </View>
          <View style={styles.bottomFavorit}>
            <View>
              <TouchableOpacity style={styles.deletebottom}>
                <Text style={{color: '#FFFFFF', fontWeight: 700}}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
    )
}

export default FavoritContent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF', 
    // width: width,
    height: 120,
    borderRadius: 10,
    elevation: 5,
    marginTop: 20,
    flexDirection: 'row',
    textAlign: 'center',
    alignItems: 'center',
    marginHorizontal: 10
  },
  gambarfavorit: {
    // backgroundColor: 'yellow',
    width: width / 3 - 20,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 10
  },
  textfavorit: {
    width: width /3,
    height: '100%',
    justifyContent: 'space-around',
    paddingLeft: 10,
    paddingVertical: 10
  },
  bottomFavorit: {
    width: width /3,
    height: '100%',
    // backgroundColor: 'green',
    justifyContent: 'flex-end',
    paddingBottom: 15,
    alignItems: 'flex-end',
    paddingRight: 10
  },
  deletebottom: {
    backgroundColor: '#B71D31',
    width: 90,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  }

})