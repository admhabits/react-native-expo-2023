//import liraries
import Layout from '~/components/Layout/General';
import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';

// create a component
const PermohonanInformasi = () => {
    return (
        <Layout
        statusBar={toscaColor}
        navigation={navigation}
        titlePage={"Permohonan Informasi"}
      >
        <ScrollView
          style={{ padding: 10, marginTop: 20 }}
          showsVerticalScrollIndicator={false}
        >
         Permohonan Informasi
        </ScrollView>
      </Layout>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default PermohonanInformasi;