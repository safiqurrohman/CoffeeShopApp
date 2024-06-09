import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import SubContentHome from './SubContentHome';

const ContentHome = ({navigation}) => {
    return (
        <View>
            <View  style={styles.Content}>
                <SubContentHome 
                    gambar ={require('../../../assets/home/content.jpeg')}
                    menu = "Red Velvet"
                    status = "Non-Caffe"
                    harga = "12.00"
                    rekomendasi = "4.5"
                    navigation={navigation}
                />
                <SubContentHome 
                    gambar ={require('../../../assets/home/content.jpeg')}
                    menu = "Red Velvet"
                    status = "Non-Caffe"
                    harga = "12.00"
                    rekomendasi = "4.3"
                    navigation={navigation}
                />
                <SubContentHome 
                    gambar ={require('../../../assets/home/content.jpeg')}
                    menu = "Red Velvet"
                    status = "Non-Caffe"
                    harga = "12.00"
                    rekomendasi = "3.5"
                    navigation={navigation}
                />
                <SubContentHome 
                    gambar ={require('../../../assets/home/content.jpeg')}
                    menu = "Red Velvet"
                    status = "Non-Caffe"
                    harga = "12.00"
                    rekomendasi = "4.4"
                    navigation={navigation}
                />
                <SubContentHome 
                    gambar ={require('../../../assets/home/content.jpeg')}
                    menu = "Red Velvet"
                    status = "Non-Caffe"
                    harga = "12.00"
                    rekomendasi = "3.5"
                    navigation={navigation}
                />
                <SubContentHome 
                    gambar ={require('../../../assets/home/content.jpeg')}
                    menu = "Red Velvet"
                    status = "Non-Caffe"
                    harga = "12.00"
                    rekomendasi = "4.0"
                    navigation={navigation}
                />
                <SubContentHome 
                    gambar ={require('../../../assets/home/content.jpeg')}
                    menu = "Red Velvet"
                    status = "Non-Caffe"
                    harga = "12.00"
                    rekomendasi = "4.0"
                    navigation={navigation}
                />
            
            </View>
        </View>
    )
}

export default  ContentHome;

const  styles = StyleSheet.create({
    Content: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginTop: 20,
        backgroundColor: '#ffff',
        marginBottom: 30
    }
})
