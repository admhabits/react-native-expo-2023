import React from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native";
import Swiper from "react-native-swiper";
import { Slide1, Slide2 } from "../configs/Images";

const { width } = Dimensions.get("window");

const SwiperLib = () => {
  return (
    <Swiper
      loop={true} // Enable looping
      autoplay={true} // Enable auto-scrolling
      autoplayTimeout={3} // Set the auto-scrolling interval in seconds
      showsPagination={true} // Show pagination dots
      style={styles.swiper}
    >
      <View style={{ ...styles.slide, position: "relative" }}>
        <Image source={Slide1} style={{ ...styles.slide }} />
      </View>
      <View style={{ ...styles.slide, position: "relative" }}>
        <Image source={Slide2} style={styles.slide} />
      </View>
    </Swiper>
  );
};

const styles = StyleSheet.create({
  swiper: {
    marginTop: 0,
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightblue",
    maxHeight: 250,
    width: width - 60,
    borderRadius: 20,
    objectFit: "contain",
    marginHorizontal: 10,
  },
});

export default SwiperLib;
