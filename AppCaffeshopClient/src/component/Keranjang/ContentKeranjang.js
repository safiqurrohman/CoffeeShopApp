import React, { Component, useState } from 'react'
import { Text, View, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import CheckOut from './CheckOut';

const {width} = Dimensions.get('window');

const ContentKeranjang = (props) => {
    const [isChecked, setIsChecked] = useState(false);
    const [isCheckedLike, setIsCheckedLike] = useState(false);
    const [JumlahItem, setJumlahItem] = useState(1);

    const ActiveChek = () => {
        setIsChecked(!isChecked);
    }
    const KlikLike = () => {
        setIsCheckedLike(!isCheckedLike);
    }
    const kurangItem = () => {
       if(JumlahItem > 0){
        setJumlahItem(JumlahItem - 1);
       }
    }
    const tambahItem = () => {
        setJumlahItem(JumlahItem + 1 );
    }
    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.iconCheckOut}>
                    <TouchableOpacity style={styles.checkBok} onPress={ActiveChek}>
                        <Icon name={isChecked ? "checkbox-outline" : "square-outline"} size={30} color="#FFA439" />
                    </TouchableOpacity>
                </View>
                <View style={styles.contentImage}>
                    <Image source={props.gambar} style={styles.gambar}/>
                </View>
                <View style={styles.isicontent}>
                    <Text style={styles.menu}>{props.menu}</Text>
                    <Text style={styles.harga}>Rp {props.harga}</Text>
                    <View style={styles.moreicon}>
                        <TouchableOpacity>
                            <Icon name="list-circle-outline" size={23} color="black" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={KlikLike} >
                            <Icon name={isCheckedLike ? "heart-outline" : "heart"} size={23} color={isCheckedLike ? "#000000" : "#FFA439"} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View  style={styles.add}>
                    <View style={styles.iconAdd}>
                        <TouchableOpacity onPress={kurangItem}>
                            <Icon name="remove-outline" size={20} color="#6e6e6e"/>
                        </TouchableOpacity >
                        <View style={{width: 20, alignItems: 'center'}}>
                            <Text style={{color: '#000000',}}>{JumlahItem}</Text>  
                        </View>
                        <TouchableOpacity onPress={tambahItem}>
                            <Icon name="add-outline" size={20} color="#6e6e6e" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default ContentKeranjang;

const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: 130,
    //   backgroundColor: 'red',
      paddingHorizontal: 10,
      marginTop: 20
    },
    content: {
      width: '100%',
      height: 140,
      backgroundColor: '#ffff',
      borderRadius: 15,
      elevation: 10,
      flexDirection: 'row',
      alignItems: 'center',
    //   backgroundColor: 'black',
    },
    iconCheckOut: {
        width: width / 4 - 30, 
        height: '80%',
        // backgroundColor: 'red',
        marginVertical: 10
    },
    checkBok: {
        width: 30, 
        height: 30, 
        backgroundColor: '#FFFFFF', 
        borderRadius: 5, 
        // borderWidth: 1, 
        // borderColor: '#FFA439', 
        marginLeft: 15, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    contentImage: {
        width: 100, 
        height: "80%",
        // backgroundColor: 'yellow'
        },
    gambar: {
        borderRadius: 20,
        width: '100%',
        height: '100%'
    },
    isicontent: {
        width: 110, 
        height: "80%",
        // backgroundColor: 'blue',
        paddingLeft: 20,
        paddingTop: 15
    },
    menu: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#000000'
    },
    harga: {
        fontSize: 10,
        marginTop: 5,
        fontWeight: 'bold',
        marginBottom: 15,
        color: '#000000'
    },
    moreicon: {
        // backgroundColor: 'yellow',
        flexDirection: 'row',
        gap: 10
    },
    add: {
        width: width / 6, 
        height: "80%",
        // backgroundColor: 'grey',
        // justifyContent: 'center',
    },
    iconAdd: {
        paddingVertical: 2,
        paddingHorizontal: 8,
        // backgroundColor: 'yellow',
        position: 'absolute',
        bottom: 18,
        borderRadius: 5,
        left: -10,
        borderWidth: 1,
        borderColor: '#787878',
        justifyContent: 'center',
        // paddingHorizontal: 1,
        flexDirection: 'row'
    }
  });