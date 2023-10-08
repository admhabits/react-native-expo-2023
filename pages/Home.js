import { Text, View, StyleSheet } from "react-native";
import React from "react";
import LayoutScreen from "../components/Layout";
import { ScrollView } from "react-native-gesture-handler";
import SwiperComponent from "../components/Swiper";
import SwiperLib from "../components/Swiper/SwiperLib";
import { LinearBackground } from "../components/configs/LinearBackground";

const Home = ({ navigation }) => {
  const BackgrounSwiperHeight = 160;
  return (
    <LayoutScreen statusBar="#FFF" navigation={navigation}>
      <ScrollView style={{ marginTop: -1, }}>
        <LinearBackground
          style={{
            backgroundColor: "darkgreen",
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
