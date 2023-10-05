/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import {CardListGallery, Header} from 'components';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Text, TouchableOpacity, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {CardProfile} from '../../components';
import {BaseUrl} from '../../utils/Constants';

const ProfilePPID = ({navigation}) => {
  const [data, setData] = useState([]);
  const [isTotalDataShow, setTotalDataShow] = useState(20);
  const [isFilterData, setFilterData] = useState([]);
  const [dataNull, setDataNull] = useState('notnull');

  const getData = () => {
    console.log('get data');
    try {
      const get = fetch(BaseUrl + '/api/public/ppid/ppid-profile', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      })
        .then(response => response.json())
        .then(data => {
          if (data.data.ppidList.length > 0) {
            setData(data.data.ppidList);
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
    } catch (error) {}
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
        namePathBack={'Profile PPID'}
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
          <View
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
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
            {isFilterData.map((item, i) => (
              <CardProfile
                key={i}
                title={item.jabatan}
                name={item.name}
                ket={item.description}
                fileName={item.image}
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
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default ProfilePPID;
