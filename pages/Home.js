import { Text, View, StyleSheet, TextInput, ScrollView, Dimensions } from "react-native";
import React from "react";
import LayoutScreen from "../components/Layout";
import SwiperLib from "../components/Swiper/SwiperLib";
import { LinearBackground } from "../components/configs/LinearBackground";
import { darkPrimary, primary, secondary } from "../components/configs/Colors";

const PaddingLayout    = 20;
const ThreeColumnWidth = Dimensions.get('window').width / 2.5 - PaddingLayout;

const SwiperHome = () => {
  const BackgrounSwiperHeight = 180;
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
      >
        <TextInput style={styles.inputCari} placeholder="Cari..."></TextInput>
      </View>
      <View
        style={{
          height: 200,
          padding: 20,
          marginTop: 50,
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
    <LayoutScreen statusBar={darkPrimary} navigation={navigation}>
      <ScrollView style={{ marginTop: -1 }}>
        <SwiperHome />
        <View
          style={{ height: 200, backgroundColor: "white", marginTop: 15, padding: 20 }}
        >
          <Text style={{ fontFamily: 'Roboto', textTransform: "uppercase", fontSize: 16 }}>Layanan</Text>
          <ScrollView horizontal>
            <View style={{paddingTop: 20, gap: 20, flexDirection: 'row' }}>
              <View style={styles.cardHome}></View>
              <View style={styles.cardHome}></View>
              <View style={styles.cardHome}></View>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </LayoutScreen>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "Montserrat",
  },
  inputCari:{
    height: 50,
    borderRadius: 15,
    borderColor: '#F0F0F0',
    borderWidth: 2,
    padding: 15,
    fontFamily: 'Montserrat',
    fontSize: 14,
    marginHorizontal: 30,
    top: 90
  },
  cardHome: {
    height: 100, 
    width: ThreeColumnWidth, 
    backgroundColor: '#F0F0F0', 
    flex: 1,
    borderRadius: 8
  }
});

export default Home;
