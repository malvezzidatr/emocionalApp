import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Text, Modal, Alert} from 'react-native';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 16
    },
    logoutButton: {
        width: 340,
        height: 52,
        backgroundColor: '#fff',
        borderWidth: 2,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 16,
        color: '#000',
        textTransform: 'uppercase',
        fontWeight: 'bold'
    },


    centeredView: {
        flex: 1,
        justifyContent: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        color: '#969696',
        fontSize: 20
    },
    logoutContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 48
    },
    logoutText: {
        textTransform: 'uppercase',
        color: '#000',
        fontWeight: 'bold',
        marginLeft: 36
    },
    modalTitle: {
        fontSize: 24,
        color: '#000',
        fontWeight: 'bold',
        marginBottom: 6
    }
    
});

const LogoutButton = ({ textButton, onPress }) => {

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.container}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View>
                            <Text style={styles.modalTitle}>Atenção</Text>
                            <Text style={styles.modalText}>Deseja mesmo sair?</Text>
                        </View>
                        <View style={styles.logoutContainer}>
                            <Text 
                                style={styles.logoutText}
                                onPress={() => setModalVisible(!modalVisible)}
                            >Cancelar</Text>
                            <Text 
                                style={styles.logoutText}
                                onPress={onPress}
                            >Sim</Text>
                        </View>
                        </View>
                </View>
            </Modal>
            <TouchableOpacity 
                style={styles.logoutButton}
                onPress={() => setModalVisible(true)}
            >
                <Text style={styles.text}>{textButton}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default LogoutButton;