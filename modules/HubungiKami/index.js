/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import {Header} from 'components';
import {map} from 'configs/Images';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {ScrollView} from 'react-native-gesture-handler';
// import {RNToasty} from 'react-native-toasty';
import axios from 'axios';
import {BaseUrl} from '../../utils/Constants';
import {useSelector} from 'react-redux';

const HubungiKami = ({navigation}) => {
  const {login} = useSelector(state => state);
  const token = login.data.token;

  const [isParam, setParam] = useState({
    email: '',
    message: '',
    mobile: '',
    name: '',
  });

  const handleSubmit = async () => {
    console.log('cek data input', isParam);
    await axios
      .post(BaseUrl + '/api/public/contactus/save', isParam, {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      })
      .then(res => {
        console.log('berhasil add', res);
        // RNToasty.Success({
        //   title: 'Data berhasil di kirm',
        //   position: 'center',
        // });
        navigation.navigate('Home');
      })
      .catch(err => {
        // RNToasty.Error({
        //   title: 'Data gagal di kirm',
        //   position: 'center',
        // });
        console.log('ini error', err);
      });
  };
  return (
    <View>
      <Header
        onPressBack={() => navigation.navigate('Home')}
        type={'back'}
        namePathBack={'Hubungi Kami'}
        justifyContentTitle="flex-start"
      />
      <KeyboardAvoidingView behavior="height">
        <View
          style={{
            marginTop: 40,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            width: '100%',
            paddingHorizontal: 15,
            alignItems: 'center',
          }}>
          <Image
            source={map}
            style={{
              width: '100%',
              height: 120,
              marginRight: 2,
            }}
          />
          <View
            style={{
              backgroundColor: '#123661',
              width: '100%',
              height: 70,
              marginTop: 20,
              padding: 10,
              display: 'flex',
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Icon name="map-marker-alt" size={20} color="#de5f15" />
              <Text style={{fontSize: 9, color: '#fff', marginLeft: 10}}>
                Jalan Medan Merdeka Barat No 8, Gambir, Kota Jakarta Pusat DKI
                Jakarta 10110, Indonesia
              </Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                marginTop: 10,
                alignItems: 'center',
              }}>
              <Icon name="envelope" size={20} color="#de5f15" />
              <Text style={{fontSize: 9, color: '#fff', marginLeft: 10}}>
                admin@gmail.com
              </Text>
            </View>
          </View>
        </View>
        <ScrollView
          style={{
            marginTop: 10,
            paddingHorizontal: 15,
          }}>
          <Text>Atau Kirim Pesan Anda Melalui Form Berikut</Text>
          <View style={styles.input}>
            <Text style={styles.label}>Nama Lengkap</Text>
            <View style={styles.form}>
              <TextInput
                style={styles.textInput}
                placeholder={'Nama...'}
                onChangeText={e => setParam({...isParam, name: e})}
              />
            </View>
          </View>
          <View style={styles.input}>
            <Text style={styles.label}>Alamat Email</Text>
            <View style={styles.form}>
              <TextInput
                onChangeText={e => setParam({...isParam, email: e})}
                style={styles.textInput}
                placeholder={'example@gmail.com'}
              />
            </View>
          </View>
          <View style={styles.input}>
            <Text style={styles.label}>No Hp</Text>
            <View style={styles.form}>
              <TextInput
                onChangeText={e => setParam({...isParam, mobile: e})}
                style={styles.textInput}
                placeholder={'08'}
              />
            </View>
          </View>
          <View style={styles.input}>
            <Text style={styles.label}>Tulis Pesan Anda</Text>
            <View style={styles.form}>
              <TextInput
                style={styles.textInputArea}
                multiline={true}
                placeholder={'Tulis...'}
                numberOfLines={4}
                onChangeText={e => setParam({...isParam, message: e})}
              />
            </View>
          </View>
          <TouchableOpacity
            onPress={() => handleSubmit()}
            style={{
              backgroundColor: '#123661',
              width: 60,
              height: 28,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 5,
            }}>
            <Text style={{color: '#fff'}}>Kirim</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    flex: 1,
  },
  form: {
    marginTop: 2,
  },
  label: {
    marginTop: 7,
    color: 'gray',
    fontSize: 14,
  },
  textInput: {
    borderColor: 'gray',
    width: '100%',
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 14,
    height: 35,
    paddingLeft: 5,
    paddingTop: 5,
    paddingBottom: 5,
    marginBottom: 10,
  },
  textInputArea: {
    borderColor: 'gray',
    width: '100%',
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 14,
    paddingTop: 5,
    paddingBottom: 5,
    marginBottom: 10,
    textAlignVertical: 'top',
  },
});

export default HubungiKami;
