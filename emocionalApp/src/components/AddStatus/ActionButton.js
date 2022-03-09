import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        height: 110,
        width: 100,
    },
    button: {
        width: 60,
        height: 60,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#000',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 10,
        textTransform: 'lowercase',
        marginTop: 8
    },
    buttonPressed: {
        width: 60,
        height: 60,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#304FFE',

    }
});

const ActionButton = ({ name, size, color, text, onPress, clicked }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={clicked ? styles.buttonPressed : styles.button} onPress={onPress}>
                <Icon name={name} size={size} color={clicked ? '#fff' : color} />

            </TouchableOpacity>
            <Text style={styles.text}>{text}</Text>
        </View>
    )
}

export default ActionButton;