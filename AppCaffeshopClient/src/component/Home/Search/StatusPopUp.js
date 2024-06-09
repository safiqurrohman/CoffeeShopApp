import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const StatusMenuPopup = ({ onClose, onSelect }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.option} onPress={() => onSelect('Option 1')}>
                <Text>Option 1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option} onPress={() => onSelect('Option 2')}>
                <Text>Option 2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                <Text>Close</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 70,
        right: 10,
        backgroundColor: '#FFF',
        borderRadius: 10,
        padding: 10,
        zIndex: 999,
    },
    option: {
        padding: 10,
    },
    closeButton: {
        padding: 10,
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#CCC',
    },
});

export default StatusMenuPopup;
