//import liraries
import { toscaColor, textPrimary } from "~/components/configs/Colors";
import React from "react";
import FontAwesome from "~/components/Icons";
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native";
import { ThreeColumnWidth } from "~/components/configs/Layout";

// create a component
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
              fontWeight: "bold",
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
});

//make this component available to the app
export default BeritaHubla;
