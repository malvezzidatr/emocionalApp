import React, { useEffect, useState } from 'react';
import { StyleSheet, FlatList, SafeAreaView, StatusBar, Text, Image } from 'react-native';
import Card from '../components/Home/Card';
import happy from '../assets/img/happy.png';
import sad from '../assets/img/sad.png';
import nervous from '../assets/img/nervous.png';
import sleeping from '../assets/img/sleeping.png';
import confused from '../assets/img/confused.png';
import emptyHome from '../assets/img/emptyHome.png';


const styles = StyleSheet.create({
    globalContainer: {
        flex: 1,
        backgroundColor: '#F1F1F1',
        alignItems: 'center',
    },
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
        marginLeft: 8.5
    },
    message: {
        marginTop: 12.5,
    },
    emptyHome: {
        marginTop: 130,
        alignItems: 'center',
        width: '72%',
    },
    emptyImage: {
        marginBottom: 32
    },
    emptyText: {
        fontSize: 18,
        color: '#ACACAC',
        textAlign: 'center'
    }
})

const checkStatus = (status) => {
    if (status === 'happy') {
        return happy;
    }

    if (status === 'sad') {
        return sad;
    }

    if (status === 'sleeping') {
        return sleeping;
    }

    if (status === 'confused') {
        return confused;
    }

    if (status === 'nervous') {
        return nervous;
    }
}

export default function Home({ navigation }) {
    const [status, setStatus] = useState()
    const uri = 'https://shrouded-shelf-01513.herokuapp.com/daily_entries?username=caiomalvezzi';
    const getStatus = () => {
        fetch(uri, {
            method: "GET",
        })
            .then(response => response.json())
            .then(json => {
                setStatus(json);
            })
            .catch(error => console.error(error))

    }
    useEffect(() => {
        getStatus()
    }, [])

    return(
        <SafeAreaView 
            style={styles.globalContainer}
        >
            <StatusBar 
                backgroundColor="#fff"
                barStyle="dark-content"
            />
            {status
                ?  
                    <FlatList
                        data={status}
                        renderItem={({ item }) => (
                            <Card
                                onPress={() => {
                                    navigation.navigate('Details', {
                                        data: item.created_at,
                                        image: checkStatus(item.mood),
                                        status: item.mood,
                                        message: item.short_description
                                    })
                                    
                                }}
                                status = { item.mood }
                                date = { item.created_at }
                                message = { item.short_description }
                                image = { checkStatus(item.mood) }
                                id = { item.id }
                                activities = {item.activities}
                            />
                        )}
                        keyExtractor={item => item.id}
                    />
                :   <SafeAreaView style={styles.emptyHome}>
                        <Image
                            source={emptyHome}
                            style={styles.emptyImage}
                        />
                        <Text style={styles.emptyText}>Você ainda não tem nenhum registro diário. Para Começar, toque no ícone de adicionar na tela</Text>
                    </SafeAreaView>
            }
        </SafeAreaView>
    )
}