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
import {
  ThreeColumnWidth,
  FourColumnWidth,
  PaddingLayout,
} from "~/components/configs/Layout";
import FontAwesome from "~/components/Icons";

const CardMenu = ({
  iconName,
  iconColor,
  iconSize,
  fontSize,
  fontFamily,
  titleCard,
  titleColor,
  backgroundColor,
}) => {
  return (
    <TouchableOpacity style={{ ...styles.cardMenu, backgroundColor }}>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <FontAwesome name={iconName} color={iconColor} size={iconSize} />
        <Text
          style={{
            fontSize,
            fontFamily,
            fontWeight: "bold",
            marginTop: 1,
            color: titleColor,
          }}
        >
          {titleCard}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const MenuHome = () => {
  return (
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
      <View style={{ gap: 10, flexDirection: "row" }}>
        <CardMenu
          iconName={"camera-retro"}
          iconColor={"white"}
          iconSize={30}
          fontSize={12}
          fontFamily={"Inter"}
          titleCard={"Galeri Photo"}
          backgroundColor={"#3C9DE2"}
          titleColor={"white"}
        />

        <CardMenu
          iconName={"info-circle"}
          iconColor={"white"}
          iconSize={30}
          fontSize={12}
          fontFamily={"Inter"}
          titleCard={"Informasi"}
          backgroundColor={"#CB5C5D"}
          titleColor={"white"}
        />
        <CardMenu
          iconName={"file-signature"}
          iconColor={"white"}
          iconSize={30}
          fontSize={12}
          fontFamily={"Inter"}
          titleCard={"Perjanjian"}
          backgroundColor={"#FDA53C"}
          titleColor={"white"}
        />
        <CardMenu
          iconName={"box-open"}
          iconColor={"white"}
          iconSize={30}
          fontSize={12}
          fontFamily={"Inter"}
          titleCard={"Lainnya"}
          backgroundColor={"#0075CB"}
          titleColor={"white"}
        />
      </View>
    </View>
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
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={{ paddingTop: 20, gap: 20, flexDirection: "row" }}>
          <View style={styles.cardHome}></View>
          <View style={styles.cardHome}></View>
          <View style={styles.cardHome}></View>
        </View>
      </ScrollView>
    </View>
  );
};

const BeritaHubla = () => {
  return (
    <View
      style={{
        height: 280,
        backgroundColor: "white",
        marginTop: 15,
        padding: 20,
      }}
    >
      <Text style={styles.textHeading}>Berita Terbaru</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={{ paddingTop: 20, gap: 20, flexDirection: "row" }}>
          <View style={styles.cardBerita}></View>
          <View style={styles.cardBerita}></View>
          <View style={styles.cardBerita}></View>
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
        <MenuHome />
        <BeritaHubla />
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
  cardMenu: {
    height: 60,
    width: FourColumnWidth,
    backgroundColor: "#F0F0F0",
    flex: 1,
    borderRadius: 8,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  cardHome: {
    height: 120,
    width: ThreeColumnWidth,
    backgroundColor: "#F0F0F0",
    flex: 1,
    borderRadius: 8,
  },
  cardBerita: {
    height: 200,
    width: ThreeColumnWidth + 120,
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
