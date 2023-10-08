import React from "react";
import { ScrollView, View, Text, StyleSheet, Image, Dimensions } from "react-native";
import Swiper from "react-native-swiper";
import { Slide1, Slide2 } from "../configs/Images";

const { width } = Dimensions.get('window');

const SwiperLib = () => {
  return (
    <Swiper
      loop={true} // Enable looping
      autoplay={true} // Enable auto-scrolling
      autoplayTimeout={3} // Set the auto-scrolling interval in seconds
      showsPagination={true} // Show pagination dots
    >
      <Image source={Slide1} style={styles.slide} />
      <Image source={Slide2} style={styles.slide} />
      {/* Add more slides as needed */}
    </Swiper>
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightblue",
    maxHeight: 250,
    width: width - 40,
    borderRadius: 20,
    objectFit: 'contain'
  },
});

export default SwiperLib;
