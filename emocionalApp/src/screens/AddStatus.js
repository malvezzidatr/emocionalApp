import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import CloseButton from '../components/AddStatus/CloseButton';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Status from '../components/AddStatus/Status';

import happy from '../assets/img/happy.png';
import sad from '../assets/img/sad.png';
import nervous from '../assets/img/nervous.png';
import confused from '../assets/img/confused.png';
import sleeping from '../assets/img/sleeping.png';
import Actions from '../components/AddStatus/Actions';

const styles = StyleSheet.create({
    timeContainer: {
        marginTop: 8,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center'

    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 14,
        marginLeft: 14
    },
    timeText: {
        color: '#969696',
        fontSize: 16,
        marginLeft: 2
    },
    statusContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    titleContainer: {
        alignItems: 'center',
        marginTop: 55,
        marginBottom: 60
    },
    titleText: {
        fontSize: 30,
        color: '#000',
        fontWeight: 'bold',
    }

})

const AddStatus = ({ navigation }) => {
    return (
        <View>
            <StatusBar hidden />
            <CloseButton onPress={() => navigation.navigate('Home')} />
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>Como você está?</Text>
                
                <View style={styles.timeContainer}>
                    <View style={styles.iconContainer}>
                        <Icon name='event' size={14} color={'#969696'} />
                        <Text style={styles.timeText}>HOJE, 23 DE JANEIRO</Text>
                    </View>
                    <View style={styles.iconContainer}>
                        <Icon name='schedule' size={14} color={'#969696'} />
                        <Text style={styles.timeText}>08:35</Text>
                    </View>
                </View>

            </View>
            <View style={styles.statusContainer}>
                <Status
                    image={happy}
                    status={'BEM'}
                />
                <Status
                    image={confused}
                    status={'CONFUSO'}
                />
                <Status
                    image={sad}
                    status={'TRISTE'}
                />
                <Status
                    image={sleeping}
                    status={'SONO'}
                />
                <Status
                    image={nervous}
                    status={'MAL'}
                />

            </View>
            <Actions />
        </View>
    )
}

export default AddStatus;