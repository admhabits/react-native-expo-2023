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

const CardButton = ({ title, color }) => {
  return (
    <View style={{ ...styles.cardHome, backgroundColor: color }}>
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
        height: 180,
        backgroundColor: "transparent",
        paddingVertical: 5,
        paddingHorizontal: 20,
      }}
    >
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={{ paddingTop: 10, gap: 20, flexDirection: "row" }}>
          <CardButton title={"Permohonan Informasi"} color={orangeColor} />
          <CardButton title={"Aplikasi Online"} color={"#255D78"} />
          <CardButton title={"Newsletter Hubla"} color={"#15756A"} />
          <CardButton title={"Berita Hubla"} color={"#903055"} />
          <CardButton title={"Rencana Anggaran Kerja"} color={"#808080"} />
          <CardButton title={"Kerjasama Luar Negeri"} color={"#15224E"} />
          <CardButton title={"Tol Laut"} color={"#15224E"} />
          <CardButton title={"Hublapedia"} color={"#15756A"} />
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
