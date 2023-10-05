/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import { Header } from 'components';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Text, TouchableOpacity, View, useWindowDimensions, StyleSheet, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { BaseUrl } from '../../utils/Constants';
import { iconCalender, iconCalenderWhite, thumbnailVideo, thumbnailVideoHD, thumbnailVideoOri } from 'configs/Images';
// import VideoPlayer from 'react-native-video-player';
import { VideoPlayer } from 'shared';
import moment from 'moment';
import LinearGradient from 'react-native-linear-gradient';
import axios from 'axios';

const GaleriVidio = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [isTotalDataShow, setTotalDataShow] = useState(6);
  const [sourceVideo, setSourceVideo] = useState(null);
  const [isFilterData, setFilterData] = useState([]);
  const [dataNull, setDataNull] = useState('notnull');
  const { width } = useWindowDimensions();

  const getData = () => {
    axios.get(BaseUrl + '/api/public/video?limit=10&offset=0')
      .then(response => {
        const { videoResponses } = response.data.data;
        setData(videoResponses)
        const videos = videoResponses[0];

        setSourceVideo({
          uri: videos.fileName,
          title: videos.title,
          date: videos.tanggal,
          id: videos.id
        })
      })
      .catch(error => {
        console.log(error)
      })
  };

  useEffect(() => {
    console.log(data);
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
        namePathBack={'Galeri Vidio'}
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

        <View
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>


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
          <View style={{ marginHorizontal: 20, marginVertical: 0, }}>
            <View style={{ ...styles.wrapperPlayer, width: width, marginBottom: 5, }}>
              {
                sourceVideo ? (
                  <VideoPlayer
                    video={{ uri: `${BaseUrl}/storage/portal/images/galleries/video/${sourceVideo.id}/${sourceVideo.uri}` }}
                    mainColor={'#29166F'}
                  />
                  // <VideoPlayer
                  //   video={{ uri: `${BaseUrl}/storage/portal/images/galleries/video/${sourceVideo.id}/${sourceVideo.uri}` }}
                  //   videoWidth={1600}
                  //   videoHeight={900}
                  //   thumbnail={{ uri: 'https://i.picsum.photos/id/866/1600/900.jpg' }}
                  // />
                ) : (
                  <TouchableOpacity activeOpacity={0.6}>
                    <Image source={thumbnailVideoHD} style={{ width: '100%', height: 200 }} />
                  </TouchableOpacity>
                )
              }

            </View>
            {/* <TouchableOpacity activeOpacity={0.5}> */}
              <LinearGradient
                colors={['#29166F', 'rgba(41, 22, 111, 0.3)']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.playStatus}
              >
                {
                  sourceVideo !== null ? (<>
                    <Text style={{ fontSize: 16, fontFamily: 'Montserrat-Regular', color: 'white', fontWeight: '700' }}>{sourceVideo.title}</Text>
                    <View style={{ display: 'flex', flexDirection: 'row', marginVertical: 5, alignItems: 'center' }}>
                      <Image
                        source={iconCalenderWhite}
                        style={{
                          width: 10,
                          height: 10,
                          marginRight: 6,
                        }}
                      />
                      <Text style={{ fontSize: 12, fontStyle: 'italic', color: 'white' }}>
                        {moment(sourceVideo.date).format('dddd YYYY-MM-DD')}
                      </Text>
                    </View>
                  </>
                  ) : (null)
                }
              </LinearGradient>
            {/* </TouchableOpacity> */}
            <ScrollView style={{ height: useWindowDimensions().height / 2, marginVertical: 8, }} showsVerticalScrollIndicator={false}>
              {data?.length === 0 && dataNull === 'notnull' ? (
                <ActivityIndicator size="large" style={{ marginTop: 150 }} />
              ) : null}
              {isFilterData.map((item, i) => (
                <TouchableOpacity
                  onPress={() => setSourceVideo({
                    uri: item.fileName,
                    title: item.title,
                    date: item.tanggal,
                    id: item.id
                  })}
                  activeOpacity={0.5} key={i}>
                  <View style={{ display: 'flex', flexDirection: 'row', marginVertical: 10, backgroundColor: 'white', padding: 10, }} key={i}>
                    <View style={styles.thumbnail}>
                      <Image source={thumbnailVideo} style={{ width: '100%', height: 75 }} />
                    </View>
                    <View style={{ ...styles.title, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <Text style={{ fontSize: 12.5, textTransform: 'capitalize', }}>{item?.title}</Text>
                      <View style={{ display: 'flex', flexDirection: 'row', marginVertical: 5, alignItems: 'center' }}>
                        <Image
                          source={iconCalender}
                          style={{
                            width: 10,
                            height: 10,
                            marginRight: 6,
                          }}
                        />
                        <Text style={{ fontSize: 12, fontStyle: 'italic' }}>
                          {moment(item?.tanggal).format('dddd YYYY-MM-DD')}
                        </Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
              <View>
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
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapperPlayer: {
    backgroundColor: 'black',
    // borderRadius: 5,
    height: 200,
    marginHorizontal: -5,
  },
  thumbnail: {
    width: 100,
    height: 75,
    backgroundColor: '#CACACA',
    flex: 1.2,
    marginRight: 20,
  },
  title: {
    flex: 2,
  },
  playStatus: {
    // marginTop: -5,
    marginBottom: 2,
    paddingVertical: 8,
    paddingHorizontal: 15,
    // borderRadius: 5,
    height: 80,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around'
  }
})
export default GaleriVidio;

