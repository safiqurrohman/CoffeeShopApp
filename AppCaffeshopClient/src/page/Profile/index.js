import React, { Component,  } from 'react'
import {Image, Text, View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import { Header } from '../../component'
import Icon from 'react-native-vector-icons/Ionicons'

const {height, width} = Dimensions.get('window');
const Profile = () => {
  return (
    <View style={styles.container}>
      {/* <Header tittle='Profil'/> */}
      <View style={styles.content}>
        <View style={styles.Profile}>
          <TouchableOpacity>
            <Image source={require('../../assets/home/icon/defaultprofile.png')} style={styles.image}/>
          </TouchableOpacity>
          <View style={styles.usertitle}>
            <Text style={styles.userName}>Kelompok7</Text>
            <Text style={{color: '#FFFFFF', fontSize: 12}}>Kelompok7@gmail.com</Text>
          </View>
          <TouchableOpacity>
            <Icon name="create-outline" size={30} color="#FFFFFF" />
          </TouchableOpacity>
        </View>

        {/* profileUser */}
        <View>
          <TouchableOpacity 
            style={styles.fitur}
          >
            <View style={styles.iconFitur}>
             <Icon name="person-outline" size={25} color="#000000"/>
            </View>
            <View style={styles.textcontent}>
              <Text style={styles.fiturText}>Akun Saya</Text>
            </View>
            <Icon name="chevron-forward-outline" size={25} color="#000000"/>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity 
            style={styles.fitur}
          >
            <View style={styles.iconFitur}>
             <Icon name="lock-closed-outline" size={25} color="#000000"/>
            </View>
            <View style={styles.textcontent}>
              <Text style={styles.fiturText}>Ubah Password</Text>
            </View>
            <Icon name="chevron-forward-outline" size={25} color="#000000"/>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity 
            style={styles.fitur}
          >
            <View style={styles.iconFitur}>
             <Icon name="document-text-outline" size={25} color="#000000"/>
            </View>
            <View style={styles.textcontent}>
              <Text style={styles.fiturText}>Riwayat Pemesanan</Text>
            </View>
            <Icon name="chevron-forward-outline" size={25} color="#000000"/>
          </TouchableOpacity>
        </View>

        {/* Membuat garis */}
        <View style={{width: '100%', height: 1, backgroundColor: 'rgba(0, 0, 0, 0.1)', marginTop: 30 }}></View>
        
        {/* fitur lain */}
        <View>
          <TouchableOpacity 
            style={styles.fitur}
          >
            <View style={styles.iconFitur}>
             <Icon name="flag-outline" size={25} color="#000000"/>
            </View>
            <View style={styles.textcontent}>
              <Text style={styles.fiturText}>FAQ’s</Text>
            </View>
            <Icon name="chevron-forward-outline" size={25} color="#000000"/>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity 
            style={styles.fitur}
          >
            <View style={styles.iconFitur}>
             <Icon name="globe-outline" size={25} color="#000000"/>
            </View>
            <View style={styles.textcontent}>
              <Text style={styles.fiturText}>Bahasa</Text>
            </View>
            <Icon name="chevron-forward-outline" size={25} color="#000000"/>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity 
            style={styles.fitur}
          >
            <View style={{width: 40, height: 40, backgroundColor: '#fcdede', borderRadius: 50, justifyContent: 'center', alignItems: 'center'}}>
             <Icon name="exit-outline" size={25} color="red"/>
            </View>
            <View style={styles.textcontent}>
              <Text style={styles.fiturText}>Keluar</Text>
            </View>
            <Icon name="chevron-forward-outline" size={25} color="#000000"/>
          </TouchableOpacity>
        </View>
      </View>
  </View>
  )
}

export default Profile; 

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    height: height,
    width: '100%',
    backgroundColor: '#FFFFFF'
  },
  content: {
    width: '100%',
    height: height,
    // backgroundColor: 'yellow'
  },
  Profile: {
    width: '100%',
    height: 89,
    backgroundColor: '#000000',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    borderRadius: 15,
    marginTop: 20,
    marginBottom: 30
  },
  usertitle: {
    width: 'auto',
    position: 'relative',
    left: -30,
    },
    userName: {
    color: '#FFFFFF',
    width: '80%',
    fontSize: 15,
    fontWeight: 'bold'
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 50,
    // backgroundColor: 'blue'
  },
  fitur: {
    width: '100%',
    height: 50,
    // backgroundColor: 'red',
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  iconFitur: {
    width: 40, 
    height: 40, 
    backgroundColor: '#D2D4DA', 
    borderRadius: 50, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  textcontent: {
    width: 200,
    // backgroundColor: 'red'

  },
  fiturText: {
    color: '#000000',
    fontSize: 15,
    fontWeight: 'bold'
  }
})