import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const styles = StyleSheet.create({
    iconsText: {
        fontWeight: 'bold',
        marginLeft: 8.5,
    },
    icons: {
        flexDirection: 'row',
        marginRight: 8.5,
    },

});

const Icones = ({ name, size, color }) => {

    return (
        <View style={styles.icons}>
            <Icon name={name} size={size} color={color} />
            <Text style={styles.iconsText}>festa</Text>
            <Text style={styles.iconsText}> • </Text>
        </View>
    )
};

export default Icones;