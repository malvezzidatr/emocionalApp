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
import Message from '../components/AddStatus/Message';
import SaveButton from '../components/AddStatus/SaveButton';
import ActionButton from '../components/AddStatus/ActionButton';

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
    globalContainer: {
        alignItems: 'center'
    },
    container: {
        width: 340,
        height: 360,
        borderColor: "#000",
        borderWidth: 1,
        borderRadius: 20,
        
    },
    actionContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        marginTop: 30
    },
    closeButtonContainer: {
        marginTop: 32,
        marginRight: 300
    }
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
    const [hotel, setHotel] = useState(false);
    const [favorite, setFavorite] = useState(false);
    const [movie, setMovie] = useState(false);
    const [storefront, setStorefront] = useState(false);
    const [restaurant, setRestaurant] = useState(false);
    const [celebration, setCelebration] = useState(false);
    const [pool, setPool] = useState(false);
    const [microwave, setMicrowave] = useState(false);
    const [casino, setCasino] = useState(false);
    const [actionsFiltered, setActionsFiltered] = useState([]);
    const today = new Date();
    const month = months[today.getMonth()];
    const day = today.getDate();
    const hour = today.getHours();
    const minutes = today.getMinutes();
    const allActions = [pool, storefront, hotel, celebration, movie, restaurant, casino, favorite, microwave];

    const actions = () => {
        let actionsArray = allActions.map((action, index) => {
            if (action) return index + 1;
        })
        
        let actionsArrayFiltered = actionsArray.filter(i => {
            return i;
        })
        setActionsFiltered(actionsArrayFiltered);
    }

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
                "activity_ids": actionsFiltered,
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
        setMessage('');
    }

    return (
        <SafeAreaView style={styles.globalContainer}>
            <StatusBar hidden />
            <View style={styles.closeButtonContainer}>
                <CloseButton onPress={() => navigation.navigate('Home')} />
            </View>
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

            <View style={styles.globalContainer}>
                <View style={styles.container}>
                    <View style={styles.actionContainer}>
                        <ActionButton
                            name={'hotel'}
                            size={32}
                            color={'#000'}
                            text={'Descanso'}
                            onPress={() => {
                                setHotel(!hotel)
                                actions()

                            }}
                            clicked={hotel}
                        />
                        <ActionButton
                            name={'favorite'}
                            size={32} color={'#000'}
                            text={'Encontro'}
                            onPress={() => {
                                actions();
                                setFavorite(!favorite);
                            }}
                            clicked={favorite}
                        />
                        <ActionButton
                            name={'movie'}
                            size={32}
                            color={'#000'}
                            text={'filmes e series'}
                            onPress={() => {
                                setMovie(!movie);
                                actions();
                            }}
                            clicked={movie}
                        />
                        <ActionButton 
                            name={'storefront'}
                            size={32}
                            color={'#000'}
                            text={'compras'}
                            onPress={() => {
                                setStorefront(!storefront);
                                actions();
                            }}
                            clicked={storefront}
                        />
                        <ActionButton
                            name={'restaurant'}
                            size={32}
                            color={'#000'}
                            text={'Boa Refeição'}
                            onPress={() => {
                                setRestaurant(!restaurant)
                                actions();
                            }}
                            clicked={restaurant}
                        />
                        <ActionButton
                            name={'celebration'}
                            size={32}
                            color={'#000'}
                            text={'Festa'}
                            onPress={() => {
                                setCelebration(!celebration);
                                actions();
                            }}
                            clicked={celebration}
                        />
                        <ActionButton
                            name={'pool'}
                            size={32}
                            color={'#000'}
                            text={'Esporte'}
                            onPress={() => {
                                setPool(!pool);
                                actions();
                            }}
                            clicked={pool}
                        />
                        <ActionButton 
                            name={'microwave'}
                            size={32}
                            color={'#000'}
                            text={'Cozinhar'}
                            onPress={() => {
                                setMicrowave(!microwave);
                                actions();
                            }}
                            clicked={microwave}
                        />
                        <ActionButton
                            name={'casino'}
                            size={32}
                            color={'#000'}
                            text={'Jogos'}
                            onPress={() => {
                                setCasino(!casino);
                                actions();
                            }}
                            clicked={casino}
                        />

                    </View>
                </View>
            </View>
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