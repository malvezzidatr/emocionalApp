import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ActionButton from './ActionButton';


const styles = StyleSheet.create({
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
    }
})

const Actions = () => {
    const [hotel, setHotel] = useState(false);
    const [favorite, setFavorite] = useState(false);
    const [movie, setMovie] = useState(false);
    const [storefront, setstorefront] = useState(false);
    const [restaurant, setRestaurant] = useState(false);
    const [celebration, setCelebration] = useState(false);
    const [pool, setPool] = useState(false);
    const [microwave, setMicrowave] = useState(false);
    const [casino, setCasino] = useState(false);

    return (
        <View style={styles.globalContainer}>
            <View style={styles.container}>
                <View style={styles.actionContainer}>
                    <ActionButton 
                        name={'hotel'}
                        size={32}
                        color={'#000'}
                        text={'Descanso'}
                        onPress={() => setHotel(!hotel)}
                        clicked={hotel}
                    />
                    <ActionButton
                        name={'favorite'}
                        size={32} color={'#000'}
                        text={'Encontro'}
                        onPress={() => setFavorite(!favorite)}
                        clicked={favorite}
                    />
                    <ActionButton
                        name={'movie'}
                        size={32}
                        color={'#000'}
                        text={'filmes e series'}
                        onPress={() => setMovie(!movie)}
                        clicked={movie}
                    />
                    <ActionButton 
                        name={'storefront'}
                        size={32}
                        color={'#000'}
                        text={'compras'}
                        onPress={() => setstorefront(!storefront)}
                        clicked={storefront}
                    />
                    <ActionButton
                        name={'restaurant'}
                        size={32}
                        color={'#000'}
                        text={'Boa Refeição'}
                        onPress={() => setRestaurant(!restaurant)}
                        clicked={restaurant}
                    />
                    <ActionButton
                        name={'celebration'}
                        size={32}
                        color={'#000'}
                        text={'Festa'}
                        onPress={() => setCelebration(!celebration)}
                        clicked={celebration}
                    />
                    <ActionButton
                        name={'pool'}
                        size={32}
                        color={'#000'}
                        text={'Esporte'}
                        onPress={() => setPool(!pool)}
                        clicked={pool}
                    />
                    <ActionButton 
                        name={'microwave'}
                        size={32}
                        color={'#000'}
                        text={'Cozinhar'}
                        onPress={() => setMicrowave(!microwave)} 
                        clicked={microwave}
                    />
                    <ActionButton
                        name={'casino'}
                        size={32}
                        color={'#000'}
                        text={'Jogos'}
                        onPress={() => setCasino(!casino)}
                        clicked={casino}
                    />

                </View>
            </View>

        </View>
    )
}

export default Actions;