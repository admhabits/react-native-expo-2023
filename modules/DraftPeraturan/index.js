/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import axios from 'axios';
import { Header, HeadTable } from 'components';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { BaseUrl } from '../../utils/Constants';
import { useDispatch, useSelector } from 'react-redux';
import DownloadFunc from '../../shared/DownloadFunc';

const DraftPeraturan = ({ navigation }) => {
  const { login } = useSelector(state => state);
  const [data, setData] = useState([]);
  const [sort, setSort] = useState('Semua');
  const [search, setSearch] = useState('');
  const [dataNull, setDataNull] = useState('notnull');
  const [isTotalDataShow, setTotalDataShow] = useState(10);

  const header = [

    { title: 'Nomor', width: '24%' },
    { title: 'Tahun', width: '10%' },
    { title: 'Judul', width: '33%' },
    {
      title: 'Direktorat',
      width: '17%',
    },
    // {
    //   title: 'Hits',
    //   width: '9%',
    // },
    {
      title: 'Tanggal',
      width: '13%',
    },
  ];

  const getData = () => {
    axios.get(BaseUrl + `/api/public/regulation-draft?search=${search}&limit=${sort == 'semua' ? isTotalDataShow : 1000}&offset=0`)
      .then(res => {
        if (res.data.data.peraturanResponses.length > 0) {
          setData(res.data.data.peraturanResponses);
          // console.log(data.data.peraturanResponses)
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
  }, [login.data.token, isTotalDataShow]);

  useEffect(() => {
    let filter = data?.filter(item =>
      item.nomor.toLowerCase().includes(search.toLowerCase()),
    );
    if (filter.length < 1) {
      setData(filter)
    }

  }, [search]);

  useEffect(() => {

    let filter = data?.filter(item =>
      item?.jenisPeraturan.toLowerCase().includes(sort.toLowerCase()),
    );
    if (filter.length < 1) {
      getData();
    } else {
      setData(filter)
    }

  }, [sort]);


  return (
    <View style={{ width: '100%', height: '100%', backgroundColor: '#fff' }}>
      <Header
        onPressBack={() => navigation.navigate('Home')}
        type={'back'}
        namePathBack={'Draft Peraturan'}
        justifyContentTitle="flex-start"
      />

      <View style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginVertical: 20,
      }}>
        <View style={styles.input}>
          <View style={styles.form}>
            <TextInput
              style={{ ...styles.textInput, color: '#234' }}
              placeholder={'Pencarian'}
              onChangeText={e => setSearch(e)}
            />
          </View>
        </View>

        <View style={{ paddingHorizontal: 15, flex: 1 }}>
          <View style={styles.form}>
            <View style={styles.textInputSelect}>
              <RNPickerSelect
                onValueChange={value => setSort(value)}
                value={sort}
                items={[
                  { label: 'Semua', value: 'Semua' },
                  { label: 'UU/PERPU', value: 'UU/PERPU' },
                  { label: 'Peraturan Pemerintah', value: 'Peraturan Pemerintah' },
                  { label: 'Peraturan Presiden', value: 'Peraturan Presiden' },
                  { label: 'Keputusan Presiden', value: 'Keputusan Presiden' },
                  { label: 'Instruksi Presiden', value: 'Instruksi Presiden' },
                  { label: 'Peraturan Menteri', value: 'Peraturan Menteri' },
                  { label: 'Keputusan Menteri', value: 'Keputusan Menteri' },
                  { label: 'Instruksi Menteri', value: 'Instruksi Menteri' },
                  { label: 'Surat Edaran Menteri', value: 'Surat Edaran Menteri' },
                  { label: 'Peraturan Tingkat Eselon I', value: 'Peraturan Tingkat Eselon I' },
                  { label: 'Keputusan Tingkat Eselon I', value: 'Keputusan Tingkat Eselon I' },
                  { label: 'SE Tingkat Eselon I', value: 'SE Tingkat Eselon I' },
                  { label: 'Instruksi Tingkat Eselon I', value: 'Instruksi Tingkat Eselon I' },
                  { label: 'MOU', value: 'MOU' },
                  { label: 'Ditjen Hubla', value: 'Ditjen Hubla' },
                  { label: 'Lain-lain', value: 'Lain-lain' },
                ]}
              />
            </View>
          </View>
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
            <Text style={{ fontSize: 10, }}>Tidak ditemukan data</Text>
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
                  {/* <Text
                    style={{
                      // marginHorizontal: '0.5%',
                      fontSize: 8,
                      width: '20%',
                    }}>
                    {item?.jenisPeraturan}
                  </Text> */}
                  <View style={{ width: '25%', marginLeft: '0.5%', }}>
                    <TouchableOpacity
                      onPress={() => {
                        item?.id == 'undefined' || item?.id == null ? (alert('File tidak tersedia')) :
                          (
                            DownloadFunc(`${BaseUrl}/storage/documents/post/${item.id}/${item.fileName}`, item.fileName)
                          )
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 8,
                          color: '#0089EC',
                          textTransform: 'uppercase'

                        }}>
                        {item?.nomor}
                      </Text>
                    </TouchableOpacity>
                  </View>


                  <Text
                    style={{
                      marginHorizontal: '0.5%',
                      fontSize: 8,
                      width: '8%',
                    }}>
                    {item?.tahun}
                  </Text>
                  <Text
                    style={{
                      marginHorizontal: '0.5%',
                      fontSize: 8,
                      width: '33%',
                      textTransform: 'uppercase'
                    }}>
                    {item?.judul}
                  </Text>
                  <Text
                    style={{
                      // marginHorizontal: '0.5%',
                      fontSize: 8,
                      width: '16%',
                      textTransform: 'uppercase'
                    }}>
                    {item?.directorat}
                  </Text>
                  {/* <Text
                    style={{
                      marginLeft: '0.5%',
                      fontSize: 8,
                      width: '5%',
                    }}>
                    {item?.hits}
                  </Text> */}
                  <Text
                    style={{
                      marginLeft: '1%',
                      fontSize: 8,
                      width: '12%',
                    }}>
                    {moment(item?.tanggal).format('YYYY-MM-DD HH:mm')}
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
            onPress={() => setTotalDataShow(isTotalDataShow + 10)}
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
    paddingBottom: 5,
    paddingLeft: 8,
  },
  textInputSelect: {
    borderWidth: 1,
    height: 30,
    display: 'flex',
    borderColor: '#28A297',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    width: 150,
    alignSelf: 'flex-end',
  },
  input: {
    paddingHorizontal: 15,
    flex: 1,
  },
  inputSelect: {
    paddingTop: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  }
});

export default DraftPeraturan;
