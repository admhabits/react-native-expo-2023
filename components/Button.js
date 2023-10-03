//import liraries
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

// create a component
const CommonButton = ({ text, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={styles.btnSignIn}>{text}</Text>
        </TouchableOpacity >
    );
};

// define your styles
const styles = StyleSheet.create({
    btnSignIn: {
        backgroundColor: 'blue',
        color: 'white',
        padding: 8,
        margin: 5,
        borderRadius: 8,
    },
});

//make this component available to the app
export default CommonButton;
