import React, { useEffect, useState } from 'react';
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
        marginLeft: 2,
        textTransform: 'uppercase'
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
    },
    
});




const AddStatus = ({ navigation }) => {
    const statusArray = [statusHappy, statusConfused, statusSad, statusSleeping, statusBad];
    const username = 'caiomalvezzi';
    const months = ['janeiro', 'fevereiro', 'março', 'abril', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
    const [message, setMessage] = useState();
    const [statusHappy, setStatusHappy] = useState(false);
    const [statusConfused, setStatusConfused] = useState(false);
    const [statusSad, setStatusSad] = useState(false);
    const [statusSleeping, setStatusSleeping] = useState(false);
    const [statusBad, setStatusBad] = useState(false);
    const [index, setIndex] = useState();
    const today = new Date();
    const month = months[today.getMonth()];
    const day = today.getDate();
    const hour = today.getHours();
    const minutes = today.getMinutes();

    const statusClicked = (status) => {
        const moods = ['bem', 'confuso', 'triste', 'sono', 'mal'];
        moods.find((mood, index) => {
            if (mood === status) {
                statusArray[index] = true;
                setIndex(index);
            } else {
                statusArray[index] = false;
            }
        })
        updateStatus();
    }

    const updateStatus = () => {
        setStatusHappy(statusArray[0]);
        setStatusConfused(statusArray[1]);
        setStatusSad(statusArray[2]);
        setStatusSleeping(statusArray[3]);
        setStatusBad(statusArray[4])
    }

    const sendStatus = () => {
        const uri = 'https://shrouded-shelf-01513.herokuapp.com/daily_entries';
        const moods = ['happy', 'confused', 'sad', 'sleeping', 'bad'];
        const mood = moods[index]
        const body = {
            "daily_entry": {
                "mood": mood,
                "activity_ids": [1, 2],
                'description': message,
                'username': username
            }
        }
        fetch(uri, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
    }

    return (
        <SafeAreaView style={styles.globalContainer}>
            <StatusBar hidden />
            <CloseButton onPress={() => navigation.navigate('Home')} />
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>Como você está?</Text>
                
                <View style={styles.timeContainer}>
                    <View style={styles.iconContainer}>
                        <Icon name='event' size={14} color={'#969696'} />
                        <Text style={styles.timeText}>HOJE, {day < 10 ? '0' + day : day} DE {month}</Text>
                    </View>
                    <View style={styles.iconContainer}>
                        <Icon name='schedule' size={14} color={'#969696'} />
                        <Text style={styles.timeText}>{hour < 10 ? '0' + hour : hour}:{minutes < 10 ? '0' + minutes : minutes}</Text>
                    </View>
                </View>

            </View>
            <View style={styles.statusContainer}>
                <Status
                    image={happy}
                    status={'BEM'}
                    onPress={() => statusClicked('bem')}
                    clicked={statusHappy}
                />
                <Status
                    image={confused}
                    status={'CONFUSO'}
                    onPress={() => statusClicked('confuso')}
                    clicked={statusConfused}
                />
                <Status
                    image={sad}
                    status={'TRISTE'}
                    onPress={() => statusClicked('triste')}
                    clicked={statusSad}
                />
                <Status
                    image={sleeping}
                    status={'SONO'}
                    onPress={() => statusClicked('sono')}
                    clicked={statusSleeping}
                />
                <Status
                    image={nervous}
                    status={'MAL'}
                    onPress={() => statusClicked('mal')}
                    clicked={statusBad}
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
                <SaveButton textButton={'Salvar'} onPress={() => sendStatus()}/>
            </View>
        </SafeAreaView>
    )
}

export default AddStatus;