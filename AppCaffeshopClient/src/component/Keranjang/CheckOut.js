import React, { Component, useState } from 'react'
import { Text, View, StyleSheet, Dimensions, Touchable, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const {width} = Dimensions.get('window');
const CheckOut = () => {

    const [isCheckOut, setCheckOut] = useState(false);
    const activeCheckOut= () => {
        setCheckOut(!isCheckOut);
    }
    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.pilih}>
                    <TouchableOpacity onPress={activeCheckOut} style={{paddingVertical: 30, paddingLeft: 15}}>
                        <Icon name={isCheckOut? "square-outline" : "checkbox-outline"} size={30} color="#FFA439" />
                    </TouchableOpacity>
                    <Text style={{color: '#000000', fontSize: 16, fontWeight: 'bold', marginLeft: 10}}>Semua</Text>
                </View>
                <View style={styles.beli}>
                    <View style={styles.textCheckOut}>
                        <Text style={{color: '#000000', fontSize: 12, fontWeight: 500}}>Total</Text>
                        <Text style={{color: '#000000', fontSize: 15, fontWeight: 700}}>Rp 24.000</Text>
                    </View>
                    <View  style={{flex: 1}}>
                        <TouchableOpacity style={styles.buttomCheckOut}>
                            <Text style={{textAlign: 'center', paddingVertical: 8, fontSize: 16, color: '#FFFFFF', fontWeight: 700}}>Beli</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default CheckOut;

const styles = StyleSheet.create({
    container: {
        width: '100%', 
        height: 100, 
        // backgroundColor: 'red', 
        position: 'absolute', 
        paddingVertical: 10,
        bottom: 5,
        // backgroundColor: '#FFFFFF',
        flex: 1
        },
    content: {
        bottom: 10,
        height: 90,
        // width: width /2 - 40,
        marginHorizontal: 10,
        borderRadius: 20,
        elevation: 4,
        shadowRadius: 10,
        shadowColor: '#000000',
        shadowOpacity: 0.9,
        flexDirection: 'row',
    },
    pilih: {
        width: width / 2 - 40,
        height: '100%',
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        alignItems: 'center',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10
        },
    beli: {
        width: 200,
        height: '100%',
        backgroundColor: '#FFFFFF',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    textCheckOut: {
        // backgroundColor: 'red',
        width: 100,
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingRight: 20
    },
    buttomCheckOut: {
        backgroundColor: '#FFA439',
        paddingHorizontal: 30,
        marginRight: 10,
        borderRadius: 10
    }
})