import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Image,
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
import { useNavigation } from "@react-navigation/native";
import { toscaColor } from "~/components/configs/Colors";
import { backgroundPrimary } from "~/components/configs/Colors";
import UnitKerja from "./Unitkerja";
import BeritaHubla from "./Berita";
import FeatureMenu from "./Feature";
import FootSection from "./FootSection";

const CardMenu = ({
  iconName,
  iconColor,
  iconSize,
  fontSize,
  fontFamily,
  titleCard,
  titleColor,
  backgroundColor,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={{
        height: 80,
        width: 60,
        justifyContent: "center",
        alignItems: "center",
      }}
      onPress={onPress}
    >
      <View style={{ ...styles.cardMenu, backgroundColor }}>
        <FontAwesome name={iconName} color={iconColor} size={iconSize} />
      </View>
      <Text
        style={{
          fontSize,
          fontFamily,
          fontWeight: "bold",
          marginTop: 4,
          color: titleColor,
        }}
      >
        {titleCard}
      </Text>
    </TouchableOpacity>
  );
};

const HeadlineMenu = () => {
  const navigation = useNavigation();
  const iconSizeCardMenu = 20;
  const heightCardMenuContainer = 190;
  return (
    <View
      style={{
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        height: heightCardMenuContainer,
        backgroundColor: "transparent",
        marginTop: 0,
        padding: PaddingLayout,
      }}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <CardMenu
          iconName={"camera-retro"}
          iconColor={"white"}
          iconSize={iconSizeCardMenu}
          fontSize={12}
          fontFamily={"Inter"}
          titleCard={"Galeri Photo"}
          backgroundColor={"#3C9DE2"}
          titleColor={"#234"}
        />

        <CardMenu
          iconName={"info-circle"}
          iconColor={"white"}
          iconSize={iconSizeCardMenu}
          fontSize={12}
          fontFamily={"Inter"}
          titleCard={"Informasi"}
          backgroundColor={"#CB5C5D"}
          onPress={() => navigation.navigate("VisiMisi")}
          titleColor={"#234"}
        />
        <CardMenu
          iconName={"file-signature"}
          iconColor={"white"}
          iconSize={iconSizeCardMenu}
          fontSize={12}
          fontFamily={"Inter"}
          titleCard={"Perjanjian"}
          backgroundColor={"#FDA53C"}
          titleColor={"#234"}
        />
        <CardMenu
          iconName={"user"}
          iconColor={"white"}
          iconSize={iconSizeCardMenu}
          fontSize={12}
          fontFamily={"Inter"}
          titleCard={"Profile PPID"}
          backgroundColor={toscaColor}
          onPress={() => navigation.navigate("Profile")}
          titleColor={"#234"}
        />
        <CardMenu
          iconName={"box-open"}
          iconColor={"white"}
          iconSize={iconSizeCardMenu}
          fontSize={12}
          fontFamily={"Inter"}
          titleCard={"Lainnya"}
          backgroundColor={"#0075CB"}
          titleColor={"#234"}
        />
      </View>
      <View
        style={{
          marginTop: 20,
          borderBottomColor: toscaColor,
          borderBottomWidth: 1,
        }}
      ></View>
      <View style={{ marginTop: 20 }}>
        <Text
          style={{
            fontFamily: "Roboto",
            fontSize: 20,
            fontWeight: "bold",
            textTransform: "capitalize",
            textAlign: "center",
            color: textPrimary,
          }}
        >
          Sistem Portal Perhubungan Laut Informatif
        </Text>
        <Text
          style={{
            fontFamily: "Roboto",
            fontSize: 20,
            fontWeight: "bold",
            textTransform: "uppercase",
            textAlign: "center",
            color: textPrimary,
          }}
        >
          {"(SPORTIF)"}
        </Text>
      </View>
    </View>
  );
};

const Home = ({ navigation }) => {
  return (
    <LayoutScreen statusBar={toscaColor} navigation={navigation}>
      <ScrollView
        style={{ marginBottom: -20, marginTop: -1 }}
        showsVerticalScrollIndicator={false}
      >
        <SwiperHome />
        <HeadlineMenu />
        <BeritaHubla />
        <FeatureMenu/>
        <UnitKerja />
        <FootSection/>
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
    height: 65,
    width: 65,
    backgroundColor: "#F0F0F0",
    flex: 1,
    borderRadius: 100,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  textHeading: {
    fontFamily: "Montserrat",
    textTransform: "capitalize",
    fontSize: 18,
    fontWeight: "bold",
    color: textPrimary,
  },
});

export default Home;
