import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, TextInput, StyleSheet, Image, TouchableOpacity, Modal, Text, TouchableWithoutFeedback, Animated, Easing, KeyboardAvoidingView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Search = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [animation] = useState(new Animated.Value(0));

    const showModal = () => {
        setModalVisible(true);
        Animated.timing(animation, {
            toValue: 1,
            duration: 500,
            easing: Easing.out(Easing.ease),
            useNativeDriver: true
        }).start();
    };

    const hideModal = () => {
        Animated.timing(animation, {
            toValue: 0,
            duration: 200,
            easing: Easing.in(Easing.ease),
            useNativeDriver: true
        }).start(() => {
            setModalVisible(false);
        });
    };

    const modalTranslateY = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [-300, 0]
    });


    const handleMenuSelection = (menu) => {
        // Logika untuk menangani pilihan menu di sini
        console.log(menu);
        hideModal();
    };

    return (
        <SafeAreaView style={styles.search}>
            <Icon name="search" size={30} color="#858383" style={styles.searchIcon} />
            <TextInput 
                style={styles.inputSearch}
                placeholder="Search items"
                placeholderTextColor="#7C7877"
                selectionColor="#000"
            />
            <TouchableOpacity onPress={showModal}>
                <Image source={require('../../../assets/home/icon/lihat.png')}/>
            </TouchableOpacity>

            <Modal
                animationType="none"
                transparent={true}
                visible={modalVisible}
                onRequestClose={hideModal}
            >
                <TouchableWithoutFeedback onPress={hideModal}>
                    <View style={styles.modalContainer}>
                        <TouchableWithoutFeedback>
                            <Animated.View style={[styles.modal, { transform: [{ translateY: modalTranslateY }] }]}>
                                <Text style={styles.modalTitle}>Pilih Kategori</Text>
                                <TouchableOpacity onPress={() => handleMenuSelection("All")}>
                                    <Text style={styles.modalOption}>All</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => handleMenuSelection("Caffe")}>
                                    <Text style={styles.modalOption}>Caffe</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => handleMenuSelection("Noncoffe")}>
                                    <Text style={styles.modalOption}>Noncoffe</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => handleMenuSelection("Food & Snack")}>
                                    <Text style={styles.modalOption}>Food & Snack</Text>
                                </TouchableOpacity>
                            </Animated.View>
                        </TouchableWithoutFeedback>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        </SafeAreaView>
    );
}

export default Search;

const styles = StyleSheet.create({
    search: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        paddingLeft: 10,
        paddingRight: 5,
        height: 55,
        borderWidth: 1,
        borderColor: '#a3a3a3'
    },
    searchIcon: {
        position: 'absolute',
        left: 15,
    },
    inputSearch: {
        height: 40,
        flex: 1,
        marginLeft: 40,
        color: '#000',
        fontSize: 17
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -140,
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    modal: {
        backgroundColor: '#FFFFFF',
        padding: 10,
        borderRadius: 10,
        width: '60%',
        alignItems: 'center',
        elevation: 5
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#000000'
    },
    modalOption: {
        fontSize: 16,
        marginVertical: 10,
        color: '#000000'
    }
});
