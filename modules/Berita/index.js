/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import axios from 'axios';
import {CardListNews, Header} from 'components';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Text, TouchableOpacity, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {BaseUrl} from '../../utils/Constants';

const Berita = ({navigation}) => {
  const [data, setData] = useState([]);
  const [postMedias, setPostMedias] = useState([]);
  const [isTotalDataShow, setTotalDataShow] = useState(20);
  const [dataNull, setDataNull] = useState('notnull');

  const getData = () => {
    console.log('get data');
    axios.get(`${BaseUrl}/api/public/berita?limit=${isTotalDataShow}&offset=0`)
    .then(res => {
      if (res.data.data.beritaResponses.length > 0) {
        setData(res.data.data.beritaResponses);
        setPostMedias(res.data.data.beritaResponses.postMedias[0]);
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
  }, [isTotalDataShow]);

  return (
    <View>
      <Header
        onPressBack={() => navigation.navigate('Home')}
        type={'back'}
        namePathBack={'Berita'}
        justifyContentTitle="flex-start"
      />
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          width: '100%',
          alignItems: 'center',
        }}>
        <ScrollView style>
          {data?.length === 0 && dataNull === 'notnull' ? (
            <ActivityIndicator size="large" style={{marginTop: 20}} />
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
          {data.map((item, i) => (
            <CardListNews
              key={i}
              title={item.title}
              date={item.tanggal}
              postExcerpt={item.postExcerpt}
              id={item?.id}
              fileName={item?.postMedias[0]?.mediaFile}
              navigation={navigation}
              type={'berita'}
            />
          ))}
          {data?.length > 0 ? (
            <View
              style={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'row',
                width: '100%',
                marginBottom: 100,
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
                  }}>
                  Load More
                </Text>
              </TouchableOpacity>
            </View>
          ) : null}
        </ScrollView>
      </View>
    </View>
  );
};

export default Berita;
