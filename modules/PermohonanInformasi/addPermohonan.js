/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import axios from 'axios';
import { Header } from 'components';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  Image,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { logoDJPL, logoHubla } from '../../configs/Images';
import { BaseUrl } from '../../utils/Constants';

const AddPermohonan = ({ navigation }) => {
  const { login } = useSelector(state => state);
  let token = login?.data?.token;

  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [desc, setDesc] = useState('');

  const PostDataPermohonan = () => {
    const dataBody = {
      name: nama,
      phone,
      email,
      question: desc,
    }
    axios.post(`${BaseUrl}/api/permohonan/create`, dataBody, {
      headers : {
        Authorization: `Bearer ${token}`
      }
    })
    .then(response=> {
      console.log("POST DATA PERMOHONAN", JSON.stringify(response.data, null, 3))
      navigation.navigate('ListPermohonanInformasi');
    })
    .catch(error => {
      console.log(error);
    })
  }

  return (
    <View style={{ width: '100%', height: 750, backgroundColor: '#fff' }}>
      <Header
        onPressBack={() => navigation.navigate('ListPermohonanInformasi')}
        type={'back'}
        namePathBack={'Permohonan Informasi'}
        justifyContentTitle="flex-start"
      />
      <View style={styles.outer}>
        <Image source={logoDJPL} style={styles.logo} />
        <View style={{ ...styles.input, marginTop: 10 }}>
          <View style={styles.title}>
            <Text style={styles.label}>Nama</Text>
          </View>
          <View style={styles.form}>
            <TextInput style={styles.textInput} onChangeText={(e) => setNama(e)}/>
          </View>
        </View>
        <View style={styles.input}>
          <View style={styles.title}>
            <Text style={styles.label}>Email</Text>
          </View>
          <View style={styles.form}>
            <TextInput style={styles.textInput} onChangeText={(e) => setEmail(e)} />
          </View>
        </View>
        <View style={styles.input}>
          <View style={styles.title}>
            <Text style={styles.label}>Phone</Text>
          </View>
          <View style={styles.form}>
            <TextInput style={styles.textInput} onChangeText={(e) => setPhone(e)}/>
          </View>
        </View>
        <View style={styles.input}>
          <View style={styles.title}>
            <Text style={styles.label}>Permohonan Informasi</Text>
          </View>
          <View style={styles.form}>
            <TextInput
              multiline={true}
              numberOfLines={3}
              style={styles.textInputArea}
              onChangeText={(e) => setDesc(e)}
            />
          </View>
        </View>
        <View style={styles.action}>
          <TouchableOpacity
            onPress={()=> PostDataPermohonan()}
            style={{ ...styles.btn, backgroundColor: 'blue' }}>
            <Text style={{ ...styles.textButton }}>Tambah</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ ...styles.btn, backgroundColor: '#FF5454' }}>
            <Text style={{ ...styles.textButton }}>batal</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outer: {
    backgroundColor: '#28A297',
    width: '94%',
    height: '26%',
    marginHorizontal: '3%',
    marginTop: 20,
    borderRadius: 10,
  },
  logo: {
    width: 170,
    height: 180,
    alignSelf: 'center',
    marginVertical: 20,
    position: 'absolute',
  },
  input: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    // alignItems: 'center',
    paddingHorizontal: 5,
  },
  title: {
    flex: 1,
  },
  form: {
    flex: 1.2,
  },
  label: {
    fontSize: 14,
    color: '#fff',
  },
  textInput: {
    width: '100%',
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 10,
    height: 20,
    paddingTop: 5,
    paddingBottom: 5,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderColor: '#fff',
  },
  textInputArea: {
    backgroundColor: '#fff',
    borderColor: '#fff',
    width: '100%',
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 10,
    paddingTop: 5,
    paddingBottom: 5,
    marginBottom: 10,
    textAlignVertical: 'top',
  },
  textInputCheckbox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleTextInputCheckbox: {
    fontSize: 10,
  },
  textInputSelect: {
    borderWidth: 1,
    height: 30,
    display: 'flex',
    borderColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 10,
  },
  textInputFile: {
    borderWidth: 1,
    height: 30,
    display: 'flex',
    borderColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 10,
    width: '100%',
  },
  inputFile: {
    height: 20,
    backgroundColor: 'gray',
    paddingHorizontal: 10,
    display: 'flex',
    alignItems: 'center',
    borderRadius: 7,
    marginLeft: 5,
    justifyContent: 'center',
  },
  seoContent: {
    paddingHorizontal: 10,
  },
  actionButton: {
    marginTop: 70,
    paddingBottom: 80,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  btn: {
    width: 50,
    height: 25,
    marginLeft: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 8,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 5,
    marginRight: 5,
  },
  action: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  textButton: {
    fontSize: 10,
    color: '#fff',
  },
});

export default AddPermohonan;
