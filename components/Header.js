//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

// create a component
const Header = () => {
    return (
        <View style={styles.container}>
            <Text>Header Component</Text>
            <StatusBar style="auto"/>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        fontFamily: 'monospace',
        backgroundColor: '#FFF',
    },
});

//make this component available to the app
export default Header;
