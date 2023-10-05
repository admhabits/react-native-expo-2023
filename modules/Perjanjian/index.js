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
  useWindowDimensions,
  View,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import RNPickerSelect from 'react-native-picker-select';
import { useSelector } from 'react-redux';
import { BaseUrl } from '../../utils/Constants';
import { SearchBar } from 'react-native-elements';
import OverlayTable from '../../shared/Overlay';


const Perjanjian = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('Semua');
  const [QueryTableData, setQueryTableData] = useState(null)
  const [dataNull, setDataNull] = useState('notnull');
  const { login } = useSelector(state => state);
  const [isTotalDataShow, setTotalDataShow] = useState(10)
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };
  const header = [
    // {
    //   title: 'Jenis Perjanjian',
    //   width: '20%',
    // },
    { title: 'Nomor', width: '26%' },
    { title: 'Tahun', width: '16%' },
    { title: 'Judul', width: '35%' },
    {
      title: 'Tanggal',
      width: '20%',
    },
  ];

  const getData = () => {
    axios.get(`${BaseUrl}/api/public/agreement?search=${search}&limit=${sort == 'semua' ? isTotalDataShow : 1000}&offset=0`)
      .then(res => {
        if (res.data.data.perjanjianResponses.length !== 0) {
          console.log("GET DATA Perjanjian ", JSON.stringify(res.data.data.perjanjianResponses, null, 3))
          setData(res.data.data.perjanjianResponses);
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
      item?.judul.toLowerCase().includes(search.toLowerCase()),
    );
    if (filter.length < 1) {
      getData();
    } else {
      setData(filter)
    }

  }, [search]);

  useEffect(() => {
    let filter = data?.filter(item =>
      item?.jenisPerjanjian.toLowerCase().includes(sort.toLowerCase()),
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
        namePathBack={'Perjanjian'}
        justifyContentTitle="flex-start"
      />
      <View style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 20,
      }}>
        <View style={styles.input}>
          <View style={styles.form}>
            <TextInput
              style={styles.textInput}
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
                  { label: 'Dalam Negeri', value: 'Dalam Negeri' },
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
            const OverLayData = [
              {
                label: "Jenis Perjanjian",
                value: item.jenisPerjanjian,
              },
              {
                label: "Nomor",
                value: item.nomor,
              },
              {
                label: "Tahun",
                value: item.tahun,
              },
              {
                label: 'Direktorat',
                value: item?.direktorat,
              },
              {
                value: item.judul,
                label: "Judul",

              },
              {
                label: 'Tanggal',
                value: moment(item?.directorat).format('YYYY-MM-DD HH:mm'),
              },
              {
                label: 'Hits',
                value: item?.hits,
              },
              {
                label: "Lampiran",
                value: item.fileName,
                code: 'l',
              },
            ]
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

                  <View style={{ width: '26%', marginHorizontal: '0.5%', }}>
                    <TouchableOpacity
                      onPress={() => {
                        toggleOverlay();
                        setQueryTableData({
                          data: OverLayData, item
                        })
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 8,
                          color: '#0089EC'
                        }}>
                        {item?.nomor}
                      </Text>
                    </TouchableOpacity>
                  </View>

                  <Text
                    style={{
                      marginRight: '1%',
                      fontSize: 8,
                      width: '16%',
                      textAlign: 'center',
                    }}>
                    {item?.tahun}
                  </Text>
                  <Text
                    style={{
                      // marginHorizontal: '0.5%',
                      fontSize: 8,
                      width: '34.5%',
                      textTransform: 'uppercase'
                    }}>
                    {item?.judul}
                   
                  </Text>
                  <Text
                    style={{
                      // marginHorizontal: '0.5%',
                      fontSize: 8,
                      width: '20%',
                    }}>
                    {moment(item?.directorat).format('YYYY-MM-DD HH:mm')}
                  </Text>
                </View>
                <View style={styles.line} />
              </View>
            );
          }
        })}
        <OverlayTable
          toggle={toggleOverlay}
          visible={visible}
          item={QueryTableData?.data}
          id={QueryTableData?.item.id}
          fileName={QueryTableData?.item.fileName}
          title='Detail Perjanjian' />
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

export default Perjanjian;
