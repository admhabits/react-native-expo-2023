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
  TouchableOpacity
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { useSelector } from 'react-redux';
import OverlayTable from '../../shared/Overlay';
import { BaseUrl } from '../../utils/Constants';

const Prosedure = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('Semua');
  const [QueryTableData, setQueryTableData] = useState(null)
  const [dataNull, setDataNull] = useState('notnull');
  const { login } = useSelector((state) => state);
  const [isTotalDataShow, setTotalDataShow] = useState(10)
  const [visible, setVisible] = useState(false);


  const header = [
    {
      title: 'Judul',
      width: '51%',
    },
    {
      title: 'Direktorat',
      width: '36%',
    },
    {
      title: 'Tahun',
      width: '12%',
    },
  ];

  const getData = () => {
    axios.get(`${BaseUrl}/api/public/informasi-prosedur-pelayanan?search=${search}&limit=${sort == 'semua' ? isTotalDataShow : 1000}&offset=0`)
      .then(res => {
        if (res.data.data.pelayananResponses.length > 0) {
          setData(res.data.data.pelayananResponses);
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
    // console.log(data)
  }, [login?.data?.token, isTotalDataShow]);

  useEffect(() => {
    let filter = data?.filter(item =>
      item?.postTitle.toLowerCase().includes(search.toLowerCase()),
    );
    if (filter.length < 1) {
      getData();
    } else {
      setData(filter)
    }

  }, [search]);

  useEffect(() => {
    // console.log(data)
    let filter = data?.filter(item =>
      item?.postExcerpt.toLowerCase().includes(sort.toLowerCase()),
    );
    if (filter.length < 1) {
      getData();
    } else {
      setData(filter)
    }

  }, [sort]);

  const toggleOverlay = () => {
    setVisible(!visible);
  };
  return (
    <View style={{ width: '100%', height: '100%', backgroundColor: '#fff' }}>
      <Header
        onPressBack={() => navigation.navigate('Home')}
        type={'back'}
        namePathBack={'Prosedur Pelayanan'}
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
                  { label: 'Direktorat Lalu Lintas Angkutan Laut', value: 'Direktorat Lalu Lintas Angkutan Laut' },
                  { label: 'Direktorat Kepelabuhanan', value: 'Direktorat Kepelabuhanan' },
                  { label: 'Direktorat Perkapalan dan Kepelautan', value: 'Direktorat Perkapalan dan Kepelautan' },
                  { label: 'Direktorat Kenavigasian', value: 'Direktorat Kenavigasian' },
                  { label: 'Direktorat Kesatuan Penjagaan Laut dan Pantai', value: 'Direktorat Kesatuan Penjagaan Laut dan Pantai' },
                ]}
              />
            </View>
          </View>
        </View>
      </View>
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
            <Text style={{ fontSize: 10, }}>Tidak ditemukan data</Text>
          </View>
        ) : null}

        {data?.slice(0, isTotalDataShow).map((item, i) => {
          // console.log(item)
          const OverLayData = [
            {
              label: "Judul",
              value: item?.postTitle,
            },
            {
              label: "Direktorat",
              value: item?.postExcerpt,
            },
            {
              label: "Tahun",
              value: item?.postYear,
            },
            {
              label: 'Hits',
              value: item?.postHits,
            },

            {
              label: 'Tanggal',
              value: moment(item?.directorat).format('YYYY-MM-DD HH:mm'),
            },

            {
              label: "Lampiran",
              value: item?.fileName === null ? '-' : item?.fileName,
              code: 'l',
            },
          ]
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
                  <View
                    style={{
                      marginHorizontal: '0.5%',
                      width: '50%',
                    }}
                  >
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
                        {item?.postTitle}
                      </Text>
                    </TouchableOpacity>
                  </View>


                  <Text
                    style={{
                      marginHorizontal: '0.5%',
                      fontSize: 8,
                      width: '34%',
                      textTransform: 'uppercase',
                    }}>
                    {item?.postExcerpt}
                  </Text>

                  <Text
                    style={{
                      marginHorizontal: '0.5%',
                      fontSize: 8,
                      width: '10%',
                      textAlign: 'center'
                    }}>
                    {item?.postYear}
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
          id={QueryTableData?.item.postId}
          fileName={QueryTableData?.item.fileName == null ? '-' : QueryTableData?.item.fileName}
          title='Detail Prosedur Pelayanan' />

        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
            width: '100%',
          }}>
          {data?.length > 0 ? (
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
          ) : null}
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

export default Prosedure;
