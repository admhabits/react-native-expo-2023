import { Text, View, StyleSheet } from "react-native";
import React from "react";
import LayoutScreen from "../components/Layout";
import { ScrollView } from "react-native-gesture-handler";
import SwiperComponent from "../components/Swiper";
import SwiperLib from "../components/Swiper/SwiperLib";
import { LinearBackground } from "../components/configs/LinearBackground";
import { primary, secondary } from "../components/configs/Colors";

const SwiperHome = () => {
  const BackgrounSwiperHeight = 160;
  return (
    <>
      <LinearBackground
        colors={[secondary, secondary]}
        style={{
          backgroundColor: "darkgreen",
          opacity: 0.7,
          height: BackgrounSwiperHeight,
        }}
      ></LinearBackground>
      <View
        style={{
          backgroundColor: "white",
          height: BackgrounSwiperHeight,
        }}
      ></View>
      <View
        style={{
          height: 200,
          padding: 20,
          marginTop: 30,
          position: "absolute",
        }}
      >
        <SwiperLib />
      </View>
    </>
  );
};

const Home = ({ navigation }) => {
  return (
    <LayoutScreen statusBar="#FFF" navigation={navigation}>
      <ScrollView style={{ marginTop: -1 }}>
        <SwiperHome />
        <View
          style={{ height: 200, backgroundColor: "white", marginTop: 15 }}
        ></View>
      </ScrollView>
    </LayoutScreen>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "Montserrat",
  },
});

export default Home;
