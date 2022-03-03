import React from 'react';
import { StyleSheet, TextInput, View, Text} from 'react-native';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    input: {
        width: 340,
        height: 90,
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 20,
        textAlignVertical: 'top'
    }
});

const Message = ({ placeholder, field, setField }) => {
    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.input} 
                placeholder={placeholder}
                value={field}
                onChangeText={setField}
            />
        </View>
    )
}

export default Message;