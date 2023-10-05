/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import { Header, HeadTable } from 'components';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { BaseUrl } from '../../utils/Constants';
import Icon from 'react-native-vector-icons/FontAwesome5';
import DownloadFunc from '../../shared/DownloadFunc';
import { useSelector } from 'react-redux';
import axios from 'axios';

const Maklumat = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [isTotalDataShow, setTotalDataShow] = useState(15)
  const [dataNull, setDataNull] = useState('notnull');
  const { login } = useSelector(state => state)

  const header = [
    {
      title: 'Tahun',
      width: '12.5%',
    },
    { title: 'Judul', width: '53%' },
    {
      title: 'Data Uploaded',
      width: '21.5%',
    },
    {
      title: 'File',
      width: '10.5%',
    },
  ];

  const getData = () => {
    axios.get(`${BaseUrl}/api/public/maklumat-pelayaran?search=${search}&limit=${isTotalDataShow}&offset=0`)
      .then(res => {
        if (res.data.data.maklumatResponses.length > 0) {
          setData(res.data.data.maklumatResponses);
          // console.log(res.data.data.maklumatResponses)
          setDataNull('notnull');
        } else {
          setData([]);
          setDataNull('null');
        }
      })
      .catch(function (error) {
        console.log('error', error);
      });
  };
  useEffect(() => {
    getData();
  }, [login?.data?.token, isTotalDataShow]);

  useEffect(() => {
    let filter = data?.filter(item =>
      item.title.toLowerCase().includes(search.toLowerCase()),
    );
    if (filter.length < 1) {
      getData();
    } else {
      setData(filter)
    }
  }, [search]);

  return (
    <View style={{ width: '100%', height: '100%', backgroundColor: '#fff' }}>
      <Header
        onPressBack={() => navigation.navigate('Home')}
        type={'back'}
        namePathBack={'Maklumat'}
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

      <HeadTable data={header} backgroundColor={'#28A297'} textColor={'#fff'} />
      <ScrollView>
        {data?.length === 0 && dataNull === 'notnull' ? (
          <ActivityIndicator size="large" style={{ marginTop: 20 }} />
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

        {data?.slice(0, isTotalDataShow).map((item, i) => {
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
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      marginRight: '1.5%',
                      fontSize: 8,
                      width: '12%',
                      textAlign: 'center'
                    }}>
                    {item?.tahun}
                  </Text>
                  <Text
                    style={{
                      marginHorizontal: '0.5%',
                      fontSize: 8,
                      width: '53%',
                    }}>
                    {item?.title}
                  </Text>

                  <Text
                    style={{
                      marginHorizontal: '2%',
                      fontSize: 8,
                      width: '20%',
                    }}>
                    {moment(item?.dataUploaded).format('YYYY-MM-DD HH:mm')}
                  </Text>
                  <Text
                    style={{
                      marginHorizontal: '0.5%',
                      fontSize: 8,
                      width: '15%',
                    }}>
                    <TouchableOpacity
                      onPress={() => {
                        item?.id == 'undefined' || item?.id == null ? (alert('File tidak tersedia')) :
                          (
                            DownloadFunc(`${BaseUrl}/storage/documents/post/${item.id}/${item.fileName}`, item.fileName)
                          )
                      }}
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                      }}>
                      <Icon name="download" size={17} color="#0089EC" />
                    </TouchableOpacity>
                  </Text>
                </View>
                <View style={styles.line} />
              </View>
            );
          }
        })}

        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
            width: '100%',
          }}>
          <TouchableOpacity
            onPress={() => setTotalDataShow(isTotalDataShow + 15)}
            style={{
              backgroundColor: '#0089EC',
              marginVertical: 10,
            }}>
            <Text
              style={{
                paddingHorizontal: 10,
                paddingVertical: 2,
                borderRadius: 30,
                color: '#fff',
                fontSize: 10,
                display: search !== '' || data.length === 0 ? 'none' : null
              }}>
              Load More
            </Text>
          </TouchableOpacity>
        </View>
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
    paddingLeft: 10,
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
});

export default Maklumat;
