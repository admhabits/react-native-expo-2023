import React, { useEffect, useRef } from 'react';
import { View, ScrollView, Dimensions, StyleSheet, Image } from 'react-native';

import { Slide1, Slide2 } from "../configs/Images";

const { width } = Dimensions.get('window');

const SwiperComponent = () => {
    const scrollViewRef = useRef();

    useEffect(() => {
        const interval = setInterval(() => {
          if (scrollViewRef.current) {
            // Calculate the next page index based on your logic
            const nextPageIndex = 1; // Example: scroll to the second page
            const xOffset = nextPageIndex * width;
            scrollViewRef.current.scrollTo({ x: xOffset, animated: true });
          }
        }, 5000); // Auto-scroll every 5 seconds (adjust the interval as needed)
    
        return () => clearInterval(interval); // Clean up interval on component unmount
      }, []);
  return (
    <ScrollView
      horizontal
      pagingEnabled
      nestedScrollEnabled
      showsHorizontalScrollIndicator={false}
      ref={scrollViewRef}
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

