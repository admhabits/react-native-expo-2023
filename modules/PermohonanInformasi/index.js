/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, Image, Touchable} from 'react-native';
import {Header} from 'components';
import {ImagesFlowPermohonan} from '../../configs/Images';
import {TouchableOpacity} from 'react-native-gesture-handler';

const PermohonanInformasi = ({navigation}) => {
  return (
    <View>
      <Header
        onPressBack={() => navigation.navigate('Home')}
        type={'back'}
        namePathBack={' Permohonan Informasi'}
        justifyContentTitle="flex-start"
      />
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          width: '100%',
          alignItems: 'center',

          paddingHorizontal: 10,
        }}>
        <Text style={styles.title}>
          LAYANAN INFORMASI PUBLIK ONLINE PPID PELAKSANA DIREKTORAT JENDERAL
          PERHUBUNGAN LAUT
        </Text>
        <Image
          source={ImagesFlowPermohonan}
          style={{
            width: '100%',
            height: '60%',
            marginRight: 2,
            marginTop: 20,
          }}
        />
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => navigation.navigate('Login')}
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text
            style={{
              width: '100%',
              fontSize: 10,
              marginTop: 10,
            }}>
            Silahkan
            <Text style={{color: '#0089EC'}}>{' ' + 'Login' + ' '}</Text>
            untuk mengajukan permohonan informasi
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default PermohonanInformasi;
