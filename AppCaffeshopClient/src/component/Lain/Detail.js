import React, { Component, useState } from 'react'
import { Text, View, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Icon from 'react-native-vector-icons/Ionicons'
import ComponentCheckOut from './ComponentCheckOut'

const {width, height} = Dimensions.get('window');
const Detail = ({navigation}) => {
    // const [activeMenu, setActiveMenu] = useState('Small')
    // const Menues = ["Small", "Medium", "Large"];
    const [activeMenu, setactiveMenu] = useState('Small');
    const MenuPilihan = ["Small", "Medium", "Large"];
    
    const [activeService, setActiveSrvice] = useState("Dine in");
    const Services = ["Dine in", "Take Away"];

    const Pesan = () => {
        navigation.navigate('ComponentCheckOut');
    }

    const Service = () => {
        console.log("di klik");
    }
    return (
        <View style={{width: width, height: height + 40, backgroundColor: '#FFFFFF'}}>
            <View style={styles.container}>
                <View style={styles.background}/>
                <View style={styles.gambarMenu}>
                    <Image source={require('../../assets/home/content.jpeg')} style={styles.gambar} />
                </View>
                <View style={styles.isitext}>
                    <View style={styles.menuTitle}>
                        <Text style={{color: '#000000', fontSize: 25, fontWeight: 700, textAlign: 'center'}}>Caramel Machiato</Text>
                        <Text style={{color: '#555050', textAlign: 'center', fontWeight: 600}}>250 ml</Text>
                    </View>
                    <View style={{marginHorizontal: 20, marginTop: 10}}>
                        <Text style={{color: '#555050', textAlign: 'justify', fontSize: 14 }}>Minuman kkkklasik yang menggabungkan espresso pekat dengan lembutnya susu panas, dihiasi dengan sirup vanila dan lapisan foam susu yang lembut.</Text>
                    </View>
                    <View style={styles.sizeMenu}>
                        <Text style={{color: '#000000', fontSize: 22, fontWeight: 700, marginTop: 20}}>Size</Text>
                        <View style={styles.pilihanSize}>
                            {MenuPilihan.map((menu, index) => (
                                <TouchableOpacity
                                    key={index}
                                    style={[styles.Pilihan, activeMenu === menu && styles.activePilihan]}
                                    onPress={() => setactiveMenu(menu)}
                                >
                                <Text style={[styles.PilihanText, activeMenu === menu && styles.activePilihanText]}>{menu}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                        <Text style={{color: '#000000', fontSize: 22, fontWeight: 700, marginTop: 15}}>Service</Text>
                        <View style={styles.ServiceTab}>
                            {Services.map((Service, index) => (
                                <TouchableOpacity
                                    key={index}
                                    style={[styles.Service, activeService === Service && styles.activeService]}
                                    onPress={() => setActiveSrvice(Service)}
                                >
                                <Text style={[styles.serviceText, activeService === Service && styles.activeServiceText]}>{Service}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                    <View style={{height: 100, justifyContent: 'flex-end'}}>
                        <View style={styles.bottomSize}>
                            <View >
                                <TouchableOpacity 
                                    style={styles.imputBottom}
                                    onPress={Pesan}
                                    navigation={navigation}
                                >
                                    <Text style={{color: '#FFFFFF', fontSize: 20, fontWeight: 600}}>Beli</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Detail;

const styles = StyleSheet.create({
    container: {
        width: width,
        height: height,
        // backgroundColor: 'red'

    },
    background: {
        width: width,
        height: 300,
        backgroundColor: '#FFFFFF',
        borderBottomLeftRadius: 200,
        borderBottomRightRadius: 200
    },
    gambarMenu: {
        width: 'auto',
        position: 'absolute',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 100,
        marginLeft: 0,
        alignItems: 'center',
        elevation: 5,
        borderRadius: 20,
    },
    gambar: {
        width: 330,
        height: 230,
        borderRadius: 20,
        elevation: 5
    },
    isitext: {
        width: width,
        height: height,
        // backgroundColor: 'red'
    },
    menuTitle: {
        marginHorizontal: 20,
        marginTop: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    sizeMenu: {
        marginHorizontal: 20,
        // backgroundColor: 'red'
    },
    pilihanSize: {
        height: 60,
        // backgroundColor: 'blue',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 20,
        marginTop: 1,
        alignItems: 'center'
    },

    Pilihan: {
        width: 80,
        height: 40,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#FFA439',
        elevation: 3
    },
    activePilihan: {
        backgroundColor: '#FFA439',
        borderColor: '#6b6b6b'
    },

    ServiceTab: {
        width: width / 1 - 160,
        height: 'auto',
        // backgroundColor: 'red',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 20,
        marginTop: 8
    },

    Service: {
        width: 80,
        height: 40,
        backgroundColor: '#FFFFFF',
        gap: 20,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#FFA439',
        elevation: 3
    },

    activeService: {
        backgroundColor: '#FFA439',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#6b6b6b'
        // borderColor: '#FFA439'
    },

    serviceText: {
        fontSize: 15,
        color: '#000000'
    },
    activeServiceText: {
        color: '#FFFFFF',
        fontWeight: 700
    },
    bottonSize: {
        backgroundColor: '#FFA439',
        width: 80,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 10
    },
    PilihanText: {
        fontSize: 15,
        color: '#000000'
    },
    activePilihanText: {
        color: '#FFFFFF',
        fontWeight: 700
    },
    bottomSize: {
        marginHorizontal: 20, 
        flexDirection: 'row',
        justifyContent:  'center',
        // backgroundColor: 'red',
    },
    imputBottom: {
        width: 330,
        height: 50,
        backgroundColor: '#FFA439',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3
    }
})