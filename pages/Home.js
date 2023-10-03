//import liraries
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';

// create a component
const Home = () => {
    return (
        <View style={styles.container}>
            <Header/>
            <Text>Home Page</Text>
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
export default Home;
