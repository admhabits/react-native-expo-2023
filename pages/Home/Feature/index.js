//import liraries
import { textPrimary } from "~/components/configs/Colors";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { ThreeColumnWidth } from "~/components/configs/Layout";
import { orangeColor } from "~/components/configs/Colors";

const CardButton = ({ title, color, imgSrc }) => {
  return (
    <View style={{ ...styles.cardHome, backgroundColor: color,}}>
      <TouchableOpacity>
        <Text
          style={{
            ...styles.textHeading,
            fontSize: 20,
            width: 120,
            color: "white",
            fontFamily: "Roboto",
          }}
        >
          {title}
        </Text>
      </TouchableOpacity>
      <Image
        source={imgSrc}
        style={{
          width: 70,
          height: 64,
          position: "absolute",
          right: '40%',
          bottom: 30,
        }}/>
      <Image
        source={require("~/assets/menu/hubla-grey.png")}
        style={{
          width: 34,
          height: 34,
          position: "absolute",
          right: 8,
          bottom: 8,
        }}
      />
    </View>
  );
};
// create a component
const FeatureMenu = () => {
  return (
    <View
      style={{
        height: 170,
        backgroundColor: "transparent",
        paddingVertical: 0,
        paddingHorizontal: 20,
      }}
    >
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={{ paddingTop: 10, gap: 20, flexDirection: "row" }}>
          <CardButton imgSrc={require("~/assets/menu/features/icon2.png")} title={"Permohonan Informasi"} color={orangeColor} />
          <CardButton imgSrc={require("~/assets/menu/features/icon2.png")} title={"Aplikasi Online"} color={"#255D78"} />
          <CardButton imgSrc={require("~/assets/menu/features/icon2.png")} title={"Newsletter Hubla"} color={"#15756A"} />
          <CardButton imgSrc={require("~/assets/menu/features/icon2.png")} title={"Berita Hubla"} color={"#903055"} />
          <CardButton imgSrc={require("~/assets/menu/features/icon2.png")} title={"Rencana Anggaran Kerja"} color={"#808080"} />
          <CardButton imgSrc={require("~/assets/menu/features/icon2.png")} title={"Kerjasama Luar Negeri"} color={"#15224E"} />
          <CardButton imgSrc={require("~/assets/menu/features/icon2.png")} title={"Tol Laut"} color={"#15224E"} />
          <CardButton imgSrc={require("~/assets/menu/features/icon2.png")} title={"Hublapedia"} color={"#15756A"} />
        </View>
      </ScrollView>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  textHeading: {
    fontFamily: "Montserrat",
    textTransform: "capitalize",
    fontSize: 18,
    fontWeight: "bold",
    color: textPrimary,
  },
  cardHome: {
    height: 150,
    width: ThreeColumnWidth,
    backgroundColor: "#F0F0F0",
    flex: 1,
    borderRadius: 8,
    padding: 8,
  },
});

//make this component available to the app
export default FeatureMenu;
