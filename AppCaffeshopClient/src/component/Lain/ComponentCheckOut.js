import React, { Component } from 'react'
import { Text, View, Dimensions, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import Icon  from 'react-native-vector-icons/Ionicons'

const {width, height} = Dimensions.get('window');
const ComponentCheckOut = ({navigation}) => {
    const data = ["Caramel Machito", "Red Velvet", "Lemon Tea"]

    return(
        <ScrollView style={styles.container}>
            <View style={styles.content}>
            {/* {MenuPilihan.map((menu, index) => ( */}
                {data.map((judul, index) => (
                    <View style={styles.Item}>
                        <Image source={require('../../assets/home/content.jpeg')}  style={styles.gambar}/>
                        <View style={styles.isi}>
                            <Text style={{color: '#000000', fontWeight: 700, fontSize: 16 }}>{judul}</Text>
                            <View style={styles.harga}>
                                <View style={styles.itemAdd}>
                                    <TouchableOpacity>
                                        <Icon name="remove-outline" size={17} color="#000" />
                                    </TouchableOpacity>
                                    <Text style={{color: '#000'}}>1</Text>
                                    <TouchableOpacity>
                                        <Icon name="add-outline" size={17} color="#000" />
                                    </TouchableOpacity>
                                </View>
                                <Text style={{color: '#000000', fontSize: 12, fontWeight: 600}}>Rp 12.000</Text>
                            </View>
                        </View>
                        <View style={styles.hapusItem}>
                            <TouchableOpacity>
                                <Icon name="close-outline" size={25} color="#000000" />
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}

                <View style={{width: width, height: 1.5, backgroundColor: '#bdbdbd', marginVertical: 30}}/>
                <View style={styles.detailPembayaran}>
                    <View>
                        <Text style={{fontSize: 19, fontWeight: 600, color: '#000000'}}>Detail Pembayaran</Text>
                        <View style={styles.detail}>
                            <Text style={{color: '#7C7877', fontSize: 15, fontWeight: 500}}>Kode Pembayaran :</Text>
                            <Text style={{color: '#000', fontSize: 15, fontWeight: 500}}>HDJW382726729</Text>
                        </View>
                        <View style={styles.detail}>
                            <Text style={{color: '#7C7877', fontSize: 15, fontWeight: 500}}>Transaction Date :</Text>
                            <Text style={{color: '#000', fontSize: 15, fontWeight: 500}}>Dec 2, 2023</Text>
                        </View>
                        <View style={styles.detail}>
                            <Text style={{color: '#7C7877', fontSize: 15, fontWeight: 500}}>Nama Pembeli : </Text>
                            <Text style={{color: '#000', fontSize: 15, fontWeight: 500}}>Ammar Ganteng</Text>
                        </View>
                    </View>
                    <View style={{width: width, height: 1.5, backgroundColor: '#bdbdbd', marginVertical: 30}}/>
                    <View>
                        <View style={styles.detail}>
                            <Text style={{color: '#7C7877', fontSize: 15, fontWeight: 500}}>Kode Pembayaran :</Text>
                            <Text style={{color: '#000', fontSize: 15, fontWeight: 500}}>HDJW382726729</Text>
                        </View>
                        <View style={styles.detail}>
                            <Text style={{color: '#7C7877', fontSize: 15, fontWeight: 500}}>Transaction Date :</Text>
                            <Text style={{color: '#000', fontSize: 15, fontWeight: 500}}>Dec 2, 2023</Text>
                        </View>
                        <View style={styles.detail}>
                            <Text style={{color: '#7C7877', fontSize: 15, fontWeight: 500}}>Nama Pembeli : </Text>
                            <Text style={{color: '#000', fontSize: 15, fontWeight: 500}}>Ammar Ganteng</Text>
                        </View>
                    </View>
                </View>
                <View style={{ height: 100, top: 40, marginBottom: 60}}>
                    <View style={styles.total}>
                        <Text style={{color: '#000000', fontSize: 22, fontWeight: 800}}>Total</Text>
                        <Text style={{color: '#000000', fontSize: 22, fontWeight: 800}}>Rp 75.000</Text>
                    </View>
                    <TouchableOpacity
                     style={styles.bottom}
                     onPress={() => navigation.navigate('MainApp')}
                    >
                        <Text style={{color: '#FFFFFF', fontSize: 23, fontWeight: 700, textAlign: 'center'}}>Beli</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

export default ComponentCheckOut;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        width: width,
        paddingHorizontal: 15
        // height: height
    },
    content: {
        height: '100%',
        // backgroundColor: 'blue',
        marginBottom: 20
    },
    Item: {
        // width: '100%',
        height: 105,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        marginHorizontal: 2,
        borderRadius: 10,
        elevation: 5,
        marginTop: 16
    },
    gambar: {
        width: 100,
        height: 85,
        borderRadius: 10
    },
    isi: {
        // backgroundColor: 'red',
        width: width / 2 - 5,
        height: 70,
        paddingLeft: 15,
        justifyContent: 'space-around'
    },
    harga:{
        // backgroundColor: 'blue',
        flexDirection: 'row',
        paddingRight: 15,
        justifyContent: 'space-between',
        height: 30,
        alignItems: 'flex-end',
        bottom: -10,
        alignItems: 'center'
    },
    hapusItem: {
        // backgroundColor: 'blue',
        height: '100%',
        paddingTop: 5,
        marginLeft: 3
    },
    itemAdd: {
        width: 70,
        height: 25,
        // backgroundColor: 'green',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#000',
        justifyContent: 'space-between',
        paddingHorizontal: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    detailPembayaran: {
        width: '100%',
        // height: height /2,
        // backgroundColor: 'red'
    },
    detail: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        paddingHorizontal:10
    },
    total: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    bottom: {
        width: '100%',
        height: 60,
        backgroundColor: '#FFA439',
        marginTop: 20,
        justifyContent: 'center',
        borderRadius: 15,
        // position: 'absolute'
    }
})