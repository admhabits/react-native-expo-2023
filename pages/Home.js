//import liraries
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import CommonButton from '../components/Button';

// create a component
const Home = ({ navigation }) => {
    return (
    <>
        {/* <Header /> */}
        <View style={styles.container}>
            <Text>Selamat Datang di React Native Academy</Text>
            <CommonButton text={'Masuk Akun'} onPress={() => navigation.navigate('Login')}/>
        </View>
    </>

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
export default Home;
