import React from 'react';
import { View, ScrollView, Dimensions, StyleSheet, Image } from 'react-native';

import { Slide1, Slide2 } from "../configs/Images";

const { width } = Dimensions.get('window');

const SwiperComponent = () => {
  return (
    <ScrollView
      horizontal
      pagingEnabled
      nestedScrollEnabled
      showsHorizontalScrollIndicator={false}
      style={styles.scrollView}
    >
      {/* Content of each swiper slide */}
      <View style={styles.slide}>
        <Image source={Slide1} style={styles.image}/>
      </View>
      <View style={styles.slide}>
        {/* Your content for the second slide */}
        <Image source={Slide2} style={styles.image}/>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    width: width, // Set the width of the scrollView to screen width
    maxHeight: 200,
    backgroundColor: 'white',
  },
  slide: {
    width: width, // Each slide occupies the full screen width
  },
  image: {
    width: width,
    height: 200,
    objectFit: 'cover',
  }
});

export default SwiperComponent;

