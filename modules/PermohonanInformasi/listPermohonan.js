/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import { Header, HeadTable } from 'components';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
// import RNPickerSelect from 'react-native-picker-select';
import { BaseUrl } from '../../utils/Constants';
import Icon from 'react-native-vector-icons/FontAwesome5';
import axios from 'axios';
import DownloadFunc from 'shared';

const ListPermohonan = ({ navigation }) => {
  const [data, setData] = useState([
    // {
    //   nomor: '005/VII/PPID-HUBLA/2021',
    //   title: 'Informasi Lorem Ipsum Dolor sitamet',
    //   jawaban: 'diteruskan',
    //   lampiran: '',
    // },
    // {
    //   nomor: '005/VII/PPID-HUBLA/2021',
    //   title: 'Informasi Lorem Ipsum Dolor sitamet',
    //   jawaban: 'diproses',
    //   lampiran: '',
    // },
    // {
    //   nomor: '005/VII/PPID-HUBLA/2021',
    //   title: 'Informasi Lorem Ipsum Dolor sitamet',
    //   jawaban: 'diverifikasi',
    //   lampiran: '',
    // },
  ]);
  const { login } = useSelector(state => state);
  const [search, setSearch] = useState('');
  const [dataNull, setDataNull] = useState('notnull');

  const header = [
    {
      title: 'Nomor Registrasi',
      width: '30%',
    },
    { title: 'Permohonan Informasi', width: '34.5%' },
    { title: 'Jawaban', width: '18%' },
    { title: 'Lampiran', width: '14%' },
  ];

  let token = login?.data?.token;

  const getDataPermohonan = () => {
    console.log("TOKEN", token)
    axios.get(`${BaseUrl}/api/permohonan`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((response) => {
        console.log("GET DATA PERMOHONAN", JSON.stringify(response.data.data.questionsResponses, null, 3))
        setData(response.data.data.questionsResponses);
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    getDataPermohonan();
  }, []);

  useEffect(() => {
    let filter = data?.filter(item =>
      item.registrationNumber.toLowerCase().includes(search.toLowerCase()),
    );
    if (filter.length < 1) {
      getDataPermohonan();
    } else {
      setData(filter)
    }

  }, [search]);


  return (
    <View style={{ width: '100%', height: '100%', backgroundColor: '#fff' }}>
      <Header
        onPressBack={() => navigation.navigate('Home')}
        type={'back'}
        namePathBack={'Permohonan Informasi'}
        justifyContentTitle="flex-start"
      />

      <View style={styles.input}>
        <View style={styles.form}>
          <TextInput
            style={styles.textInput}
            placeholder={'Pencarian'}
            onChangeText={e => setSearch(e)}
          />
        </View>
      </View>

      <View style={styles.title}>
        <Text>Daftar Permohonan Informasi</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('CreatePermohonanInformasi')}
          style={{
            ...styles.button,
            backgroundColor: '#0089EC',
            width: 45,
            height: 20,
          }}>
          <Icon name="plus" size={6} color="#fff" />
          <Text style={{ fontSize: 8, color: '#fff' }}> Tambah</Text>
        </TouchableOpacity>
      </View>

      <View style={{ paddingHorizontal: 15 }}></View>
      <HeadTable data={header} backgroundColor={'#28A297'} textColor={'#fff'} />
      <ScrollView>
        {data?.length === 0 && dataNull === 'notnull' ? (
          <ActivityIndicator size="large" style={{ marginTop: 150 }} />
        ) : null}

        {data?.length === 0 && dataNull === 'null' ? (
          <View
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'row',
              marginTop: 20,
            }}>
            <Text>Belum ada data tersedia</Text>
          </View>
        ) : null}

        {data?.map((item, i) => {
          if (1 < 10) {
            return (
              <View key={i}>
                <View
                  key={i}
                  style={{
                    display: 'flex',
                    marginHorizontal: 15,
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    marginVertical: 7,
                    // alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      marginHorizontal: '0.2%',
                      fontSize: 9,
                      width: '30%',
                    }}>
                    {item?.registrationNumber}
                  </Text>
                  <Text
                    style={{
                      marginHorizontal: '0.2%',
                      fontSize: 9,
                      width: '34.5%',
                    }}>
                    {item?.question}
                  </Text>
                  <Text
                    style={{
                      marginHorizontal: '0.2%',
                      fontSize: 9,
                      width: '18%',

                    }}>
                    {item?.answer == null ? '---- ----' : item?.answer}
                  </Text>
                  <TouchableOpacity
                    style={{ width: '10.8%', marginHorizontal: '0.2%', }}
                    onPress={() => {
                      item?.answerFile ?
                      DownloadFunc(item?.answerFile):
                      alert(`Lampiran permohonan ${item.registrationNumber} tidak tersedia`)
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 9,
                        color: 'blue'
                      }}>
                      File
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.line} />
              </View>
            );
          }
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderColor: '#28A297',
    width: '100%',
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 14,
    height: 30,
    paddingTop: 5,
    paddingBottom: 5,
    marginBottom: 10,
  },
  textInputSelect: {
    borderWidth: 1,
    height: 30,
    display: 'flex',
    borderColor: '#28A297',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 10,
    width: '50%',
    alignSelf: 'flex-end',
  },
  input: {
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  inputSelect: {
    paddingTop: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  title: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 15,
    marginTop: 10,
    marginBottom: 15,
  },
  button: {
    width: 45,
    height: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 5,
    borderRadius: 3,
  },
});

export default ListPermohonan;
