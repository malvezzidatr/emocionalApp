import React, { useState } from 'react';
import { StyleSheet, View, Image, StatusBar } from 'react-native';
import LoginImage from '../assets/img/loginImage.png';
import Button from '../components/Login/Button';
import Input from '../components/Login/Input';


const styles = StyleSheet.create({
    globalContainer: {
        backgroundColor: '#304FFE',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputContainer: {
        marginTop: 58,
        marginBottom: 68,
    }
})

export default function Login({ navigation }) {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState(null);

	return (
        <View style={styles.globalContainer }>
            <StatusBar 
                backgroundColor="#fff"
                barStyle="dark-content"
            />
            <Image source={LoginImage} /> 
            <View style={styles.inputContainer}>
                <Input 
                    placeholder='e-mail'
                    field={email}
                    setField={setEmail}
                />
                <Input
                    placeholder='password'
                    field={password}
                    setField={setPassword}
                />
            </View>
            <Button 
                title='ENTRAR'
                navigate={() => navigation.navigate('Home')}
            />
			
        </View>
    );
  }