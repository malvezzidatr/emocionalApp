import React from 'react';
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
    return (
        <View style={styles.globalContainer}>
            <View style={styles.container}>
                <View style={styles.actionContainer}>
                    <ActionButton name={'hotel'} size={32} color={'#000'} text={'Descanso'} />
                    <ActionButton name={'favorite'} size={32} color={'#000'} text={'Encontro'} />
                    <ActionButton name={'movie'} size={32} color={'#000'} text={'filmes e series'} />

                    <ActionButton name={'storefront'} size={32} color={'#000'} text={'compras'} />
                    <ActionButton name={'restaurant'} size={32} color={'#000'} text={'Boa Refeição'} />
                    <ActionButton name={'celebration'} size={32} color={'#000'} text={'Festa'} />

                    <ActionButton name={'pool'} size={32} color={'#000'} text={'Esporte'} />
                    <ActionButton name={'microwave'} size={32} color={'#000'} text={'Cozinhar'} />
                    <ActionButton name={'casino'} size={32} color={'#000'} text={'Jogos'} />

                </View>
            </View>

        </View>
    )
}

export default Actions;