import React, { useState } from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from 'react-native';
import CloseButton from '../components/AddStatus/CloseButton';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Status from '../components/AddStatus/Status';

import happy from '../assets/img/happy.png';
import sad from '../assets/img/sad.png';
import nervous from '../assets/img/nervous.png';
import confused from '../assets/img/confused.png';
import sleeping from '../assets/img/sleeping.png';
import Actions from '../components/AddStatus/Actions';
import Message from '../components/AddStatus/Message';
import SaveButton from '../components/AddStatus/SaveButton';

const styles = StyleSheet.create({
    globalContainer: {
        backgroundColor: '#fff',
        width: '100%',
        height: '100%', 
    },
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
        justifyContent: 'center',
        marginLeft: 22,
        marginBottom: 20
    },
    titleContainer: {
        alignItems: 'center',
        marginBottom: 12
    },
    titleText: {
        fontSize: 30,
        color: '#000',
        fontWeight: 'bold',
    },
    messageContainer: {
        marginTop: 20
    },
    saveButtonContainer: {
        marginTop: 20
    }

})

const AddStatus = ({ navigation }) => {
    const [message, setMessage] = useState();

    return (
        <SafeAreaView style={styles.globalContainer}>
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
            <View style={styles.messageContainer}>
                <Message 
                    placeholder={'Escreva o que aconteceu hoje...'}
                    field={message}
                    setField={setMessage}
                />
            </View>
            <View style={styles.saveButtonContainer}>
                <SaveButton textButton={'Salvar'} />

            </View>
        </SafeAreaView>
    )
}

export default AddStatus;