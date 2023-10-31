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

const MenuHome = () => {
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

const BeritaItem = ({ imgSrc, onPress, headline }) => {
  return (
    <>
      <Image
        source={imgSrc}
        style={{
          width: "100%",
          height: 155,
          resizeMode: "contain",
        }}
      />
      <View
        style={{
          ...styles.cardBerita,
          flexDirection: "column",
          padding: 10,
        }}
      >
        <TouchableOpacity onPress={onPress} style={{ gap: 8 }}>
          <Text
            style={{
              fontSize: 16,
              fontFamily: "Montserrat",
              textTransform: "capitalize",
              color: textPrimary,
              textAlign: "justify",
              fontWeight: 'bold',
              lineHeight: 20,
            }}
          >
            {headline.length == 100 ? headline.slice(0, 100) + "..." : headline}
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontFamily: "Montserrat",
              color: textPrimary,
              textAlign: "justify",
            }}
          >
            BEKASI (22/8) - Kementerian Perhubungan cq Direktorat Jenderal
            Perhubungan Laut melalui Direktorat Kenavigasian berkomitmen untuk
            selal...
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const BeritaHubla = () => {
  return (
    <View
      style={{
        height: 350,
        marginTop: 15,
        padding: 20,
      }}
    >
      <View
        style={{
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Text style={styles.textHeading}>Berita Terbaru</Text>
        <TouchableOpacity
          style={{ flexDirection: "row", gap: 5, alignItems: "center" }}
        >
          <Text style={{ ...styles.textHeading, color: toscaColor }}>
            Berita Lainnya
          </Text>
          <FontAwesome name="chevron-right" size={12} color={toscaColor} />
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={{ paddingTop: 20, gap: 20, flexDirection: "row" }}>
          <View style={{ backgroundColor: "white" }}>
            <BeritaItem
              imgSrc={require("~/assets/images/berita/berita-terbaru-1.png")}
              headline={"Dorong Kemajuan Konektivitas Daerah, Kemenhub ..."}
            />
          </View>
          <View style={{ backgroundColor: "white" }}>
            <BeritaItem
              imgSrc={require("~/assets/images/berita/berita-terbaru-1.png")}
              headline={"Dorong Kemajuan Konektivitas Daerah, Kemenhub ..."}
            />
          </View>
          <View style={{ backgroundColor: "white" }}>
            <BeritaItem
              imgSrc={require("~/assets/images/berita/berita-terbaru-1.png")}
              headline={"Dorong Kemajuan Konektivitas Daerah, Kemenhub ..."}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const Home = ({ navigation }) => {
  return (
    <LayoutScreen statusBar={toscaColor} navigation={navigation}>
      <ScrollView
        style={{ marginBottom: 25, marginTop: -1 }}
        showsVerticalScrollIndicator={false}
      >
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
    height: 65,
    width: 65,
    backgroundColor: "#F0F0F0",
    flex: 1,
    borderRadius: 100,
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
    backgroundColor: "white",
    flex: 1,
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
