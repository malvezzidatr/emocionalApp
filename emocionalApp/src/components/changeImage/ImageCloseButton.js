import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';


const styles = StyleSheet.create({
    CloseButton: {
        width: 36,
        height: 36,
        backgroundColor: '#304FFE1A',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: 32,
        marginLeft: 28
    },
    CloseButtonText: {
        fontSize: 22,
        color: '#304FFEB2'
    }
})

const ImageCloseButton = ({ onPress }) => {
    return (
        <TouchableOpacity
            style={styles.CloseButton}
            onPress={onPress}    
        >
            <Text style={styles.CloseButtonText}>X</Text>
        </TouchableOpacity>
    )
}

export default ImageCloseButton;