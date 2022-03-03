import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import DetailsCard from '../components/Details/DetailsCard';
import Message from '../components/Details/Message'
import Icon from 'react-native-vector-icons/MaterialIcons';
import BackButton from '../components/Details/BackButton';

const styles = StyleSheet.create({
    globalContainer: {
        alignItems: 'center',
        
    },
    timeText: {
        color: '#969696',
        fontSize: 16
    },
    timeContainer: {
        marginTop: 8,
        marginBottom: 32.4,
        alignItems: 'center'
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 3
    },
    statusContainer: {
        marginBottom: 21.4,
        alignItems: 'center'
    },
    statusText: {
        textTransform: 'uppercase',
        color: '#E24B4B',
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 10
    },
    textRed: {
        color: '#E24B4B'
    },
    textGreen: {
        color: '#4BE263'
    },
    textBlue: {
        color: '#4B75E2'
    },
    detailsContainer: {
        marginBottom: 21
    },
    backButtonContainer: {
        marginLeft: 33,
        marginTop: 11
    }
})

const Details = ({ route, navigation }) => {
    return (
        <View>
            <View style={styles.backButtonContainer}>
                <BackButton onPress={() => navigation.navigate('Home')} />
            </View>
            <View style={styles.globalContainer}>
                <View style={styles.timeContainer}>
                    <View style={styles.iconContainer}>
                        <Icon name='schedule' size={14} color={'#969696'} />
                        <Text style={styles.timeText}>{route.params.hour}</Text>
                    </View>
                    <View style={styles.iconContainer}>
                        <Icon name='event' size={14} color={'#969696'} />
                        <Text style={styles.timeText}>Hoje, 23 de janeiro</Text>
                    </View>
                </View>
                <View style={styles.statusContainer}>
                    <Image source={route.params.image} />
                    <Text style={[styles.statusText, route.params.status === 'bem' ? styles.textRed : route.params.status === 'triste' ? styles.textGreen : styles.textBlue]}>{route.params.status}</Text>
                </View>
                <View style={styles.detailsContainer}>
                    <DetailsCard />
                </View>
                <Message
                    message={route.params.message}
                />
            </View>
        </View>
    )
}

export default Details;