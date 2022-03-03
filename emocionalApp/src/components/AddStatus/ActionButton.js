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
    }
});

const ActionButton = ({ name, size, color, text}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button}>
                <Icon name={name} size={size} color={color} />

            </TouchableOpacity>
            <Text style={styles.text}>{text}</Text>
        </View>
    )
}

export default ActionButton;