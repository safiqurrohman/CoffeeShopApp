import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions, Image } from 'react-native'

const {width} = Dimensions.get('window');
const Rekomendasi = (props) => {
    return (
      <View style={styles.container}>
        <Image style={styles.gambarRekomedasi} source={props.gambarContent}/>
        <View style={{position: 'absolute', marginTop: 15, marginLeft: 20}}>
            <View style={styles.diskon}>
                <Text style={styles.diskontext}>{props.diskon}</Text>
            </View>
            <View style={styles.textContent}>
                <Text style={styles.text}>{props.tittle1}</Text>
                <Text style={styles.text}>{props.tittle2}</Text>
            </View>
        </View>
      </View>
    )
}

export default Rekomendasi;

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        elevation: 7,
        // backgroundColor: 'red'
    },
    gambarRekomedasi: {
        width: '100%',
        height: 170,
        borderRadius: 20,
    },
    diskon: {
        flex: 1
        // backgroundColor: 'red'
    },
    diskontext: {
        borderRadius: 10,
        backgroundColor: '#3F4C52',
        fontSize: 16,
        fontWeight: '600',
        color: '#fff',
        width: 90,
        paddingHorizontal: 20,
        paddingTop: 4,
        paddingBottom: 7,
        alignItems: 'center'
    },
    textContent: {
        flexDirection: 'column',
        marginTop: 10,
        paddingLeft: 10
    },
    text: {
        color: '#FFFF',
        fontSize: 30,
        fontWeight: 'bold'

    },
    
})