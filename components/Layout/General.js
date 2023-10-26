import { View, Text, Dimensions, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { StatusBar } from "expo-status-bar";
import { textPrimary, secondary } from "../configs/Colors";
import { useDispatch, useSelector } from "react-redux";
import { loadState } from "~/stores/saved/AsyncStorage";
import { updateRememberMe } from "~/stores/slices/AuthSlice";
import FontAwesome from "~/components/Icons";

export default function Layout({
  children,
  statusBar = textPrimary,
  navigation,
  titlePage,
}) {
  const { height, width } = Dimensions.get("window");
  const PaddingLayout = 10;
  const HeightLayout = 80;
  const CalculateHeight = (PaddingLayout + HeightLayout) * 2;

  return (
    <>
      <View style={styles.container}>
        <View
          style={{
            height: 60,
            backgroundColor: secondary,
            flexDirection: "row",
            alignItems: "center",
            padding: 15,
            gap: 15,
          }}
        >
          <FontAwesome name="chevron-left" size={16} color={"white"} />
          <Text
            style={{
              fontSize: 20,
              color: "white",
              fontWeight: "bold",
              fontFamily: "Roboto",
            }}
          >
            {titlePage}
          </Text>
        </View>
        <View style={{ height: height - CalculateHeight, paddingBottom: 10 }}>
          {children}
        </View>
        <Footer
          style={{
            padding: PaddingLayout,
            height: HeightLayout,
            position: "absolute",
            bottom: 0,
            width: width,
          }}
          navigation={navigation}
        />
        <StatusBar style="light" backgroundColor={statusBar} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F0F0",
    marginTop: 20,
  },

  title: {
    fontFamily: "Montserrat",
  },
});
