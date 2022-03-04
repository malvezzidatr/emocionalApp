import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

const styles = StyleSheet.create({
    label: {
        fontSize: 15,
        textTransform: 'uppercase',
        color: '#000',
        fontWeight: 'bold',
        marginBottom: 8
    },
    input: {
        width: 340,
        height: 45,
        backgroundColor: '#fff',
        marginBottom: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    }
});

const Inputs = ({ label, field, setField }) => {
    return (
        <View>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                style={styles.input}
                value={field}
                onChangeText={setField}    
            />
        </View>
    )
}

export default Inputs;