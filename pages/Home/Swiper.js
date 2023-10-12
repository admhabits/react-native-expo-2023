//import liraries
import { LinearBackground } from "~/components/configs/LinearBackground";
import React from "react";
import { StyleSheet, TextInput, View, Text } from "react-native";
import { primary, toscaColor } from "~/components/configs/Colors";
import FontAwesome from "@expo/vector-icons/Ionicons";
import { ThreeColumnWidth } from "~/components/configs/Layout";
import SwiperLib from "~/components/Swiper/SwiperLib";
import { PaddingLayout } from "~/components/configs/Layout";
import { useDispatch, useSelector } from "react-redux";

const SearchHome = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "start",
        alignItems: "center",
        top: 90,
        marginHorizontal: 30,
        gap: 3,
        backgroundColor: "white",
        paddingHorizontal: 10,
        borderRadius: 15,
        borderColor: "#F0F0F0",
        borderWidth: 2,
      }}
    >
      <FontAwesome name="search" size={30} color={"#808080"} />
      <TextInput style={styles.inputCari} placeholder="Search"></TextInput>
    </View>
  );
};

const SwiperHome = () => {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.auth.user?.username);

  if (username != "undefined") console.log("\n Login User as : ", username);

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
          position: "absolute",
          paddingHorizontal: PaddingLayout + 10,
          paddingVertical: PaddingLayout,
          flexDirection: "row",
          gap: 5,
        }}
      >
        <Text
          style={{
            fontFamily: "Montserrat",
            fontSize: 16,
          }}
        >
          Selamat Datang
        </Text>
        <Text
          style={{
            fontFamily: "Montserrat",
            fontSize: 16,
            color: "white",
            textTransform: "capitalize",
          }}
        >
          {username ? username : "---"}
        </Text>
      </View>

      <View
        style={{
          backgroundColor: "#F0F0F0",
          height: BackgrounSwiperHeight,
        }}
      >
        <SearchHome />
      </View>
      <View
        style={{
          height: 200,
          padding: 20,
          marginTop: 45,
          position: "absolute",
        }}
      >
        <SwiperLib />
      </View>
    </>
  );
};
export default SwiperHome;

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
});
