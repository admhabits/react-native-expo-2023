/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import axios from 'axios';
import { Header, HeadTable } from 'components';
import moment from 'moment';
import { useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { BaseUrl } from '../../utils/Constants';
import DownloadFunc from '../../shared/DownloadFunc';

const Dokumen = ({ navigation }) => {
  const { login } = useSelector((state) => state)
  const [data, setData] = useState([]);
  const [sort, setSort] = useState('Semua');
  const [search, setSearch] = useState('');
  const [isTotalDataShow, setTotalDataShow] = useState(10);
  const [dataNull, setDataNull] = useState('notnull');

  useEffect(() => {
    getData();
  }, [login?.data?.token, isTotalDataShow]);

  useEffect(() => {

    let filter = data?.filter(item =>
      item?.title.toLowerCase().includes(search.toLowerCase()),
    );
    if (filter.length < 1) {
      getData();
    } else {
      setData(filter)
    }

  }, [search]);


  const getData = () => {
    axios.get(BaseUrl + `/api/public/document?search=${search}&limit=${isTotalDataShow}&offset=0`)
      .then(res => {
        if (res.data.data.documentList.length > 0) {
          // console.log("GET DATA DOCUMENT ", JSON.stringify(res.data.data.documentList, null, 3))
          setData(res.data.data.documentList);
          setDataNull('notnull');
        } else {
          setData([]);
          setDataNull('null');
        }
      })
      .catch(function (error) {
        console.log('error', error);
        throw error;
      });
  };

  return (
    <View style={{ width: '100%', height: '100%', backgroundColor: '#fff' }}>
      <Header
        onPressBack={() => navigation.navigate('Home')}
        type={'back'}
        namePathBack={'Dokumen'}
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
                  { label: 'Informasi Berkala', value: 'Informasi Berkala' },
                  { label: 'Informasi Serta Merta', value: 'Informasi Serta Merta' },
                  { label: 'Informasi Setiap Saat', value: 'Informasi Setiap Saat' },
                ]}
              />
            </View>
          </View>
        </View>
      </View>

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
        <View style={{ paddingHorizontal: 15 }}>
          {data.slice(0, isTotalDataShow).map((item, i) => {
            const { id, fileName, title } = item;
            const urlFile = `${BaseUrl}/storage/portal/documents/post/${id}/${fileName}`;
            // console.log(urlFile)
           return <View key={i}>
              <View style={styles.outer}>
                <TouchableOpacity onPress={async () => {
                       id == 'undefined' || id == null? (alert('File tidak tersedia')) :
                        (
                          await DownloadFunc(`${BaseUrl}/storage/portal/documents/post/${item.id}/${item.fileName}`, item.fileName)
                        )
                      }}>
                  <Text style={{ fontSize: 12, marginTop: 10, color: '#0089EE', textTransform: 'uppercase' }}>{title}</Text>
                </TouchableOpacity>
                <Text style={{ fontSize: 10, marginTop: 5, }}>{moment(item.tanggal).format('YYYY-MM-DD HH:mm')}</Text>
              </View>
              <View
                style={{
                  width: '100%',
                  backgroundColor: '#C4C4C4',
                  height: 1,
                  marginTop: 10,
                }}
              />
            </View>
          }

          )}
        </View>

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

export default Dokumen;
