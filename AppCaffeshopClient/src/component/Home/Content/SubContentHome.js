import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, Dimensions, TextInput, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Detail } from '../component';

const {width} = Dimensions.get('window');
const SubContentHome = (props) => {
    const { navigation } = props;

    const handlePress = () => {
        AsyncStorage.setItem('DetailData', JSON.stringify({
            gambar: props.gambar,
            rekomendasi: props.rekomendasi,
            menu: props.menu,
            status: props.status,
            harga: props.harga,
        }));
        navigation.navigate('Detail');
    };
    return  (
        <View style={styles.container}>
            <TouchableOpacity onPress={handlePress}>
                    <Image source={props.gambar} style={styles.gambar}/>
                    <View style={styles.rekomendasi}>
                        <Icon name="star" size={15} color="yellow"/>
                        <Text style={{color: '#fff'}}>{props.rekomendasi}</Text>
                    </View>
                    <View style={{paddingHorizontal: 7, marginTop: 5}}>
                        <Text style={styles.Menutext}>{props.menu}</Text>
                        <Text style={styles.statusMenu}>{props.status}</Text>
                        <View style={styles.harga}>
                            <Text style={{color: '#000000', fontSize: 12, fontWeight: 'bold'}}>Rp.{props.harga}</Text>
                            <TouchableOpacity 
                                style={styles.add}
                            >
                                <Image style={styles.iconAdd} source={require('../../../assets/home/icon/add.png')}/>
                            </TouchableOpacity>
                        </View>
                    </View>
            </TouchableOpacity>
        </View>
    )
}

export default SubContentHome;

const  styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffff',
        elevation: 4,
        borderRadius: 15,
        width: width / 2 - 20,
        marginBottom: 20,
    },
    gambar: {
        height: width /2-10, 
        width: width /2-20,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    rekomendasi: {
        width: 70,
        height: 30,
        backgroundColor: '#000000',
        justifyContent: 'center', 
        alignItems: 'center',
        flexDirection: 'row',
        gap: 5,
        position: 'absolute',
        borderTopLeftRadius: 15,
        borderBottomRightRadius: 15
    },
    Menutext: {
        color: '#000000',
        fontSize: 16,
        fontWeight: '500'
    },
    statusMenu: {
        color: '#9B9B9B',
        fontSize: 12
    },
    harga: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 40,
        alignItems: 'center',
        flex: 1
    },
    add: {
        height: 40,
        marginBottom: 10,
        marginTop: 20
    },
    iconAdd: {
        width: 30,
        height: 30,
        borderRadius: 10
    }
})