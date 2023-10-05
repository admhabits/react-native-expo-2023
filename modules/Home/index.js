/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Keyboard,
} from 'react-native';
import {
  Header,
  BaseContainer,
  Banner,
  Menu,
  Carousell,
  CardBerita,
  Navigasi,
  ModalMenu,
} from 'components';
import LinearGradient from 'react-native-linear-gradient';
import { berita1, berita2, berita3, iconCalender } from 'configs/Images';
import { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { postLogout } from '../../redux/login/login.actions';
import { BaseUrl } from '../../utils/Constants';
import moment from 'moment';
import axios from 'axios';
import { Placeholder, PlaceholderMedia, PlaceholderLine, Fade } from 'rn-placeholder';
import BoardPlaceHolder from 'components/Banner/BoardPlaceHolder';

const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  const [isVisible, setIsVisible] = useState(false);
  const { login } = useSelector(state => state);
  const [isOpen, setIsOpen] = useState(false);
  const keyboardShowListener = useRef(null);
  const keyboardHideListener = useRef(null);
  const [isDataMaklumat, setDataMaklumat] = useState([]);
  const [isDataPengumuman, setDataPengumuman] = useState([]);
  const [isDataBerita, setDataBerita] = useState([]);
  const [isDataSiaran, setDataSiaran] = useState([]);
  const [sliderList, setSliderList] = useState([]);

  useEffect(() => {
    keyboardShowListener.current = Keyboard.addListener('keyboardDidShow', () =>
      setIsOpen(true),
    );
    keyboardHideListener.current = Keyboard.addListener('keyboardDidHide', () =>
      setIsOpen(false),
    );
    // return () => {
    //   keyboardShowListener.current.remove();
    //   keyboardHideListener.current.remove();
    // };
  }, []);

  const getSliderList = () => {
    axios.get(BaseUrl + `/api/public/home/slider?limit=5&offset=0`)
    .then(res => {
      // console.log('cek data Slider LIst', data);
      setSliderList(res.data.sliderList);
    })
    .catch(function (error) {
      console.log('error', error);
      throw error;
    });
  }

  const getDataMaklumat = () => {
    axios.get(BaseUrl + `/api/public/maklumat-pelayaran?search=&limit=5&offset=0`)
      .then(res => {
        // console.log('cek data maklumatssd', data);
        setDataMaklumat(res.data.data.maklumatResponses);
      })
      .catch(function (error) {
        console.log('error', error);
      });
  };

  const getDataPengumuman = () => {
    console.log('get data pengumuman');
    axios.get(BaseUrl + '/api/public/pengumuman?search=&limit=5&offset=0')
      .then(res => {
        const { announcementList } = res.data.data;
        // console.log(JSON.stringify(announcementList, null, 3));
        setDataPengumuman(announcementList);
      })
      .catch(function (error) {
        console.log('error', error);
      });
  };

  const getDataBerita = () => {
    // console.log('get data');
    axios.get(BaseUrl + `/api/public/berita?limit=5&offset=0`)
      .then(res => {
        // console.log("DATA Berita CHECKING GET", JSON.stringify(res.data, null, 3))
        setDataBerita(res.data.data.beritaResponses);
      })
      .catch(function (error) {
        console.log('error', error);
      });
  };

  const getDataSiaran = () => {
    // console.log('get data');
    axios.get(BaseUrl + `/api/public/berita/siaran-pers`)
      .then(res => {
        // console.log("DATA SIARAN PERS CHECKING GET", JSON.stringify(res.data, null, 3))
        setDataSiaran(res.data.data.postsResponses);
      })
      .catch(function (error) {
        console.log('error', error);
      });
  };

  useEffect(() => {
    if (login?.data.remember === false) {
      dispatch(postLogout());
    }
    getDataMaklumat();
    getDataPengumuman();
    getDataBerita();
    getDataSiaran();
    getSliderList();
  }, []);

  const renderItemBerita = item => {
    // console.log('render item berita', JSON.stringify(item, null, 3));
    const { id, postMedias, title, postExcerpt } = item.item;
    const baseURLPost = `${BaseUrl}/storage/images/post/${id}/md-${postMedias[0]?.mediaFile}`;
    return (
      <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('DetailPost', {
        id, postMedias, title, postExcerpt, baseURLPost, type: 'berita'
      })}>
        <LinearGradient
          colors={['#FA8072', 'rgba(250, 128, 114, 0.3)']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.outerBerita}
        >
          <View style={styles.image}>
            <Image
              style={{ width: '100%', height: '100%', resizeMode: 'stretch', borderRadius: 8 }}
              source={{
                uri: baseURLPost,
              }}
            />
          </View>
          <View style={styles.keterangan}>
            <View style={{ display: 'flex', flexDirection: 'row' }}>
              <Image
                source={iconCalender}
                style={{
                  width: 10,
                  height: 10,
                  marginRight: 2,
                }}
              />
              <Text style={{ fontSize: 10, fontStyle: 'italic' }}>
                {moment(item.item.tanggal).format('dddd YYYY-MM-DD')}
              </Text>
            </View>
            <Text
              style={{
                fontSize: 11.5,
                fontWeight: 'bold',
                fontFamily: 'Montserrat-Regular',
                marginVertical: 5,
                textTransform: 'uppercase'
              }}>
              {title.length > 50 ? title.slice(0, 50) + '...' : title}
            </Text>
            <Text style={{ fontSize: 8, fontFamily: 'Montserrat-Regular' }}>
              {postExcerpt.length > 125 ? postExcerpt.slice(0, 125) + '...' : postExcerpt}
            </Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    );

  };

  const renderItemSiaran = item => {
    const { postId, fileName, postTitle, content } = item.item;
    const baseURLPost = `${BaseUrl}/storage/images/post/${postId}/md-${fileName}`;
    // console.log(baseURLPost)
    return (
      <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('DetailPost', {
        id: postId,
        postMedias: fileName,
        title: postTitle,
        postExcerpt: content,
        baseURLPost,
        type: 'siaran'
      })}>
        <LinearGradient
          colors={['#FFFFFF', '#FFAA4C', 'rgba(255, 170, 76, 1)']}
          start={{ x: 1, y: -2 }}
          end={{ x: 0, y: 6 }}
          style={styles.outerSiaran}>
          <View style={{ display: 'flex', flexDirection: 'row', marginVertical: 5 }}>
            <Image
              source={iconCalender}
              style={{
                width: 10,
                height: 10,
                marginRight: 2,
              }}
            />
            <Text style={{ fontSize: 10, fontStyle: 'italic' }}>
              {moment(item.item.tanggal).format('dddd YYYY-MM-DD')}
            </Text>
          </View>
          <Text
            style={{
              fontSize: 12,
              fontWeight: 'bold',
              fontFamily: 'Montserrat-Regular',
              textTransform: 'uppercase'
            }}>
            {item.item.postTitle}
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    )
  };

  const dataBerita = [
    {
      text: 'asas',
      image: berita1,
    },
    {
      text: 'asas',
      image: berita2,
    },
    {
      text: 'asas',
      image: berita3,
    },
    {
      text: 'asas',
      image: berita1,
    },
    {
      text: 'asas',
      image: berita2,
    },
    {
      text: 'asas',
      image: berita3,
    },
  ];

  const onDirectPath = value => {
    if (value !== undefined) {
      navigation.navigate(value);
    }
  };


  return (
    <>
      <Header />

      <BaseContainer>
        {
          sliderList.length === 0 ? (
            <>
              <Placeholder Animation={Fade}>
                <View style={{ flexDirection: 'row', backgroundColor: '#fff', height: 150, padding: 15, borderBottomWidth: 0.5, borderBottomColor: '#cacaca' }}>
                  <PlaceholderMedia style={{
                    zIndex: 1000,
                    position: 'absolute',
                    right: 0,
                    marginHorizontal: 10,
                    marginTop: 40,
                    width: '70%',
                    marginLeft: 50,
                    padding: 4,
                    height: 50,
                    opacity: 0.5,
                    borderRadius: 4,
                  }} size={0} />

                </View>
              </Placeholder>
              <BoardPlaceHolder />
            </>
          ) :
            (

              <Banner
                dataBoardMaklumat={isDataMaklumat}
                dataBoardPengumuman={isDataPengumuman}
                sliderList={sliderList}
                BaseUrl={BaseUrl}
              />
            )
        }



        <View style={{ marginTop: 20 }}>
          {
            isDataBerita.length === 0 && isDataMaklumat.length === 0 && sliderList.length === 0 && isDataSiaran.length === 0 ?
              (
                <View style={styles.outer}>
                  <View style={styles.inner}>
                    <TouchableOpacity style={styles.menu} >
                      <Placeholder Animation={Fade} style={{ ...styles.menu, marginTop: -15, opacity: 0.4 }}>
                        <PlaceholderMedia style={{ width: 30, height: 30, borderRadius: 90 }} />
                      </Placeholder>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menu} >
                      <Placeholder Animation={Fade} style={{ ...styles.menu, marginTop: -15, opacity: 0.4 }}>
                        <PlaceholderMedia style={{ width: 30, height: 30, borderRadius: 90 }} />
                      </Placeholder>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menu}>
                      <Placeholder Animation={Fade} style={{ ...styles.menu, marginTop: -15, opacity: 0.4 }}>
                        <PlaceholderMedia style={{ width: 30, height: 30, borderRadius: 90 }} />
                      </Placeholder>
                    </TouchableOpacity>

                    <TouchableOpacity>
                      <Placeholder Animation={Fade} style={{ ...styles.menu, marginTop: -15, opacity: 1, backgroundColor: '#28A297', }}>
                        <PlaceholderMedia
                          style={{
                            width: 60,
                            height: 60,
                            borderRadius: 29,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            // backgroundColor: '#28A297',
                            margin: 5,
                            marginTop: -15
                          }} />
                      </Placeholder>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menu} >
                      <Placeholder Animation={Fade} style={{ ...styles.menu, marginTop: -15, opacity: 0.4 }}>
                        <PlaceholderMedia style={{ width: 30, height: 30, borderRadius: 90 }} />
                      </Placeholder>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menu} >
                      <Placeholder Animation={Fade} style={{ ...styles.menu, marginTop: -15, opacity: 0.4 }}>
                        <PlaceholderMedia style={{ width: 30, height: 30, borderRadius: 90 }} />
                      </Placeholder>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menu}>
                      <Placeholder Animation={Fade} style={{ ...styles.menu, marginTop: -15, opacity: 0.4 }}>
                        <PlaceholderMedia style={{ width: 30, height: 30, borderRadius: 90 }} />
                      </Placeholder>
                    </TouchableOpacity>
                  </View>
                </View>
              ) : (
                <Menu
                  onPressProfile={() => navigation.navigate('ProfileHome')}
                  onPressHubungi={() => navigation.navigate('HubungiKami')}
                  onPressPerjanjian={() => navigation.navigate('Perjanjian')}
                  onPressLayanan={() => navigation.navigate('InformasiProsedure')}
                  onPressPeraturan={() => navigation.navigate('Peraturan')}
                  onPressDokumen={() => navigation.navigate('Dokumen')}
                  onPressLainnya={() => {
                    if (isVisible === null) {
                      setIsVisible(true);
                    } else {
                      setIsVisible(!isVisible);
                    }
                  }}
                />
              )
          }


        </View>
        <View style={{ paddingHorizontal: 0 }}>
          <View style={{ marginTop: 10 }}>
            {
              isDataBerita.length === 0 ? (
                <>
                  <Placeholder Animation={Fade} style={{}}>
                    <View
                      style={{
                        width: '100%',
                        marginBottom: 0,
                        marginHorizontal: 15,
                        flexDirection: 'row',
                        justifyContent: 'space-around'
                      }}>
                      <PlaceholderLine
                        style={{
                          height: 12,
                          flex: 6,
                          marginRight: 200,
                          opacity: 0.4,
                          borderRadius: 90,
                        }}
                        width={20}
                      />
                      <PlaceholderLine
                        style={{
                          marginRight: 30,
                          height: 12,
                          opacity: 0.4,
                          borderRadius: 90,
                        }}
                        width={15}
                      />
                    </View>
                  </Placeholder>
                  <Placeholder Animation={Fade}>
                    <View style={{
                      flexDirection: 'row',
                      padding: 10,
                      marginHorizontal: 15,
                      backgroundColor: '#FAFAFA',
                      borderRadius: 5,
                      height: 100,
                    }}>
                      <PlaceholderMedia
                        size={80}
                        style={{
                          borderRadius: 10,
                          height: 80,
                          width: 140,
                          opacity: 0.3,
                          flex: 1,
                        }}
                      />
                      <View style={{ flex: 2, marginHorizontal: 12, }}>
                        <PlaceholderLine width={80} style={{ opacity: 0.4 }} />
                        <PlaceholderLine style={{ opacity: 0.3 }} />
                        <PlaceholderLine style={{ opacity: 0.3 }} width={30} />
                      </View>
                    </View>
                  </Placeholder>
                </>
              ) :
                (
                  <Carousell
                    onPress={() => navigation.navigate('Berita')}
                    renderItem={renderItemBerita}
                    data={isDataBerita}
                    title={'Berita Terbaru'}
                  />
                )
            }


          </View>
          <View style={{ marginTop: 10 }}>
            {
              isDataSiaran.length === 0 ? (
                <>
                  <Placeholder Animation={Fade} style={{}}>
                    <View
                      style={{
                        width: '100%',
                        marginBottom: 0,
                        marginHorizontal: 15,
                        flexDirection: 'row',
                        justifyContent: 'space-around'
                      }}>
                      <PlaceholderLine
                        style={{
                          height: 12,
                          flex: 6,
                          marginRight: 200,
                          opacity: 0.4,
                          borderRadius: 90,
                        }}
                        width={20}
                      />
                      <PlaceholderLine
                        style={{
                          marginRight: 30,
                          height: 12,
                          opacity: 0.4,
                          borderRadius: 90,
                        }}
                        width={15}
                      />
                    </View>
                  </Placeholder>

                  <Placeholder Animation={Fade}>
                    <View style={{
                      flexDirection: 'row',
                      padding: 10,
                      marginHorizontal: 15,
                      backgroundColor: '#FAFAFA',
                      borderRadius: 5,
                      height: 100,
                    }}>
                      <PlaceholderMedia
                        size={80}
                        style={{
                          borderRadius: 10,
                          height: 80,
                          width: 140,
                          opacity: 0.3,
                          flex: 1,
                        }}
                      />
                      <View style={{ flex: 2, marginHorizontal: 12, }}>
                        <PlaceholderLine width={80} style={{ opacity: 0.4 }} />
                        <PlaceholderLine style={{ opacity: 0.3 }} />
                        <PlaceholderLine style={{ opacity: 0.3 }} width={30} />
                      </View>
                    </View>
                  </Placeholder>
                </>
              ) :
                (
                  <Carousell
                    onPress={() => navigation.navigate('SiaranPers')}
                    renderItem={renderItemSiaran}
                    data={isDataSiaran}
                    title={'Siaran Terbaru'}
                  />
                )
            }

          </View>
        </View>
        <View
          style={{
            marginTop: 30,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ScrollView horizontal style={{ marginHorizontal: 15, marginTop: -10 }}>
            {dataBerita.map((item, i) => (
              <CardBerita key={i} image={item.image} length={sliderList.length} />
            ))}
          </ScrollView>
        </View>
      </BaseContainer>
      {isOpen ? null : (
        <Navigasi
          onClickMenuUser={() =>
            login?.data?.token === null
              ? navigation.navigate('Login')
              : navigation.navigate('DashboardAdmin')
          }
          onClickMenuInformasi={() =>
            login?.data?.token === null
              ? navigation.navigate('PermohonanInformasi')
              : navigation.navigate('ListPermohonanInformasi')
          }
        />
      )}

      <ModalMenu
        isVisible={isVisible}
        setVisible={setIsVisible}
        direct={onDirectPath}
      />
    </>
  );
};

const styles = StyleSheet.create({
  outerBerita: {
    backgroundColor: '#fff',
    height: 110,
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginHorizontal: 15,
  },
  image: {
    width: '40%',
    height: '80%',
  },
  keterangan: {
    width: '56%',
    height: '80%',
  },
  outerSiaran: {
    height: 80,
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'column',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginHorizontal: 15,
  },

  outer: {
    position: 'absolute',
    width: '100%',
    height: 50,
    marginTop: 135,
    marginRight: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  outer: {
    width: '100%',
    height: 50,
    display: 'flex',
    alignItems: 'center',
  },
  inner: {
    width: '91%',
    height: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#CACACA',
    flexDirection: 'row',
  },
  menu: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconMenu: {
    width: 20,
    height: 18,
  },
  textMenu: {
    color: '#28A297',
    fontSize: 8,
    fontFamily: 'Roboto-Regular',
  },
});

export default Home;
