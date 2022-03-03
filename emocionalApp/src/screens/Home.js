import React, { useEffect } from 'react';
import { StyleSheet, FlatList, SafeAreaView, StatusBar, Text, Image } from 'react-native';
import Card from '../components/Home/Card';
import happy from '../assets/img/happy.png';
import sad from '../assets/img/sad.png';
import nervous from '../assets/img/nervous.png';
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

const MOCK = [
    {
        "day": "21/07/22",
        "status": "bem",
        "message": "Lorem ipsum Dolor sit",
        "id": '9',
        "hour": '8:45'
    },
    {
        "day": "28/02/22",
        "status": "mal",
        "message": "Lorem ipsum Dolor sit",
        "id": '10',
        "hour": '8:45'
    },
    {
        "day": "21/10/22",
        "status": "triste",
        "message": "Lorem ipsum Dolor sit",
        "id": '1',
        "hour": '8:45'
    },
    {
        "day": "17/01/22",
        "status": "bem",
        "message": "Lorem ipsum Dolor sit",
        "id": '11',
        "hour": '8:45'
    },{
        "day": "17/01/22",
        "status": "bem",
        "message": "Lorem ipsum Dolor sit",
        "id": '12',
        "hour": '8:45'
    },{
        "day": "17/01/22",
        "status": "bem",
        "message": "Lorem ipsum Dolor sit",
        "id": '13',
        "hour": '8:45'
    },
    {
        "day": "22/10/22",
        "status": "triste",
        "message": "Lorem ipsum Dolor sit",
        "id": '2',
        "hour": '8:45'
    },
    {
        "day": "01/07/22",
        "status": "triste",
        "message": "Lorem ipsum Dolor sit",
        "id": '3',
        "hour": '8:45'
    },
    {
        "day": "30/12/22",
        "status": "triste",
        "message": "Lorem ipsum Dolor sit",
        "id": '4',
        "hour": '8:45'
    },
    {
        "day": "17/01/22",
        "status": "bem",
        "message": "Lorem ipsum Dolor sit",
        "id": '5',
        "hour": '8:45'
    },
    {
        "day": "21/07/22",
        "status": "bem",
        "message": "Lorem ipsum Dolor sit",
        "id": '6',
        "hour": '8:45'
    },
    {
        "day": "10/10/22",
        "status": "mal",
        "message": "Lorem ipsum Dolor sit",
        "id": '7',
        "hour": '8:45'
    },
    {
        "day": "28/02/22",
        "status": "mal",
        "message": "Lorem ipsum Dolor sit",
        "id": '8',
        "hour": '8:45'
    }
]


export default function Home({ navigation }) {

    return(
        <SafeAreaView 
            style={styles.globalContainer}
        >
            <StatusBar 
                backgroundColor="#fff"
                barStyle="dark-content"
            />
            {MOCK.length > 0 
                ?  
                    <FlatList
                        data={MOCK}
                        renderItem={({ item }) => (
                            <Card
                                onPress={() => {
                                    navigation.navigate('Details', {
                                        hour: item.hour,
                                        image: item.status === 'bem' ? happy : item.status === 'triste' ? sad : nervous,
                                        status: item.status,
                                        message: item.message
                                    })
                                    
                                }}
                                status= { item.status }
                                day= { item.day }
                                hour= { item.hour }
                                message= { item.message }
                                image= { item.status === 'bem' ? happy : item.status === 'triste' ? sad : nervous }
                                id= { item.id }
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