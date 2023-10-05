/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import axios from 'axios';
import { CardListNews, Header } from 'components';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { BaseUrl } from '../../utils/Constants';

const SiaranPers = ({ navigation }) => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const [data, setData] = useState([]);
  const [isTotalDataShow, setTotalDataShow] = useState(20);
  const [isFilterData, setFilterData] = useState([]);
  const [dataNull, setDataNull] = useState('notnull');

  const getData = () => {
    console.log('axios get data siaran pers');
    axios.get(`${BaseUrl}/api/public/berita/siaran-pers`)
      .then(res => {
        setData(res.data.data.postsResponses);
        setDataNull('notnull');
      })
      .catch(function (error) {
        console.log('error', error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setFilterData(data.slice(0, isTotalDataShow));
  }, [isTotalDataShow, data]);

  return (
    <View>
      <Header
        onPressBack={() => navigation.navigate('Home')}
        type={'back'}
        namePathBack={'Siaran Pers'}
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
          {isFilterData?.length === 0 && dataNull === 'notnull' ? (
            <ActivityIndicator size="large" style={{ marginTop: 20 }} />
          ) : null}

          {isFilterData?.length === 0 && dataNull === 'null' ? (
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
          {isFilterData.map((item, i) => (
            <CardListNews
              key={i}
              navigation={navigation}
              title={item.postTitle}
              date={item.tanggal}
              id={item.postId}
              fileName={item.fileName}
              postExcerpt={item.content}
              type={'siaran'}
            />
          ))}
          {isFilterData?.length > 0 ? (
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

export default SiaranPers;
