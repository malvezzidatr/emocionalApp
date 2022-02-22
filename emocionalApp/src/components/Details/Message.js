import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: 380,
        height: 100,
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    message: {
        fontSize: 13,
        paddingHorizontal: 37,
        paddingVertical: 13,
        lineHeight: 20
    }
})

const Message = ({ message }) => {
    return (
        <View style={styles.container} >
            <Text style={styles.message}>{message}</Text>
        </View>
    )
}

export default Message;