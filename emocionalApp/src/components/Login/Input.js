import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const styles = StyleSheet.create({
    input: {
        width: 350,
        height: 46,
        backgroundColor: '#F7F7F7',
        marginBottom: 21,
        borderRadius: 10,
		
    },
	shadowProp: {
		shadowColor: "#000",
		shadowOffset: {
			width: -4,
			height: 4,
		},
		shadowOpacity: 0.30,
		shadowRadius: 4.65,

		elevation: 8,
	},
})

const Input = ({ placeholder, field, setField }) => {
    return (
            <TextInput 
                style={[styles.input, styles.shadowProp]} 
                placeholder={placeholder}
                value={field}
                onChangeText={setField}
            />
    )
}

export default Input;
