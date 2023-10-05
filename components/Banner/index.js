/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { SliderBox } from 'shared';
import { Board } from 'components';
// import { Slide1, Slide2 } from 'configs/Images';

const Banner = props => {
  const { dataBoardMaklumat, dataBoardPengumuman, sliderList, BaseUrl } = props;
  let images = [];
  let content = [];
  sliderList.map((val, key) => {
    console.log("DATA SLIDER HOME", val.content)
    const url = `${BaseUrl}/storage/portal/images/slider/${val.id}/${val.fileName}`;
    images.push(url);
    content.push(val.content)
  })
  console.log('cek data maklumatss', dataBoardMaklumat);
  //console.log('cek data images banner', images);

  return (
    <>
      <SliderBox
        images={images}
        title={content}
        // onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
        // currentImageEmitter={index => console.warn(`current pos is: ${index}`)}
        sliderBoxHeight={150}
        autoplay
        imageLoadingColor='#E91E63'
        circleLoop
        dotStyle={{
          width: 0,
          height: 0,
          borderRadius: 15,
          // marginHorizontal: 10,
          padding: 0,
          margin: 0,
        }}
      />
      <Board
        dataMaklumat={dataBoardMaklumat}
        dataPengumuman={dataBoardPengumuman}
      />

    </>
  );
};

const styles = StyleSheet.create({

});

export default Banner;
