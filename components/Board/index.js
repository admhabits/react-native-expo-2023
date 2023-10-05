/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  iconTv,
  iconSpeaker,
  iconArrowLeft,
  iconArrowRight,
} from 'configs/Images';
import { Placeholder, PlaceholderLine, PlaceholderMedia, Fade } from 'rn-placeholder';

const Board = props => {
  const { dataMaklumat, dataPengumuman } = props;
  const [isCurrentIndexDataMaklumat, setCurrentIndexDataMaklumat] = useState(0);
  const [isCurrentIndexDataPengumuman, setCurrentIndexDataPengumuman] = useState(0);

  const onHandleArrowLeftMaklumat = () => {
    if (isCurrentIndexDataMaklumat === 0) {
      setCurrentIndexDataMaklumat(dataMaklumat.length - 1);
    } else {
      setCurrentIndexDataMaklumat(isCurrentIndexDataMaklumat - 1);
    }
  };

  const onHandleArrowRightMaklumat = () => {
    if (isCurrentIndexDataMaklumat === dataMaklumat.length - 1) {
      setCurrentIndexDataMaklumat(0);
    } else {
      setCurrentIndexDataMaklumat(isCurrentIndexDataMaklumat + 1);
    }
  };

  const onHandleArrowLeftPengumuman = () => {
    if (isCurrentIndexDataPengumuman === 0) {
      setCurrentIndexDataPengumuman(dataPengumuman.length - 1);
    } else {
      setCurrentIndexDataPengumuman(isCurrentIndexDataPengumuman - 1);
    }
  };

  const onHandleArrowRightPengumuman = () => {
    if (isCurrentIndexDataPengumuman === dataPengumuman.length - 1) {
      setCurrentIndexDataPengumuman(0);
    } else {
      setCurrentIndexDataPengumuman(isCurrentIndexDataPengumuman + 1);
    }
  };

  return (
    <View>

      <View style={styles.outer}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={['#B41313', '#FF5454']}
          style={styles.board1}>
          <View
            style={{
              height: '50%',
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View style={{ display: 'flex', flexDirection: 'row' }}>
              <Image
                source={iconTv}
                style={{ width: 15, height: 15, marginRight: 5 }}
              />
              <Text style={{ color: '#fff', fontWeight: 'bold' }}>Maklumat :</Text>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row' }}>
              <TouchableOpacity onPress={() => onHandleArrowLeftMaklumat()}>
                <Image
                  source={iconArrowLeft}
                  style={{ width: 10, height: 15, marginRight: 5 }}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => onHandleArrowRightMaklumat()}>
                <Image
                  source={iconArrowRight}
                  style={{ width: 10, height: 15, marginRight: 5 }}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              height: '50%',
            }}>
            {
              dataMaklumat.length === 0 ? (
                <Placeholder Animation={Fade}>
                  <PlaceholderLine width={90} style={{ opacity: 0.2, marginTop: 10, height: 10, borderRadius: 2 }} />
                </Placeholder>
              ) : (
                <TouchableOpacity
                  style={{ marginVertical: 5 }}
                  onPress={() => console.log('Page Maklumate')}
                >
                  <Text style={{ fontSize: 10, color: '#fff', textTransform: 'uppercase' }}>
                    {dataMaklumat[isCurrentIndexDataMaklumat]?.title.length > 28 ? dataMaklumat[isCurrentIndexDataMaklumat]?.title.slice(0, 25) + '...' : dataMaklumat[isCurrentIndexDataMaklumat]?.title}
                  </Text>
                </TouchableOpacity>

              )
            }

          </View>
        </LinearGradient>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={['#2D29F5', '#1815A3']}
          style={styles.board2}>
          <View
            style={{
              height: '50%',
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View style={{ display: 'flex', flexDirection: 'row' }}>
              <Image
                source={iconSpeaker}
                style={{ width: 15, height: 15, marginRight: 5 }}
              />
              <Text style={{ color: '#fff', fontWeight: 'bold' }}>
                Pengumuman :
              </Text>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row' }}>
              <TouchableOpacity onPress={() => onHandleArrowLeftPengumuman()}>
                <Image
                  source={iconArrowLeft}
                  style={{ width: 10, height: 15, marginRight: 5 }}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => onHandleArrowRightPengumuman()}>
                <Image
                  source={iconArrowRight}
                  style={{ width: 10, height: 15, marginRight: 5 }}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              height: '50%',
            }}>

            {
              dataPengumuman.length === 0 ? (
                <Placeholder Animation={Fade}>
                  <PlaceholderLine width={90} style={{ opacity: 0.2, marginTop: 10, height: 10, borderRadius: 2 }} />
                </Placeholder>
              ) : (
                <TouchableOpacity
                  style={{ marginVertical: 5 }}
                  onPress={() => console.log('Page Pengumuman')}
                >
                  <Text style={{ fontSize: 10, color: '#fff', textTransform: 'uppercase' }}>
                    {dataPengumuman[isCurrentIndexDataPengumuman]?.title.length > 25 ? dataPengumuman[isCurrentIndexDataPengumuman]?.title.slice(0, 25) + '...' : dataPengumuman[isCurrentIndexDataPengumuman]?.title}
                  </Text>
                </TouchableOpacity>
              )
            }

          </View>
        </LinearGradient>
      </View >
    </View >
  );
};

const styles = StyleSheet.create({
  outer: {
    // position: 'absolute',
    width: '100%',
    height: 50,
    marginTop: -20,
    marginRight: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  board1: {
    backgroundColor: '#000',
    width: '46%',
    height: 50,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: 10,
  },
  board2: {
    backgroundColor: '#000',
    width: '46%',
    height: 50,
    display: 'flex',
    flexDirection: 'column',
    paddingHorizontal: 5,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
});

export default Board;
