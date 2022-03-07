import React, { useEffect } from 'react';
import { StyleSheet, View, SafeAreaView, StatusBar, Text, Image } from 'react-native';
import ImageCloseButton from '../components/changeImage/ImageCloseButton';
import Images from '../components/changeImage/Images';

const styles = StyleSheet.create({

});


const ChangeImage = ({ navigation }) => {
    return (
        <View>
            <ImageCloseButton onPress={() => navigation.navigate('Profile')} />
            
        </View>
    )
};

export default ChangeImage;