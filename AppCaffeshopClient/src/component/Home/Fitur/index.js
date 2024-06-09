import React, { useState } from 'react';
import { 
    Text, 
    View,
    ScrollView, 
    StyleSheet, 
    TouchableOpacity 
} from 'react-native';

const FiturUtama = () => {
    const [activeFeature, setActiveFeature] = useState('All');

    const features = ["All", "Coffee", "Non-Coffee", "Food & Snack"];

    return (
        <ScrollView style={styles.contentFitur} horizontal={true} showsHorizontalScrollIndicator={false}>
            {features.map((feature, index) => (
                <TouchableOpacity
                    key={index}
                    style={[styles.fitur, activeFeature === feature && styles.activeFitur]}
                    onPress={() => setActiveFeature(feature)}
                >
                <Text style={[styles.fiturText, activeFeature === feature && styles.activeFiturText]}>{feature}</Text>
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
}

export default FiturUtama;

const styles = StyleSheet.create({
    contentFitur: {
        width: '100%',
        height: 50,
        marginTop: 15,
        flexDirection: 'row',
    },
    fitur: {
        paddingHorizontal: 20,
        marginRight: 15,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#FFA439',
        justifyContent: 'center',
        alignItems: 'center',
    },
    activeFitur: {
        backgroundColor: 'black',
    },
    fiturText: {
        color: 'black',
    },
    activeFiturText: {
        color: 'white',
        fontWeight: 'bold'
    },
});
