import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native';



const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginRight: 16,
        width: 50,
    },
    image: {
        height: 36,
        width: 36,
        borderRadius: 50
    },
    text: {
        fontSize: 10,
        marginTop: 4,
        fontWeight: 'bold'
    },
    statusClickedBorder: {
        borderColor: '#304FFE',
        borderWidth: 3
    },
    statusClickedText: {
        color: '#C801FA'
    }
})

const Status = ({ image, status, onPress, clicked }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.container]}>
            <Image
                style={[styles.image, clicked ? styles.statusClickedBorder : null]}
                source={image}
            />
            <Text style={[styles.text, clicked ? styles.statusClickedText : null]}>{status}</Text>
        </TouchableOpacity>
    )
}

export default Status;