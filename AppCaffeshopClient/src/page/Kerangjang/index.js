import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import { CheckOut, Header } from '../../component'
import {ContentKeranjang} from '../../component'
export default class Keranjang extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
        {/* <Header tittle='Keranjang'/> */}
        <ScrollView style={{paddingBottom: 50}}>
          <ContentKeranjang 
            gambar={require('../../assets/home/content.jpeg')}
            id ={1}
            menu="Red Velvet"
            harga ="12.000"
            item = {0}
          
          />
          <ContentKeranjang 
            gambar={require('../../assets/home/content.jpeg')}
            id ={1}
            menu="Red Velvet"
            harga ="12.000"
            item = {0}
          
          />
          <ContentKeranjang 
            gambar={require('../../assets/home/content.jpeg')}
            id ={1}
            menu="Red Velvet"
            harga ="12.000"
            item = {0}
          
          />
          <ContentKeranjang 
            gambar={require('../../assets/home/content.jpeg')}
            id ={1}
            menu="Red Velvet"
            harga ="12.000"
            item = {0}
          
          />
          <ContentKeranjang 
            gambar={require('../../assets/home/content.jpeg')}
            id ={1}
            menu="Red Velvet"
            harga ="12.000"
            item = {0}
          
          />
          <ContentKeranjang 
            gambar={require('../../assets/home/content.jpeg')}
            id ={1}
            menu="Red Velvet"
            harga ="12.000"
            item = {0}
          
          />
          <View style={{width: '100%', height: 100}}></View>
        </ScrollView>
        <CheckOut />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 100,
    backgroundColor: 'red',
    paddingHorizontal: 10,
    marginTop: 20
    

  },
  content: {
    width: '100%',
    height: 100,
    backgroundColor: '#ffff',
    borderRadius: 15,
    elevation: 1
  }
});