import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text, Touchable} from 'react-native';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    saveButton: {
        width: 340,
        height: 52,
        backgroundColor: '#304FFE',
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 16,
        color: '#fff',
        textTransform: 'uppercase',
        fontWeight: 'bold'
    }
});

const SaveButton = ({ textButton }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.saveButton}>
                <Text style={styles.text}>{textButton}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default SaveButton;