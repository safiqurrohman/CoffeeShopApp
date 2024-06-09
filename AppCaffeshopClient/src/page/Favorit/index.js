import React, { Component } from 'react'
import { Text, Image, View, StyleSheet, ScrollView } from 'react-native'

import { Header, FavoritContent } from '../../component'

export default class Favorit extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <Header tittle='Favorit'/> */}
        <ScrollView>
          <FavoritContent 
            gambar = {require('../../assets/home/content.jpeg')}
            menu = "Americano"
            des = "Lorem Ipsum is simply dummy text of the printing and typesetting"
            status = "Coffee"
          />
          <FavoritContent 
            gambar = {require('../../assets/home/content.jpeg')}
            menu = "Lemon Tea"
            des = "Lorem Ipsum is simply dummy text of the printing and typesetting"
            status = "Non-Coffee"
          />
          <FavoritContent 
            gambar = {require('../../assets/home/content.jpeg')}
            menu = "Red Valvet"
            des = "Lorem Ipsum is simply dummy text of the printing and typesetting"
            status = "Non-Coffee"
          />
          <FavoritContent 
            gambar = {require('../../assets/home/content.jpeg')}
            menu = "Red Valvet"
            des = "Lorem Ipsum is simply dummy text of the printing and typesetting"
            status = "Non-Coffee"
          />
          <FavoritContent 
            gambar = {require('../../assets/home/content.jpeg')}
            menu = "Red Valvet"
            des = "Lorem Ipsum is simply dummy text of the printing and typesetting"
            status = "Non-Coffee"
          />
          <FavoritContent 
            gambar = {require('../../assets/home/content.jpeg')}
            menu = "Tea"
            des = "Lorem Ipsum is simply dummy text of the printing and typesetting"
            status = "Coffee"
          />
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  }

})