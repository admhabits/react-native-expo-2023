//import liraries
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CommonButton from '../components/Button/Button';

// create a component
const Login = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Login Page</Text>
            <CommonButton text={'Keluar Akun'} onPress={() => navigation.navigate('Home')}/>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
});

//make this component available to the app
export default Login;
