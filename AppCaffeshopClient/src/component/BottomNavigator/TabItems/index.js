import React from 'react';
import { Text, View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { IconHome, IconHomeActive, IconSuka, IconSukaActive, IconKeranjang, IconKeranjangActive, IconProfile } from '../../../assets';

const BottomIcon = ({ isFocused, onPress, onLongPress, label }) => {
    const IconTab = () => {
        if (label === "Home") return isFocused ? <Image source={require('../../../assets/bottomIcon/activehome.png')} style={styles.gambar}/> : <Image source={require('../../../assets/bottomIcon/home.png')} style={styles.gambar}/> ;
        if (label === "Favorit") return isFocused ? <Image source={require('../../../assets/bottomIcon/activesuka.png')} style={styles.gambar}/> : <Image source={require('../../../assets/bottomIcon/suka.png')} style={styles.gambar}/>;
        if (label === "Keranjang") return isFocused ? <Image source={require('../../../assets/bottomIcon/activekeranjang.png')} style={styles.gambar}/> : <Image source={require('../../../assets/bottomIcon/keranjang2.png')} style={styles.gambar}/>;
        if (label === "Profile") return isFocused ? <Image source={require('../../../assets/bottomIcon/activeprofil.png')} style={styles.gambar}/> : <Image source={require('../../../assets/bottomIcon/profil.png')} style={styles.gambar}/>;
        // Default return if label doesn't match any of the above
        return <Image source={require('../../../assets/bottomIcon/home.png')} style={styles.gambar}/>;
    };
    

    return (
        <TouchableOpacity
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.container}
        >
            <IconTab/>
            <Text style={{color: isFocused ? '#000000' : '#8d8e8f' }}>
                {label}
            </Text>
        </TouchableOpacity>
    );
};

export default BottomIcon;

const styles = StyleSheet.create({
    container: {
        width: 60,
        height: 40,
        flex: 1, 
        alignItems: 'center' ,
        top: 0,
        marginTop: 8
    },

})