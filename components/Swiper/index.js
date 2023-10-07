import React from 'react';
import { View, ScrollView, Dimensions, StyleSheet, Image } from 'react-native';

import { Slide1, Slide2 } from "../configs/Images";

const { width } = Dimensions.get('window');

const SwiperComponent = () => {
  return (
    <ScrollView
      horizontal
      pagingEnabled
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
      {/* Add more slides as needed */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    width: width, // Set the width of the scrollView to screen width
  },
  slide: {
    width: width, // Each slide occupies the full screen width
    // Additional styling for your slides
  },
  image: {
    width: '100%',
    height: 200,
  }
});

export default SwiperComponent;

