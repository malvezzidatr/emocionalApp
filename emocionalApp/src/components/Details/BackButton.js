import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


const styles = StyleSheet.create({
    backButton: {
        width: 36,
        height: 36,
        backgroundColor: '#304FFE1A',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    backButtonText: {
        fontSize: 22,
        color: '#304FFEB2'
    }
})

const BackButton = ({ onPress }) => {
    return (
        <TouchableOpacity
            style={styles.backButton}
            onPress={onPress}    
        >
            <Text style={styles.backButtonText}>&lt;</Text>
        </TouchableOpacity>
    )
}

export default BackButton;