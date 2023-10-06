//import liraries
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { ButtonIcon } from '../components/shared/Button';
import BaseContainer from '../components/BaseContainer';
import Header from '../components/shared/Header';
import { logoHubla, iconSearch } from '../components/configs/Images';


// create a component
const Home = ({ navigation }) => {
    return (
        <>
            <Header />
            <Image source={logoHubla} style={{
                width: 30,
                height: 31,
                marginRight: 5,
            }} />
            <BaseContainer>
                <Text>Selamat Datang di Jamkrindo Training</Text>
                <ButtonIcon name={'arrow-right'} onPress={() => navigation.navigate('Login')} color={'white'} />
            </BaseContainer>
        </>
    );
};

//make this component available to the app
export default Home;
