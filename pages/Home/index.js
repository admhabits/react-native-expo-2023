import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useEffect } from "react";
import LayoutScreen from "~/components/Layout";
import { textPrimary } from "~/components/configs/Colors";
import { useDispatch, useSelector } from "react-redux";
import { increment, incrementByAmount } from "~/stores/slices/CounterSlice";
import SwiperHome from "./Swiper";
import { ThreeColumnWidth, PaddingLayout } from "~/components/configs/Layout";

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
  const dispatch = useDispatch();
  const username = useSelector((state) => state.auth.user?.username);
  if(username != 'undefined') console.log("\n Login User as : ", username);

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
          <TouchableOpacity onPress={() => dispatch(incrementByAmount(5))}>
            <Text>Hello {username}</Text>
          </TouchableOpacity>
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
