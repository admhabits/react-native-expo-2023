/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import {CardPengumuman, Header} from 'components';
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {BaseUrl} from '../../utils/Constants';

const Pengumuman = ({navigation}) => {
  const [data, setData] = useState([]);
  const [isTotalDataShow, setTotalDataShow] = useState(20);
  const [isFilterData, setFilterData] = useState([]);
  const [dataNull, setDataNull] = useState('notnull');

  const getData = () => {
    console.log('get data pengumuman');
    try {
      const get = fetch(
        BaseUrl + '/api/public/pengumuman?search=&limit=10&offset=0',
        {
          method: 'GET',
          headers: {
            Accept: 'application/json',
          },
        },
      )
        .then(response => response.json())
        .then(data => {
          const { announcementList } = data.data;
          console.log("data pengumuman :" + announcementList);
          if (announcementList.length !== 0) {
            setData(announcementList);
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
        namePathBack={'Pengumuman'}
        justifyContentTitle="flex-start"
      />
      <View style={styles.header}>
        <TextInput style={styles.textInput} placeholder="Pencarian" />
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          width: '100%',
          alignItems: 'center',
        }}>
        <ScrollView>
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
              <CardPengumuman
                key={i}
                title={item.title}
                date={item.tanggal}
                images={item.fileName}
              />
            ))}
            {isFilterData?.length > 0 ? (
              <View
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  flexDirection: 'row',
                  width: '100%',
                  marginBottom: 200,
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
const styles = StyleSheet.create({
  header: {
    marginTop: 10,
    paddingHorizontal: '3%',
  },
  textInput: {
    width: '100%',
    borderColor: '#28A297',
    borderRadius: 5,
    borderWidth: 1,
    height: 30,
    fontSize: 11,
    padding: 8,
  },
  subHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  textSubHeader: {
    fontSize: 12,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  },
  button: {
    backgroundColor: 'blue',
    width: 35,
    height: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButton: {
    color: 'white',
    fontSize: 6,
  },
});

export default Pengumuman;
