import {
  Text,
  View,
  StyleSheet,
  TextInput,
  ScrollView,
  Dimensions,
  Button,
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
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../stores/slices/CounterSlice";

const PaddingLayout = 20;
const ThreeColumnWidth = Dimensions.get("window").width / 2.5 - PaddingLayout;

const SwiperHome = () => {
  const BackgrounSwiperHeight = 150;
  return (
    <>
      <LinearBackground
        colors={[toscaColor, primary]}
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
        <View
          style={{
            flexDirection: "row",
            justifyContent: "start",
            alignItems: "center",
            top: 80,
            marginHorizontal: 30,
            gap: 3,
            backgroundColor: 'white',
            paddingHorizontal: 10,
            borderRadius: 15,
            borderColor: "#F0F0F0",
            borderWidth: 2,
          }}
        >
          <FontAwesome name="search" size={30} color={"#808080"} />
          <TextInput style={styles.inputCari} placeholder="Search"></TextInput>
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
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
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
        >
          <Text>{count}</Text>
          <Button onClick={() => dispatch(increment())} title="Tambah"></Button>
        </View>
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
    padding: 8,
    width: 300,
    fontFamily: "Montserrat",
    position: "relative",
    fontSize: 17,
    zIndex: 10,
    backgroundColor: "white",
    borderRadius: 15,
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
