/* eslint-disable react-native/no-inline-styles */
import { BaseContainerLogin, Button } from 'components';
import React, { useState, useReducer } from 'react';
import { RegisterReducers } from './RegisterReducer';

import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { imageCeklis } from 'configs/Images';
import { FormInput } from 'components/Form/FormInput';
import axios from 'axios';
import { BaseUrl } from '../../utils/Constants';

const Register = ({ navigation }) => {
  // const { pendaftaran } = useSelector((state) => state);
  const [state, dispatch] = useReducer(RegisterReducers, {
    nama: '',
    email: '',
    kategori: 'pribadi',
    username: '',
    dokumen: null,
    surat: null,
    password: ''
  });

  const [isError, setIsError] = useState(false);
  const [isEmptyForm, setIsEmptyForm] = useState(false);

  const [filePath, setFilePath] = useState({});
  const [onClickDaftar, setOnClickDaftar] = useState(false);

  const chooseFile = type => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
    };
    launchImageLibrary(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        alert('User cancelled camera picker');
        return;
      } else if (response.errorCode === 'camera_unavailable') {
        alert('Camera not available on device');
        return;
      } else if (response.errorCode === 'permission') {
        alert('Permission not satisfied');
        return;
      } else if (response.errorCode === 'others') {
        alert(response.errorMessage);
        return;
      }
      setFilePath(response);
    });
  };

  const postPendaftaran = () => {
    var data = new FormData();
    const { nama, username, password, email } = state;
    if (nama == '' || username == '' || password == '' || email == '') {
      setIsEmptyForm(!isEmptyForm);
    } else {
      data.append('name', state.nama);
      data.append('username', state.username);
      data.append('password', state.password);
      data.append('category', state.kategori);
      data.append('email', state.email);
      // data.append('ktp', state.dokumen);
      // data.append('aktaPerusahaan', state.surat);

      var config = {
        method: 'post',
        url: `${BaseUrl}/api/auth/signup`,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
        },
        data: data
      };

      axios(config)
        .then(function (response) {
          console.log("Response Pendaftaran", response.status)
          if (response.status == 200) {
            setOnClickDaftar(!onClickDaftar)
          }
        })
        .catch(function (error) {
          console.log(error);
          setIsError(true)
        });
    }

  };

  React.useEffect(()=> {
    setIsEmptyForm(false);
    setIsError(false);
  }, [state])

  return (
    <BaseContainerLogin onPressBack={() => navigation.navigate('Login')}>
      <ScrollView showsVerticalScrollIndicator={false} style={{ marginVertical: 5, }}>
        {onClickDaftar ? (
          <View
            style={{
              width: '80%',
              backgroundColor: '#fff',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
              padding: 20,
              borderRadius: 5,
            }}>
            <Image
              source={imageCeklis}
              style={{
                width: 150,
                height: 150,
                marginVertical: 4,
              }}
            />
            <Text style={{ fontWeight: 'bold' }}>Pendaftaran Sukses</Text>
          </View>
        ) : (
          <ScrollView showsVerticalScrollIndicator={false} style={{ marginVertical: 15, marginHorizontal: 5, }}>
            <>
              <FormInput label='Nama' type='nama' dispatch={dispatch} state={state} />
              <FormInput label='Email' type='email' dispatch={dispatch} state={state} />
              <FormInput label='Username' type='username' dispatch={dispatch} state={state} />
              <FormInput label='Foto KTP/NPWP' type='dokumen' dispatch={dispatch} state={state} chooseFile={chooseFile} />
              <FormInput label='Surat Tugas' type='surat' dispatch={dispatch} state={state} chooseFile={chooseFile} />
              <FormInput label='Password' type='password' dispatch={dispatch} state={state} />

              <View style={{ marginTop: 50, paddingHorizontal: 50, justifySelf: 'flex-end' }}>
                {isError ? (
                  <Text style={styles.messageError}>
                    Username atau email telah digunakan!
                  </Text>
                ) : isEmptyForm ?
                  <Text style={styles.messageError}>
                    Formulir pendaftaran tidak valid!
                  </Text> : null
                }
                <Button onPress={postPendaftaran}>
                  Daftar
                </Button>
              </View>
            </>
          </ScrollView>
        )}
      </ScrollView>
    </BaseContainerLogin>
  );
};

const styles = StyleSheet.create({
  input: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    width: '100%',
  },
  label: {
    fontSize: 12,
    justifySelf: 'flex-end',
  },
  underlineUnggah: {
    width: 150,
    height: 2,
    backgroundColor: '#000',
  },
  underlineIcon: {
    width: 150,
    height: 2,
    backgroundColor: '#000',
  },
  textInput: {
    height: 10,
    paddingLeft: -5,
    fontSize: 10,
    padding: 5,
  },
  button: {
    backgroundColor: 'red',
  },
  messageError: {
    fontSize: 10,
    color: 'red',
    marginTop: 1,
    textAlign: 'center',
    fontFamily: 'Roboto-Regular',
    marginBottom: 20,
  },
});

export default Register;
