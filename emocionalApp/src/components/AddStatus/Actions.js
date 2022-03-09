import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
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
    const allActions = [hotel, favorite, movie, storefront, restaurant, celebration, pool, microwave, casino];
    const [actionsFiltered, setActionsFiltered] = useState([])

    const actions = () => {
        let actionsArray = allActions.map((action, index) => {
            if (action) return index;
        })
        let actionsArrayFiltered = actionsArray.filter(i => {
            return i
        })
        setActionsFiltered(actionsArrayFiltered);
    }

    return (
        <View style={styles.globalContainer}>
            <View style={styles.container}>
                <View style={styles.actionContainer}>
                    <ActionButton 
                        name={'hotel'}
                        size={32}
                        color={'#000'}
                        text={'Descanso'}
                        onPress={() => {
                            setHotel(!hotel);
                            actions();
                        }}
                        clicked={hotel}
                    />
                    <ActionButton
                        name={'favorite'}
                        size={32} color={'#000'}
                        text={'Encontro'}
                        onPress={() => {
                            setFavorite(!favorite);
                            actions();
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
                            setstorefront(!storefront);
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
    )
}

export default Actions;