import {
  Text,
  View,
  StyleSheet,
  TextInput,
  ScrollView,
  Dimensions,
} from "react-native";
import React from "react";
import LayoutScreen from "../components/Layout";
import SwiperLib from "../components/Swiper/SwiperLib";
import { LinearBackground } from "../components/configs/LinearBackground";
import FontAwesome from "@expo/vector-icons/Ionicons";
import {
  darkPrimary,
  textPrimary,
  secondary,
  toscaColor,
  primary,
} from "../components/configs/Colors";

const PaddingLayout = 20;
const ThreeColumnWidth = Dimensions.get("window").width / 2.5 - PaddingLayout;

const SwiperHome = () => {
  const BackgrounSwiperHeight = 150;
  return (
    <>
      <LinearBackground
        colors={[toscaColor,  primary]}
        style={{
          backgroundColor: "darkgreen",
          opacity: 0.8,
          height: BackgrounSwiperHeight,
        }}
      ></LinearBackground>
      <View
        style={{
          backgroundColor: "#F0F0F0",
          height: BackgrounSwiperHeight,
        }}
      >
        <View style={{ flexDirection: 'column', justifyContent: 'center'}}>
          <TextInput style={styles.inputCari} placeholder="Search"></TextInput>
          <FontAwesome name="search" size={30} color={"#808080"} style={{ top: 34, left: 42}}/>
        </View>
      </View>
      <View
        style={{
          height: 200,
          padding: 20,
          marginTop: 20,
          position: "absolute",
        }}
      >
        <SwiperLib />
      </View>
    </>
  );
};

const UnitKerja = () => {
  return (
    <View
      style={{
        height: 200,
        backgroundColor: "white",
        marginTop: 15,
        padding: 20,
      }}
    >
      <Text style={styles.textHeading}>Unit Kerja</Text>
      <ScrollView horizontal>
        <View style={{ paddingTop: 20, gap: 20, flexDirection: "row" }}>
          <View style={styles.cardHome}></View>
          <View style={styles.cardHome}></View>
          <View style={styles.cardHome}></View>
        </View>
      </ScrollView>
    </View>
  );
};

const Home = ({ navigation }) => {
  return (
    <LayoutScreen statusBar={textPrimary} navigation={navigation}>
      <ScrollView style={{ marginTop: -1 }}>
        <SwiperHome />
        <View
          style={{
            borderTopLeftRadius: 24,
            borderTopRightRadius: 24,
            height: 110,
            backgroundColor: "white",
            marginTop: 0,
            padding: PaddingLayout,
          }}
        ></View>
        <UnitKerja />
      </ScrollView>
    </LayoutScreen>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "Montserrat",
  },
  inputCari: {
    height: 50,
    borderRadius: 15,
    borderColor: "#F0F0F0",
    borderWidth: 2,
    padding: 15,
    paddingHorizontal: 50,
    fontFamily: "Montserrat",
    position: "relative",
    fontSize: 17,
    marginHorizontal: 30,
    top: 75,
    backgroundColor: "white",
  },
  cardHome: {
    height: 110,
    width: ThreeColumnWidth,
    backgroundColor: "#F0F0F0",
    flex: 1,
    borderRadius: 8,
  },
  textHeading: {
    fontFamily: "Montserrat",
    textTransform: "capitalize",
    fontSize: 20,
    fontWeight: "bold",
    color: textPrimary,
  },
});

export default Home;
