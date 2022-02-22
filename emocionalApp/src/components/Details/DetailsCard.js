import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const styles = StyleSheet.create({
    container: {
        width: 380,
        height: 158,
        backgroundColor: '#fff',
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    iconContainer: {
        alignItems: 'center',
    },
    icon: {
        width: 45,
        height: 45,
        borderRadius: 50,
        color: '#fff',
        backgroundColor: 'blue',
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    text: {
        fontSize: 12,
        fontWeight: 'bold',
        marginTop: 9
    }
})

const DetailsCard = ({  }) => {
    return(
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <Icon style={styles.icon} name="celebration" size={32} color={'#000'} />
                <Text style={styles.text}>festa</Text>
            </View>
            <View style={styles.iconContainer}>
                <Icon style={styles.icon} name='pool' size={32} color={'#000'} />
                <Text style={styles.text}>esporte</Text>
            </View>
            <View style={styles.iconContainer}>
                <Icon style={styles.icon} name='microwave' size={32} color={'#000'} />
                <Text style={styles.text}>cozinhar</Text>
            </View>
        </View>
    )
}

export default DetailsCard;