import React from 'react';
import { StyleSheet, Pressable, Text } from 'react-native';

const styles = StyleSheet.create({
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
	button: {
		width: 133,
		height: 46,
		borderRadius: 10,
		backgroundColor: '#C6CEFF',
		alignItems: 'center',
		justifyContent: 'center',
	},
	textButton: {
		fontSize: 15,
		color: '#304FFE',
		fontWeight: '700',
	}
})

const Button = ({ title, navigate }) => {
    return (
        <Pressable 
            style={[styles.button, styles.shadowProp]}
            onPress={navigate}
        >
            <Text style={styles.textButton}>{title}</Text>
        </Pressable>
    )
}

export default Button;