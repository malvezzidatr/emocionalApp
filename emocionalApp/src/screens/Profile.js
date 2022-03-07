import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import EditButton from '../components/Profile/EditButton';
import LogoutButton from '../components/Profile/LogoutButton';
import ChangeImageButton from '../components/Profile/ChangeImageButton';
import Inputs from '../components/Profile/Inputs';

import imageProfile1 from '../assets/img/imageProfile1.png';

const styles = StyleSheet.create({
    profileContainer: {
        alignItems: 'center',
        marginTop: 25,
        marginBottom: 40
    },
    textName: {
        fontSize: 36,
        color: '#000',
        marginTop: 18,
        marginBottom: 18,
        textAlign: 'center'
    },
    buttonsContainer: {
        marginTop: 40
    },
    container: {
        alignItems: 'center'
    },
    inputsContainer: {
        alignItems: 'center'
    },
    changeImageContainer: {
        marginTop: 18
    }

})

const Profile = ({ navigation }) => {
    const [isEditing, setisEditing] = useState(true);
    const [name, setName] = useState('Fulano');
    const [email, setEmail] = useState();
    const [date, setDate] = useState();

    return (
        <View style={styles.profileContainer}>
            <Image source={imageProfile1} />
            {isEditing ? 
                <View>
                    <View>
                        <Text style={styles.textName}>Olá, {name}</Text>
                    </View>
                    <View style={styles.buttonsContainer}>
                        <EditButton
                            textButton={'editar perfil '}
                            onPress={() => setisEditing(!isEditing)}
                        />
                        <LogoutButton 
                            textButton={'sair'}
                            onPress={() => navigation.navigate('Login')}
                        />
                    </View>
                </View>
            
            :
                <View style={styles.container}>
                    <View style={styles.changeImageContainer}>
                        <ChangeImageButton title={'Alterar foto'} onPress={() => navigation.navigate('ChangeImage')}/>
                    </View>
                    <View style={styles.inputsContainer}>
                        <Inputs label={'nome'} field={name} setField={setName}/>
                        <Inputs label={'e-mail'} field={email} setField={setEmail}/>
                        <Inputs label={'Genero'} />
                        <Inputs label={'Data de Nascimento'} field={date} setField={setDate}/>
                    </View>
                    <EditButton textButton={'salvar'} onPress={() => setisEditing(!isEditing)}/>
                </View>
            }

        </View>
    )
}

export default Profile;