import React from 'react';
import { ScrollView, View } from 'react-native';

const BaseContainer = ({ children }) => {
    return (
        <ScrollView
            style={{
                marginTop: 50,
                backgroundColor: 'white',
                height: '100%',
            }}>
            {children}
            <View style={{ height: 100 }} />
        </ScrollView>
    );
};

export default BaseContainer;
