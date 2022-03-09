import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity ,Text, Image } from 'react-native';
import ImageCloseButton from '../components/changeImage/ImageCloseButton';

import imageProfile1 from '../assets/img/imageProfile1.png';
import imageProfile2 from '../assets/img/imageProfile2.png';
import imageProfile3 from '../assets/img/imageProfile3.png';
import imageProfile4 from '../assets/img/imageProfile4.png';
import imageProfile5 from '../assets/img/imageProfile5.png';
import imageProfile6 from '../assets/img/imageProfile6.png';
import ConfirmButton from '../components/changeImage/ConfirmButton';

const styles = StyleSheet.create({
    globalContainer: {
        backgroundColor: '#fff',
        height: '100%'
    },
    container: {
        alignItems: 'center',
        marginTop: 80
    },
    text: {
        fontSize: 24,
        color: '#000',
        fontWeight: 'bold'
    },
    imageContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: 40
    },
    image: {
        height: 90,
        width: 90,
        marginTop: 20
    },
    confirmContainer: {
        marginTop: 120
    },
    imageClicked: {
        borderWidth: 5,
        borderColor: '#304FFE',
        borderRadius: 80
    }
});


const ChangeImage = ({ route, navigation }) => {
    console.log(route)
    const imageArray = [Image1, Image2, Image3, Image4, Image5, Image6];
    const images = [imageProfile1, imageProfile2, imageProfile3, imageProfile4, imageProfile5, imageProfile6];
    const [Image1, setImage1] = useState(false);
    const [Image2, setImage2] = useState(false);
    const [Image3, setImage3] = useState(false);
    const [Image4, setImage4] = useState(false);
    const [Image5, setImage5] = useState(false);
    const [Image6, setImage6] = useState(false);
    const [index, setIndex] = useState(0);

    const statusClicked = (status) => {
        const moods = ['image1', 'image2', 'image3', 'image4', 'image5', 'image6'];
        moods.find((mood, index) => {
            if (mood === status) {
                imageArray[index] = true;
                setIndex(index)
            } else {
                imageArray[index] = false;
            }
        })
        updateStatus();
    }

    const updateStatus = () => {
        setImage1(imageArray[0]);
        setImage2(imageArray[1]);
        setImage3(imageArray[2]);
        setImage4(imageArray[3]);
        setImage5(imageArray[4]);
        setImage6(imageArray[5]);
    }

    return (
        <View style={styles.globalContainer}>
            <ImageCloseButton onPress={() => navigation.navigate('Profile')} />
            <View style={styles.container}>
                <Text style={styles.text}>Selecione a foto de perfil</Text>
                <View style={styles.imageContainer}>
                    <TouchableOpacity onPress={() => statusClicked('image1')}>
                        <Image
                        style={[styles.image, Image1 ? styles.imageClicked : null]}
                        source={imageProfile1} 
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => statusClicked('image2')}>
                        <Image
                        style={[styles.image, Image2 ? styles.imageClicked : null]}
                        source={imageProfile2}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => statusClicked('image3')}>
                        <Image
                        style={[styles.image, Image3 ? styles.imageClicked : null]}
                        source={imageProfile3}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => statusClicked('image4')}>
                        <Image
                        style={[styles.image, Image4 ? styles.imageClicked : null]}
                        source={imageProfile4}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => statusClicked('image5')}>
                        <Image
                        style={[styles.image, Image5 ? styles.imageClicked : null]}
                        source={imageProfile5}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => statusClicked('image6')}>
                        <Image
                        style={[styles.image, Image6 ? styles.imageClicked : null]}
                        source={imageProfile6}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.confirmContainer}>
                    <ConfirmButton textButton={'confirmar'} onPress={() => {
                        navigation.navigate('Profile', {
                            image: images[index],
                            text: 'teste'
                        })
                    } 
                    }
                    />
                </View>
            </View>
        </View>
    )
};

export default ChangeImage;