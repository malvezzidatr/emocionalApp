import React from 'react';
import { StyleSheet, Image, Text, View, TouchableOpacity  } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const styles = StyleSheet.create({
    listContainer: {
        width: 380,
        height: 158,
        justifyContent: 'center',
        backgroundColor: '#fff',
        marginTop: 25,
        borderWidth: 1,
        borderColor: '#fff',
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
    marginLeft: {
        marginLeft: 28,
    },
    statusContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    internalContainer: {
        flexDirection: 'row',
    },
    image: {
        marginRight: 16,
        marginBottom: 15
    },
    iconContainer: {
        flexDirection: 'row',
    },
    icons: {
        flexDirection: 'row',
        marginRight: 8.5,
    },
    iconsText: {
        fontWeight: 'bold',
        marginLeft: 8.5,
    },
    message: {
        marginTop: 122.5,
    },
    statusText: {
        fontSize: 24,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: 0.5,
    },
    textGreen: {
        color: '#4BE263'
    },
    textRed: {
        color: '#E24B4B'
    },
    textBlue: {
        color: '#4B75E2'
    },
    date: {
        fontSize: 16,
        color: '#ACACAC',
        textTransform: 'uppercase'
    },
    hour: {
        fontSize: 14,
        marginLeft: 11,
        color: '#ACACAC',
        paddingBottom: 3
    },
    message: {
        fontSize: 13,
        color: '#ACACAC',
        marginTop: 5
    }
})

const Card = ({ status, day, hour, message, image, onPress }) => {
    return(
        <TouchableOpacity  
            style={styles.listContainer}
            onPress={onPress}
        >
            <View style={styles.internalContainer}>
                <Image 
                    source={image}
                    style={[styles.image, styles.marginLeft]}
                />
                <View>
                    <Text style={styles.date}>hoje, 23 de janeiro</Text>
                    <View style={styles.statusContainer}>
                        <Text style={[styles.statusText, status === 'bem' ? styles.textRed : status === 'triste' ? styles.textGreen : styles.textBlue ]}>{status}</Text>
                        <Text style={styles.hour}>{hour}</Text>
                    </View>
                </View>
            </View>
            <View style={[styles.iconContainer, styles.marginLeft]}>
                <View style={styles.icons}>
                    <Icon name="celebration" size={20} color={'#000'} />
                    <Text style={styles.iconsText}>festa</Text>
                    <Text style={styles.iconsText}> • </Text>
                </View>
                <View style={styles.icons}>
                    <Icon name='pool' size={20} color={'#000'} />
                    <Text style={styles.iconsText}>esporte</Text>
                    <Text style={styles.iconsText}> • </Text>
                </View>
                <View style={styles.icons}>
                    <Icon name='microwave' size={20} color={'#000'} />
                    <Text style={styles.iconsText}>cozinhar</Text>
                </View>
            </View>
            <Text style={[styles.message, styles.marginLeft]}>{message}</Text>
        </TouchableOpacity >
    )
}

export default Card;