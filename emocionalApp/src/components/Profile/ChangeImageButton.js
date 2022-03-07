import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

const styles = StyleSheet.create({
	button: {
		width: 180,
		height: 46,
		borderRadius: 10,
		backgroundColor: '#304FFE24',
		alignItems: 'center',
		justifyContent: 'center',
        borderWidth: 2,
        borderColor: '#304FFE24',
        marginBottom: 35
	},
	textButton: {
		fontSize: 15,
		color: '#304FFE',
		fontWeight: '700',
        textTransform: 'uppercase'
	}
})

const ChangeImageButton = ({ title, onPress }) => {
    return (
        <TouchableOpacity 
            style={styles.button}
            onPress={onPress}
        >
            <Text style={styles.textButton}>{title}</Text>
        </TouchableOpacity>
    )
}

export default ChangeImageButton;