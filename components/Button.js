//import liraries
import React from 'react';
import IconFeather from 'react-native-vector-icons/Feather';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

// create a component
const CommonButton = ({ text, onPress, backgroundColor = 'blue' }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={{ ...styles.btnSignIn, backgroundColor: backgroundColor }}>{text}</Text>
        </TouchableOpacity >
    );
};

export const ButtonIcon = ({ name, onPress, color, size = 25 }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.btnIcon}>
            <Text style={{ color, marginLeft: 6 }}>Login Account</Text>
            <IconFeather name={name} size={size} color={color} />
        </TouchableOpacity >
    );
};


// define your styles
const styles = StyleSheet.create({
    btnSignIn: {
        color: 'white',
        padding: 8,
        margin: 5,
        borderRadius: 8,
    },
    btnIcon: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'blue',
        padding: 8,
        margin: 8,
        borderRadius: 8
    }
});

//make this component available to the app
export default CommonButton;
