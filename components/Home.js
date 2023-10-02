//import liraries
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const Home = () => {
    return (
        <View style={styles.container}>
            <Text>Home Component</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
    },
});

//make this component available to the app
export default Home;
