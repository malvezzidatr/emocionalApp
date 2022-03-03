import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native';



const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginRight: 16,
        width: 50,
    },
    image: {
        height: 44,
        width: 44
    },
    text: {
        fontSize: 10,
        marginTop: 4
    }
})

const Status = ({ image, status }) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Image
                style={styles.image}
                source={image}
            />
            <Text style={styles.text}>{status}</Text>
        </TouchableOpacity>
    )
}

export default Status;